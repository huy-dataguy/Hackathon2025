# Salus Assistant

**Salus** means *health* in Latin — and that’s exactly what we aim to promote.

Salus Assistant is a full-stack intelligent dietary assistant focusing on **Vietnamese culinary items**.
Salus provides nutritional insights, daily tracking, smart recommendations, and interactive support to help users eat healthier while celebrating Vietnam’s rich culinary culture.

This project was built in 24 hours during the **Hackathon 2025 at HCMUTE**, under the theme *"Trợ lý thời @" (Assistants in the @ era)*.

---

## Features

### Personalized Daily Nutrition Goals

Salus analyzes user information (e.g., age, gender, weight, height, activity level) to suggest an ideal daily intake of calories and essential nutrients.

### Smart Meal Recommendations

Receive personalized dish suggestions based on your health goals, dietary restrictions, and food preferences.

### Interactive Chat with Salus

Get advice and tips from Salus via an intelligent chat assistant optimize promt to answer dietary questions and suggest healthy eating strategies.

### Meal Image Recognition

Upload a photo of your meal, and Salus will recognize the food and provide a calorie and nutrient breakdown using AI-based image analysis.

### Daily Nutrient Visualization

Track your daily intake of calories, carbs, protein, fat, sugar, and sodium — all visualized in a simple, user-friendly dashboard.

### Morning Summary Email

Wake up to a summary email detailing your nutrition status from the previous day, with personalized feedback and encouragement.

> **Note**: Nutritional values are estimations and may vary depending on portion size and preparation methods. Use as a reference only.

---

## Tech Stack

### Frontend

* React
* Vite
* Tailwind CSS

### Backend

* Spring Boot
* MySQL

### AI Services

* Gemini 2.0 Flash API
* Flask (Image Recognition Service)

### Data & ETL

* Python (Web scraping, ETL)
* Selenium
* Azure SDK
* SQL

### Cloud & Infra

* Azure Blob Storage
* Microsoft Entra ID (Authentication)
* Docker
* Docker Compose

---

## Team Members

* **Nguyen Quoc Huy** — Frontend Developer
* **Ho Vu Thanh Binh** — Backend Developer
* **Nguyen Minh Quang** — Prompt Engineer
* **Nguyen Thi Ngoc Han** — Data Engineer

---

## Project Story

We initially explored building a "Safety Score Assistant" that helps users assess the safety of living zones based on data pipelines and dynamic risk metrics. However, after several hours of conceptual challenges, we pivoted to an idea that felt more tangible within 24 hours: a health assistant rooted in Vietnamese cuisine.

We named it **Salus**, meaning *health*, and shifted our focus to making Vietnamese food more accessible, transparent, and nutritious through technology.

Despite it being our first collaboration as a team, the synergy was remarkable. We designed the full architecture together, from frontend to backend to data sourcing and AI integration. We hope to continue polishing this project after the Hackathon and eventually publish it as a public resource.

---

We are in the process of containerizing the project using Docker. Once ready, this section will be updated with:

* Step-by-step instructions to run locally using Docker Compose
* How to configure your `.env` file
* Optional deployment on cloud (Azure)
