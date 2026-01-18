# 🏡 StayEase – Full Stack Web Application

StayEase is a full-stack web application inspired by Airbnb, built to gain hands-on experience in designing, developing, and deploying production-ready web applications.

The project focuses on real-world backend concepts such as authentication, authorization, database relationships, cloud integrations, and deployment workflows.

---

## 🌍 Live Demo

🔗 **Live Application:** https://stayease-dk67.onrender.com  

---

## 📌 Project Overview

StayEase allows users to explore property listings, create and manage their own listings, upload images, and interact through reviews.

The application is structured using the **MVC (Model–View–Controller)** architecture, ensuring clean separation of concerns and maintainable code.

This project was built step by step with a strong focus on understanding *how real-world systems work* rather than just following tutorials.

---

## ✨ Core Features

### 👤 User Management
- User registration and login
- Secure authentication using sessions
- Logout functionality
- Automatic login after successful signup

### 🏠 Listings
- Create, edit, and delete property listings
- Category-based filtering
- Image upload and management
- Listing ownership association
- Authorization to restrict editing/deleting to owners only

### ⭐ Reviews
- Add and delete reviews
- Authorization for review actions
- Server-side and client-side validation

### 🎨 UI & UX
- Responsive UI built with Bootstrap
- Flash messages for real-time user feedback
- Centralized error pages
- Sticky navigation and filter components

---

## 🛠️ Tech Stack

### Backend
- ⚙️ Node.js
- 🚀 Express.js
- 🗄️ MongoDB
- 🧩 Mongoose

### Frontend
- 🧱 EJS (Embedded JavaScript Templates)
- 🎨 Bootstrap

### Authentication & Security
- 🔐 Passport.js
- 🍪 Express-session
- 🛡️ Authorization middleware
- 🔒 Protected routes

### Cloud & Deployment
- ☁️ MongoDB Atlas – Cloud database
- 🖼️ Cloudinary – Image storage and management
- 🚀 Render – Application deployment
- 🔑 Environment-based configuration

### Version Control
- 🗂️ Git
- 🌐 GitHub

---

## 🏗️ Architecture

The project follows the **MVC architecture**:

- **Models:** Database schemas and relationships
- **Views:** EJS templates for rendering the UI
- **Controllers:** Business logic and data handling
- **Routes:** Clean and modular route structure
- **Middleware:** Authentication, authorization, validation, and error handling

---

## ❗ Error Handling & Validation

- Centralized error handling using custom middleware
- Graceful handling of invalid routes and database errors
- Server-side validation for data integrity
- Client-side validation using Bootstrap
- User-friendly error messages

---
