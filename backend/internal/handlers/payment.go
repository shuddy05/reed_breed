package handlers

import (
	"context"
	"encoding/json"
	"net/http"
	"time"

	"github.com/user/reed_breed/backend/db"
)

type PaymentHandler struct {
	Prisma *db.PrismaClient
}

func NewPaymentHandler(prisma *db.PrismaClient) *PaymentHandler {
	return &PaymentHandler{Prisma: prisma}
}

func (h *PaymentHandler) InitializeTransaction(w http.ResponseWriter, r *http.Request) {
	// Logic to call Paystack API and return checkout URL
	json.NewEncoder(w).Encode(map[string]string{
		"checkout_url": "https://checkout.paystack.com/fake-demo-link",
	})
}

func (h *PaymentHandler) Webhook(w http.ResponseWriter, r *http.Request) {
	var event struct {
		Event string `json:"event"`
		Data  struct {
			Reference string `json:"reference"`
			Metadata  struct {
				InvoiceID string `json:"invoice_id"`
			} `json:"metadata"`
		} `json:"data"`
	}

	if err := json.NewDecoder(r.Body).Decode(&event); err != nil {
		w.WriteHeader(http.StatusBadRequest)
		return
	}

	if event.Event == "charge.success" {
		invoiceID := event.Data.Metadata.InvoiceID
		ctx := context.Background()

		invoice, err := h.Prisma.Invoice.FindUnique(
			db.Invoice.ID.Equals(invoiceID),
		).Exec(ctx)

		if err != nil {
			w.WriteHeader(http.StatusNotFound)
			return
		}

		// Update Invoice
		_, _ = h.Prisma.Invoice.FindUnique(
			db.Invoice.ID.Equals(invoiceID),
		).Update(
			db.Invoice.Status.Set("PAID"),
			db.Invoice.PaidAt.Set(time.Now()),
		).Exec(ctx)

		// Upsert Subscription
		_, _ = h.Prisma.Subscription.UpsertOne(
			db.Subscription.UserID.Equals(invoice.UserID),
		).Create(
			db.Subscription.User.Link(db.User.ID.Equals(invoice.UserID)),
			db.Subscription.Plan.Set(invoice.Plan),
			db.Subscription.Amount.Set(invoice.Amount),
			db.Subscription.Status.Set("ACTIVE"),
			db.Subscription.PaystackRef.Set(event.Data.Reference),
		).Update(
			db.Subscription.Plan.Set(invoice.Plan),
			db.Subscription.Amount.Set(invoice.Amount),
			db.Subscription.Status.Set("ACTIVE"),
			db.Subscription.PaystackRef.Set(event.Data.Reference),
		).Exec(ctx)
	}

	w.WriteHeader(http.StatusOK)
}
