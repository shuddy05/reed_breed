package handlers

import (
	"context"
	"encoding/json"
	"fmt"
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

func (h *AdminHandler) GenerateInvoice(w http.ResponseWriter, r *http.Request) {
	var req struct {
		UserID string `json:"userId"`
		Amount int    `json:"amount"`
		Plan   string `json:"plan"`
	}
	if err := json.NewDecoder(r.Body).Decode(&req); err != nil {
		http.Error(w, err.Error(), http.StatusBadRequest)
		return
	}

	ctx := context.Background()
	invoice, err := h.Prisma.Invoice.CreateOne(
		db.Invoice.Amount.Set(req.Amount),
		db.Invoice.User.Link(db.User.ID.Equals(req.UserID)),
		db.Invoice.Plan.Set(req.Plan),
	).Exec(ctx)

	if err != nil {
		http.Error(w, "Failed to create invoice", http.StatusInternalServerError)
		return
	}

	// Link for the client to pay
	paymentLink := fmt.Sprintf("http://localhost:3000/payment/%s", invoice.ID)

	json.NewEncoder(w).Encode(map[string]string{
		"invoiceId":   invoice.ID,
		"paymentLink": paymentLink,
	})
}
