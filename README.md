# Quick Bite - MERN Stack Food Ordering App

## Overview
Quick Bite is a food ordering application built using the MERN stack (MongoDB, Express, React, Node.js). This application allows users to browse, order food, and track their orders. Administrators can manage food items, handle user accounts, and perform CRUD operations. The app integrates Cloudinary for image handling and Mailgun for email notifications.

## Features
### User Features
- **Browse Food Items:** Users can view various food items with details like price, cook time, and ratings.
- **Order Food:** Users can add items to their cart and place orders.
- **Track Orders:** Users can track the status of their orders in real-time.
- **User Authentication:** Register and log in using email and password.
- **Profile Management:** Users can manage their profile information.

### Admin Features (email: steven@gmail.com, password: 12345)
- **CRUD Operations on Food Items:** Admins can create, read, update, and delete food items.
- **User Management:** Admins can view, edit, and block/unblock users.
- **Order Management:** Admins can view and update order statuses.

## Technologies Used
- **Frontend:** React, Ant Design for UI components
- **Backend:** Node.js, Express.js
- **Database:** MongoDB
- **Image Handling:** Cloudinary
- **Email Notifications:** Mailgun

## Getting Started

### Prerequisites
- Node.js and npm installed
- MongoDB installed and running
- Cloudinary account for image uploads
- Mailgun account for sending emails

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/yourusername/quick-bite.git
   cd quick-bite

 ###  Usage
   User Actions
      -Register: Users can register using their email and password.
      -Login: Users can log in to their accounts.
      -Browse Food: Users can view available food items.
      -Order Food: Users can add food items to the cart and place orders.
      -Track Orders: Users can view the status of their orders.

   Admin Actions
      -Manage Food Items: Admins can add, update, or delete food items.
      -Manage Users: Admins can view, edit, and block/unblock users.
      -Manage Orders: Admins can update the status of orders.

   API Endpoints
      Auth
         -POST /api/auth/register: Register a new user.
         -POST /api/auth/login: Login an existing user.

   Users
      -GET /api/users/:id: Get user details.
      -PUT /api/users/:id: Update user details.
      -PUT /api/users/
      -/block: Block/unblock a user.
 
   Food Items
      -GET /api/foods: Get all food items.
      -POST /api/foods: Add a new food item.
      -PUT /api/foods/:id: Update a food item.
      -DELETE /api/foods/:id: Delete a food item.

   Orders
      -POST /api/orders: Place a new order.
      -GET /api/orders/:id: Get order details.
      -PUT /api/orders/:id: Update order status.

### Contributing
   -Fork the repository.
   -Create a new branch (git checkout -b feature/your-feature).
   -Commit your changes (git commit -m 'Add some feature').
   -Push to the branch (git push origin feature/your-feature).
   -Create a new Pull Request.
