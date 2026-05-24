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
