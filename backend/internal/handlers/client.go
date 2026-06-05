package handlers

import (
	"context"
	"encoding/json"
	"net/http"

	"github.com/user/reed_breed/backend/db"
	"github.com/user/reed_breed/backend/internal/middleware"
)

type ClientHandler struct {
	Prisma *db.PrismaClient
}

func NewClientHandler(prisma *db.PrismaClient) *ClientHandler {
	return &ClientHandler{Prisma: prisma}
}

func (h *ClientHandler) GetOverview(w http.ResponseWriter, r *http.Request) {
	userId := r.Context().Value(middleware.UserIDKey).(string)
	ctx := context.Background()

	projects, err := h.Prisma.Project.FindMany(
		db.Project.UserID.Equals(userId),
	).With(
		db.Project.Deliverables.Fetch(),
	).Exec(ctx)

	if err != nil {
		http.Error(w, "Failed to fetch overview", http.StatusInternalServerError)
		return
	}

	json.NewEncoder(w).Encode(projects)
}

func (h *ClientHandler) GetSubscription(w http.ResponseWriter, r *http.Request) {
	userId := r.Context().Value(middleware.UserIDKey).(string)
	ctx := context.Background()

	sub, err := h.Prisma.Subscription.FindUnique(
		db.Subscription.UserID.Equals(userId),
	).Exec(ctx)

	if err != nil {
		http.Error(w, "No subscription found", http.StatusNotFound)
		return
	}

	json.NewEncoder(w).Encode(sub)
}

func (h *ClientHandler) GetInvoice(w http.ResponseWriter, r *http.Request) {
	invoiceId := r.URL.Query().Get("id")
	if invoiceId == "" {
		http.Error(w, "Invoice ID is required", http.StatusBadRequest)
		return
	}

	ctx := context.Background()
	invoice, err := h.Prisma.Invoice.FindUnique(
		db.Invoice.ID.Equals(invoiceId),
	).With(
		db.Invoice.User.Fetch(),
	).Exec(ctx)

	if err != nil {
		http.Error(w, "Invoice not found", http.StatusNotFound)
		return
	}

	json.NewEncoder(w).Encode(invoice)
}
