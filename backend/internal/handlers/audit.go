package handlers

import (
	"context"
	"encoding/json"
	"log"
	"net/http"
	"strings"

	"github.com/user/reed_breed/backend/db"
	"github.com/user/reed_breed/backend/internal/models"
)

type AuditHandler struct {
	Prisma *db.PrismaClient
}

func NewAuditHandler(prisma *db.PrismaClient) *AuditHandler {
	return &AuditHandler{Prisma: prisma}
}

func (h *AuditHandler) HandleAudit(w http.ResponseWriter, r *http.Request) {
	if r.Method != "POST" {
		http.Error(w, "Method not allowed", http.StatusMethodNotAllowed)
		return
	}

	var data models.AuditData
	if err := json.NewDecoder(r.Body).Decode(&data); err != nil {
		http.Error(w, err.Error(), http.StatusBadRequest)
		return
	}

	ctx := context.Background()
	optionalParams := []db.AuditRequestSetParam{}
	if data.UserID != nil {
		optionalParams = append(optionalParams, db.AuditRequest.UserID.Set(*data.UserID))
	}

	_, err := h.Prisma.AuditRequest.CreateOne(
		db.AuditRequest.Industry.Set(data.Industry),
		db.AuditRequest.SubCategory.Set(data.SubCategory),
		db.AuditRequest.Challenges.Set(strings.Join(data.Challenges, ", ")),
		db.AuditRequest.TechStack.Set(strings.Join(data.TechStack, ", ")),
		db.AuditRequest.Goal.Set(data.Goal),
		db.AuditRequest.Name.Set(data.Name),
		db.AuditRequest.Email.Set(data.Email),
		db.AuditRequest.Phone.Set(data.Phone),
		db.AuditRequest.Company.Set(data.Company),
		optionalParams...,
	).Exec(ctx)

	if err != nil {
		log.Printf("Error saving to database: %v", err)
		http.Error(w, "Internal server error", http.StatusInternalServerError)
		return
	}

	// Email triggering logic would go here (using internal/utils/email.go later)

	w.WriteHeader(http.StatusOK)
	json.NewEncoder(w).Encode(map[string]string{"status": "success"})
}

func (h *AuditHandler) GetCustomChallenges(w http.ResponseWriter, r *http.Request) {
	industry := r.URL.Query().Get("industry")
	if industry == "" {
		http.Error(w, "Industry is required", http.StatusBadRequest)
		return
	}

	ctx := context.Background()
	challenges, err := h.Prisma.CustomChallenge.FindMany(
		db.CustomChallenge.Industry.Equals(industry),
	).OrderBy(
		db.CustomChallenge.Count.Order(db.SortOrderDesc),
	).Exec(ctx)

	if err != nil {
		http.Error(w, "Failed to fetch custom challenges", http.StatusInternalServerError)
		return
	}

	json.NewEncoder(w).Encode(challenges)
}

func (h *AuditHandler) AddCustomChallenge(w http.ResponseWriter, r *http.Request) {
	var req struct {
		Label    string `json:"label"`
		Industry string `json:"industry"`
	}
	if err := json.NewDecoder(r.Body).Decode(&req); err != nil {
		http.Error(w, err.Error(), http.StatusBadRequest)
		return
	}

	ctx := context.Background()
	// Upsert: Create if doesn't exist, or increment count if it does
	challenge, err := h.Prisma.CustomChallenge.UpsertOne(
		db.CustomChallenge.LabelIndustry(
			db.CustomChallenge.Label.Equals(req.Label),
			db.CustomChallenge.Industry.Equals(req.Industry),
		),
	).Create(
		db.CustomChallenge.Label.Set(req.Label),
		db.CustomChallenge.Industry.Set(req.Industry),
	).Update(
		db.CustomChallenge.Count.Increment(1),
	).Exec(ctx)

	if err != nil {
		log.Printf("Error adding custom challenge: %v", err)
		http.Error(w, "Failed to save challenge", http.StatusInternalServerError)
		return
	}

	json.NewEncoder(w).Encode(challenge)
}
