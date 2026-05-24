package main

import (
	"encoding/json"
	"fmt"
	"log"
	"net/http"
	"os"
)

type AuditData struct {
	Industry    string   `json:"industry"`
	SubCategory string   `json:"subCategory"`
	Challenges  []string `json:"challenges"`
	TechStack   []string `json:"techStack"`
	Goal        string   `json:"goal"`
	Name        string   `json:"name"`
	Email       string   `json:"email"`
	Phone       string   `json:"phone"`
	Company     string   `json:"company"`
}

func main() {
	http.HandleFunc("/api/audit", handleAudit)

	port := os.Getenv("PORT")
	if port == "" {
		port = "8080"
	}

	fmt.Printf("Backend server starting on port %s...\n", port)
	if err := http.ListenAndServe(":"+port, nil); err != nil {
		log.Fatal(err)
	}
}

func handleAudit(w http.ResponseWriter, r *http.Request) {
	// Enable CORS
	w.Header().Set("Access-Control-Allow-Origin", "*")
	w.Header().Set("Access-Control-Allow-Methods", "POST, OPTIONS")
	w.Header().Set("Access-Control-Allow-Headers", "Content-Type")

	if r.Method == "OPTIONS" {
		return
	}

	if r.Method != "POST" {
		http.Error(w, "Method not allowed", http.StatusMethodNotAllowed)
		return
	}

	var data AuditData
	if err := json.NewDecoder(r.Body).Decode(&data); err != nil {
		http.Error(w, err.Error(), http.StatusBadRequest)
		return
	}

	// Logic for sending emails would go here.
	// For this prototype, we'll log the data and simulate success.
	fmt.Printf("Received Audit Submission: %+v\n", data)

	// In a real app, use a service like SendGrid, Mailgun, or SMTP
	sendUserThankYou(data.Email, data.Name)
	sendAdminNotification(data)

	w.WriteHeader(http.StatusOK)
	json.NewEncoder(w).Encode(map[string]string{"status": "success", "message": "Audit data received and emails triggered"})
}

func sendUserThankYou(email, name string) {
	fmt.Printf("Simulating Email to User (%s): Thank you, %s! Your roadmap is being prepared.\n", email, name)
}

func sendAdminNotification(data AuditData) {
	fmt.Printf("Simulating Email to Admin: New Audit Request from %s (%s) at %s.\n", data.Name, data.Email, data.Company)
}
