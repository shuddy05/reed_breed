package main

import (
	"fmt"
	"log"
	"net/http"
	"os"

	"github.com/user/reed_breed/backend/db"
	"github.com/user/reed_breed/backend/internal/routes"
)

func main() {
	prisma := db.NewClient()
	if err := prisma.Connect(); err != nil {
		log.Fatalf("Failed to connect to Prisma: %v", err)
	}
	defer func() {
		if err := prisma.Disconnect(); err != nil {
			panic(fmt.Errorf("failed to disconnect prisma: %w", err))
		}
	}()

	mux := routes.SetupRoutes(prisma)

	// Wrap mux with a basic CORS middleware for development
	handler := corsMiddleware(mux)

	port := os.Getenv("PORT")
	if port == "" {
		port = "8080"
	}

	fmt.Printf("Backend server starting on port %s...\n", port)
	if err := http.ListenAndServe(":"+port, handler); err != nil {
		log.Fatal(err)
	}
}

func corsMiddleware(next http.Handler) http.Handler {
	return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		w.Header().Set("Access-Control-Allow-Origin", "http://localhost:3000") // Replace with frontend URL
		w.Header().Set("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS")
		w.Header().Set("Access-Control-Allow-Headers", "Content-Type, Authorization")
		w.Header().Set("Access-Control-Allow-Credentials", "true")

		if r.Method == "OPTIONS" {
			return
		}

		next.ServeHTTP(w, r)
	})
}
