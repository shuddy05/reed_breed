package models

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
	UserID      *string  `json:"userId,omitempty"`
}

type UserRegister struct {
	Email    string `json:"email"`
	Password string `json:"password"`
	Name     string `json:"name"`
}

type UserLogin struct {
	Email    string `json:"email"`
	Password string `json:"password"`
}
