package handlers

import (
	"context"
	"encoding/json"
	"net/http"
	"os"
	"time"

	"github.com/golang-jwt/jwt/v5"
	"github.com/user/reed_breed/backend/db"
	"github.com/user/reed_breed/backend/internal/middleware"
	"github.com/user/reed_breed/backend/internal/models"
	"golang.org/x/crypto/bcrypt"
)

type AuthHandler struct {
	Prisma *db.PrismaClient
}

func NewAuthHandler(prisma *db.PrismaClient) *AuthHandler {
	return &AuthHandler{Prisma: prisma}
}

func (h *AuthHandler) Register(w http.ResponseWriter, r *http.Request) {
	var req models.UserRegister
	if err := json.NewDecoder(r.Body).Decode(&req); err != nil {
		http.Error(w, err.Error(), http.StatusBadRequest)
		return
	}

	hashedPassword, _ := bcrypt.GenerateFromPassword([]byte(req.Password), bcrypt.DefaultCost)

	ctx := context.Background()
	user, err := h.Prisma.User.CreateOne(
		db.User.Email.Set(req.Email),
		db.User.PasswordHash.Set(string(hashedPassword)),
		db.User.Name.Set(req.Name),
	).Exec(ctx)

	if err != nil {
		http.Error(w, "User already exists", http.StatusConflict)
		return
	}

	// Link existing audits by email
	_, _ = h.Prisma.AuditRequest.FindMany(
		db.AuditRequest.Email.Equals(req.Email),
	).Update(
		db.AuditRequest.UserID.Set(user.ID),
	).Exec(ctx)

	json.NewEncoder(w).Encode(user)
}

func (h *AuthHandler) Login(w http.ResponseWriter, r *http.Request) {
	var req models.UserLogin
	if err := json.NewDecoder(r.Body).Decode(&req); err != nil {
		http.Error(w, err.Error(), http.StatusBadRequest)
		return
	}

	ctx := context.Background()
	user, err := h.Prisma.User.FindUnique(
		db.User.Email.Equals(req.Email),
	).Exec(ctx)

	if err != nil || bcrypt.CompareHashAndPassword([]byte(user.PasswordHash), []byte(req.Password)) != nil {
		http.Error(w, "Invalid credentials", http.StatusUnauthorized)
		return
	}

	token := jwt.NewWithClaims(jwt.SigningMethodHS256, jwt.MapClaims{
		"userId": user.ID,
		"role":   user.Role,
		"exp":    time.Now().Add(time.Hour * 72).Unix(),
	})

	tokenString, _ := token.SignedString([]byte(os.Getenv("JWT_SECRET")))

	http.SetCookie(w, &http.Cookie{
		Name:     "auth_token",
		Value:    tokenString,
		Expires:  time.Now().Add(time.Hour * 72),
		HttpOnly: true,
		Secure:   true, // Should be true in production
		Path:     "/",
		SameSite: http.SameSiteStrictMode,
	})

	json.NewEncoder(w).Encode(map[string]string{"message": "Logged in successfully"})
}

func (h *AuthHandler) Logout(w http.ResponseWriter, r *http.Request) {
	http.SetCookie(w, &http.Cookie{
		Name:     "auth_token",
		Value:    "",
		Expires:  time.Now().Add(-time.Hour),
		HttpOnly: true,
		Path:     "/",
	})
	json.NewEncoder(w).Encode(map[string]string{"message": "Logged out successfully"})
}

func (h *AuthHandler) Me(w http.ResponseWriter, r *http.Request) {
	userId, ok := r.Context().Value(middleware.UserIDKey).(string)
	if !ok {
		http.Error(w, "Unauthorized", http.StatusUnauthorized)
		return
	}
	ctx := context.Background()
	user, err := h.Prisma.User.FindUnique(
		db.User.ID.Equals(userId),
	).Exec(ctx)

	if err != nil {
		http.Error(w, "User not found", http.StatusNotFound)
		return
	}

	json.NewEncoder(w).Encode(user)
}
