# Scalable RESTful User Management API

A secure, modular, and enterprise-grade RESTful API built with
**Node.js (ES Modules)**, **Express.js**, **MongoDB (Mongoose)**, **JWT Authentication**, and **Joi Validation**.

---

## Architecture & Design Pattern

This project follows the **Controller-Service-Layered Architecture** ensuring complete separation of concerns and high scalability:

```text
Request ──► Router ──► Validation (Joi) ──► Auth Middleware (JWT) ──► Controller ──► Service ──► Database (Mongoose)
                                                                                             │
Response ◄───────────────────────────────────────────────────────────────────────────────────┴── (Data / Error)
Routes: Defines API endpoints and attaches validation & auth middlewares.
Validations (Joi): Validates request bodies, query params, and route parameters before execution.
Middlewares: Handles JWT authentication, request context, and centralized error handling.
Controllers: Manages incoming HTTP requests, status codes, and responses.
Services: Houses pure business logic and database queries.
Models: Defines Mongoose schemas with password hashing hooks.

       Features

1 ES Modules (import/export) natively supported.
2 Authentication: User Registration & Login with JWT and bcryptjs password hashing.
3 Protected Routes: Bearer Token authentication middleware.
4 Complete CRUD: Create, Read (all with filters & single by ID), Update, and Delete user records.
5 Query Filters: Search users by name, email, or phoneNumber.
6 Input Validation: Robust schema validation via Joi.
7 Centralized Error Handling: Standardized error responses with ApiError class.

   Tech Stack
1 Runtime: Node.js (v20+)
2 Framework: Express.js (v4.x)
3 Database: MongoDB via Mongoose ORM
4 Authentication: JSON Web Tokens (jsonwebtoken)
5 Password Security: bcryptjs
6 Validation: Joi


Environment Config: dotenv
📁 Project Directory Structure
code
Text
├── src/
│   ├── config/
│   │   └── db.js                      # MongoDB connection setup
│   ├── controllers/
│   │   ├── authController.js          # Handles auth request/response
│   │   └── userController.js          # Handles user CRUD request/response
│   ├── middlewares/
│   │   ├── authMiddleware.js          # JWT verification middleware
│   │   ├── errorMiddleware.js         # Central error handling middleware
│   │   └── validateMiddleware.js      # Joi schema validator middleware
│   ├── models/
│   │   └── User.js                    # User Mongoose model & password hooks
│   ├── routes/
│   │   ├── authRoutes.js              # Auth endpoints definition
│   │   ├── userRoutes.js              # User CRUD endpoints definition
│   │   └── index.js                   # Main route aggregator
│   ├── services/
│   │   ├── authService.js             # Auth business logic & DB queries
│   │   └── userService.js             # User CRUD business logic & DB queries
│   ├── utils/
│   │   ├── apiError.js                # Custom operational error class
│   │   └── generateToken.js           # JWT generator & verification utility
│   ├── validations/
│   │   ├── authValidation.js          # Joi schemas for auth routes
│   │   └── userValidation.js          # Joi schemas for user routes
│   ├── app.js                         # Express app configuration & middleware
│   └── server.js                      # Application entry & server startup
├── .env.example
├── .gitignore
├── package.json
└── README.md

   Installation & Setup
1. Prerequisites
Node.js (v18.x or above)
MongoDB installed locally or MongoDB Atlas URI
2. Clone the Repository
code
Bash
git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name
3. Install Dependencies
code
Bash
npm install
4. Configure Environment Variables
Create a .env file in the root folder:
code
Env
PORT=5000
NODE_ENV=development
MONGO_URI=mongodb://localhost:27017/user_management_db
JWT_SECRET=your_super_secret_jwt_key_12345
JWT_EXPIRE=30d
5. Run the Application
code
Bash
# Start in development mode (with nodemon)
npm run dev

# Start in production mode
npm start
    API Endpoints & Documentation
Base URL: http://localhost:5000/api

1. Authentication Routes

Method	Endpoint	Access	Description

POST	/auth/register	Public	Register a new user
POST	/auth/login	Public	Login user & receive JWT token
Register Request Body:
code
JSON
{
  "name": "Rahul Sharma",
  "email": "rahul@example.com",
  "phoneNumber": "+919876543210",
  "password": "password123"
}
Login Request Body:
code
JSON
{
  "email": "rahul@example.com",
  "password": "password123"
}
2. User CRUD Routes (Protected)
 For all routes below, pass the Bearer token in the request header:
Authorization: Bearer <your_jwt_token>
 Method	Endpoint	Access	Description


POST	/users	Private	Create a new user
GET	/users	Private	Get all users (supports query filters)
GET	/users/:id	Private	Get single user by MongoDB ID
PUT	/users/:id	Private	Update user details by ID
DELETE	/users/:id	Private	Delete user by ID
  Query Filters Example (GET /api/users)
Filter by Email:
GET /api/users?email=rahul@example.com
Filter by Phone Number:
GET /api/users?phoneNumber=9876543210
Filter by Name:
GET /api/users?name=Rahul
  Postman Testing Guide
Call POST /api/auth/register or POST /api/auth/login.

```
