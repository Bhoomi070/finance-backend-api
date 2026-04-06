# 💰 Finance Data Processing Backend API

## 🚀 Overview
This project is a backend system for managing financial records with role-based access control.  
It allows users to create, manage, and analyze financial data through secure APIs.

---

## 🛠 Tech Stack
- Node.js
- Express.js
- MongoDB (Mongoose)
- JWT Authentication

---

## ✨ Features

### 🔐 Authentication & Authorization
- User registration & login
- JWT-based authentication
- Role-based access control:
  - **Admin** → Full access
  - **Analyst** → View records & dashboard
  - **Viewer** → Read-only access

---

### 💰 Financial Records
- Create records (income / expense)
- View records
- Filter by type & category
- Search functionality
- Pagination support

---

### 📊 Dashboard
- Total income
- Total expenses
- Net balance
- Built using MongoDB aggregation pipeline

---

## 🧠 Architecture
- MVC Pattern (Models, Controllers, Routes)
- Middleware-based authentication & authorization
- Clean and scalable folder structure

---

## 📡 API Endpoints

### 🔑 Auth
- `POST /api/auth/register`
- `POST /api/auth/login`

---

### 💰 Records
- `POST /api/records` (Admin only)
- `GET /api/records?page=1&search=salary`

---

### 📊 Dashboard
- `GET /api/dashboard`

---

## 🧪 API Testing (Postman)

I have included a Postman collection to test all APIs easily.

👉 Steps:
1. Import the Postman collection
2. Run login API
3. Copy the JWT token
4. Add token in headers:
   Authorization: YOUR_TOKEN
5. Test all APIs

---

## ⚙️ Setup Instructions

```bash
# Clone the repository
git clone https://github.com/YOUR_USERNAME/finance-backend-api.git

# Install dependencies
npm install

# Run server
npm run dev

----
🔐 Environment Variables
Create a .env file:
PORT=5000
MONGO_URI=mongodb://localhost:27017/finance_db
JWT_SECRET=your_secret_key


💡 Key Highlights
Implemented role-based access control using middleware
Used MongoDB aggregation pipeline for financial insights
Designed scalable MVC architecture
Added validation, pagination, and search functionality


📌 Notes
This project is built for backend evaluation purposes
Focused on clean code, structure, and logic implementation



---

## 🧪 API Testing (Postman)

You can test all APIs using this Postman collection:

👉 [Postman Collection Link]([PASTE_YOUR_LINK_HERE](https://www.postman.com/bhoomi3100-7246192/finance-backend/collection/49014533-9982bf4c-0ae4-4584-a5cd-f54b15a5098f/?action=share&creator=49014533))

Steps:
1. Open the link
2. Fork or import collection
3. Run login API
4. Copy token
5. Add token in headers:
   Authorization: YOUR_TOKEN
