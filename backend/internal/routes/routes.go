package routes

import (
	"net/http"

	"github.com/user/reed_breed/backend/db"
	"github.com/user/reed_breed/backend/internal/handlers"
	"github.com/user/reed_breed/backend/internal/middleware"
)

func SetupRoutes(prisma *db.PrismaClient) *http.ServeMux {
	mux := http.NewServeMux()

	authHandler := handlers.NewAuthHandler(prisma)
	auditHandler := handlers.NewAuditHandler(prisma)
	adminHandler := handlers.NewAdminHandler(prisma)
	clientHandler := handlers.NewClientHandler(prisma)
	paymentHandler := handlers.NewPaymentHandler(prisma)

	// Public Routes
	mux.HandleFunc("/api/auth/register", authHandler.Register)
	mux.HandleFunc("/api/auth/login", authHandler.Login)
	mux.HandleFunc("/api/audit", auditHandler.HandleAudit)
	mux.HandleFunc("/api/webhooks/paystack", paymentHandler.Webhook)

	// Protected Routes
	mux.Handle("/api/auth/me", middleware.AuthMiddleware(http.HandlerFunc(authHandler.Me)))

	// Client Routes
	mux.Handle("/api/client/overview", middleware.AuthMiddleware(http.HandlerFunc(clientHandler.GetOverview)))
	mux.Handle("/api/client/subscription", middleware.AuthMiddleware(http.HandlerFunc(clientHandler.GetSubscription)))
	mux.Handle("/api/client/payment/init", middleware.AuthMiddleware(http.HandlerFunc(paymentHandler.InitializeTransaction)))

	// Admin Routes
	mux.Handle("/api/admin/audits", middleware.AuthMiddleware(middleware.RequireRole("ADMIN", http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		if r.Method == "GET" {
			adminHandler.ListAudits(w, r)
		} else if r.Method == "PUT" {
			adminHandler.UpdateAuditStatus(w, r)
		} else {
			http.Error(w, "Method not allowed", http.StatusMethodNotAllowed)
		}
	}))))

	return mux
}
