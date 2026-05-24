package main

import (
	"context"
	"fmt"
	"log"

	"github.com/user/reed_breed/backend/db"
	"golang.org/x/crypto/bcrypt"
)

func main() {
	client := db.NewClient()
	if err := client.Connect(); err != nil {
		log.Fatal(err)
	}
	defer client.Disconnect()

	ctx := context.Background()

	// Create Admin
	hashedPassword, _ := bcrypt.GenerateFromPassword([]byte("admin123"), bcrypt.DefaultCost)
	admin, err := client.User.CreateOne(
		db.User.Email.Set("admin@reedbreed.com"),
		db.User.PasswordHash.Set(string(hashedPassword)),
		db.User.Name.Set("Super Admin"),
		db.User.Role.Set("ADMIN"),
	).Exec(ctx)

	if err != nil {
		fmt.Printf("Admin already exists: %v\n", err)
	} else {
		fmt.Printf("Created Admin: %s\n", admin.Email)
	}

	// Create Dummy Client
	hashedPasswordClient, _ := bcrypt.GenerateFromPassword([]byte("client123"), bcrypt.DefaultCost)
	user, err := client.User.CreateOne(
		db.User.Email.Set("client@example.com"),
		db.User.PasswordHash.Set(string(hashedPasswordClient)),
		db.User.Name.Set("John Client"),
		db.User.Role.Set("CLIENT"),
	).Exec(ctx)

	if err != nil {
		fmt.Printf("Client already exists: %v\n", err)
	} else {
		fmt.Printf("Created Client: %s\n", user.Email)
		
		// Create a project for the client
		project, _ := client.Project.CreateOne(
			db.Project.Name.Set("Brand Transformation"),
			db.Project.User.Link(db.User.ID.Equals(user.ID)),
		).Exec(ctx)

		client.Deliverable.CreateOne(
			db.Deliverable.Title.Set("Logo Design"),
			db.Deliverable.Project.Link(db.Project.ID.Equals(project.ID)),
			db.Deliverable.Status.Set("COMPLETED"),
		).Exec(ctx)

		client.Deliverable.CreateOne(
			db.Deliverable.Title.Set("Website Prototype"),
			db.Deliverable.Project.Link(db.Project.ID.Equals(project.ID)),
			db.Deliverable.Status.Set("IN_PROGRESS"),
		).Exec(ctx)
	}
}
