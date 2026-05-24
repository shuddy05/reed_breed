package utils

import (
	"bytes"
	"fmt"
	"html/template"
	"net/smtp"
	"os"
)

func RenderTemplate(tmplStr string, data interface{}) (string, error) {
	tmpl, err := template.New("email").Parse(tmplStr)
	if err != nil {
		return "", err
	}
	var buf bytes.Buffer
	if err := tmpl.Execute(&buf, data); err != nil {
		return "", err
	}
	return buf.String(), nil
}

func SendEmail(to, subject, body string) error {
	from := os.Getenv("SMTP_EMAIL")
	pass := os.Getenv("SMTP_PASSWORD")
	host := os.Getenv("SMTP_HOST")
	port := os.Getenv("SMTP_PORT")

	if from == "" || pass == "" {
		return fmt.Errorf("SMTP credentials not set")
	}

	msg := "From: " + from + "\n" +
		"To: " + to + "\n" +
		"Subject: " + subject + "\n" +
		"MIME-version: 1.0;\n" +
		"Content-Type: text/html; charset=\"UTF-8\";\n\n" +
		body

	auth := smtp.PlainAuth("", from, pass, host)
	return smtp.SendMail(host+":"+port, auth, from, []string{to}, []byte(msg))
}
