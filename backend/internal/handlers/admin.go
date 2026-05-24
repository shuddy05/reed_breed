package handlers

import (
	"context"
	"encoding/json"
	"net/http"

	"github.com/user/reed_breed/backend/db"
)

type AdminHandler struct {
	Prisma *db.PrismaClient
}

func NewAdminHandler(prisma *db.PrismaClient) *AdminHandler {
	return &AdminHandler{Prisma: prisma}
}

func (h *AdminHandler) ListAudits(w http.ResponseWriter, r *http.Request) {
	ctx := context.Background()
	audits, err := h.Prisma.AuditRequest.FindMany().OrderBy(
		db.AuditRequest.CreatedAt.Order(db.SortOrderDesc),
	).Exec(ctx)

	if err != nil {
		http.Error(w, "Failed to fetch audits", http.StatusInternalServerError)
		return
	}

	json.NewEncoder(w).Encode(audits)
}

func (h *AdminHandler) UpdateAuditStatus(w http.ResponseWriter, r *http.Request) {
	var req struct {
		ID     string `json:"id"`
		Status string `json:"status"`
	}
	if err := json.NewDecoder(r.Body).Decode(&req); err != nil {
		http.Error(w, err.Error(), http.StatusBadRequest)
		return
	}

	ctx := context.Background()
	audit, err := h.Prisma.AuditRequest.FindUnique(
		db.AuditRequest.ID.Equals(req.ID),
	).Update(
		db.AuditRequest.Status.Set(req.Status),
	).Exec(ctx)

	if err != nil {
		http.Error(w, "Failed to update audit", http.StatusInternalServerError)
		return
	}

	json.NewEncoder(w).Encode(audit)
}
