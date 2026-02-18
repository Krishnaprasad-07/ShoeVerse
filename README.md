# 👟 ShoeVerse – Modern Footwear E-Commerce Website

ShoeVerse is a modern footwear e-commerce web application built using **React + Vite**.  
It provides a smooth shopping experience with product filtering, authentication, and cart management using localStorage.

---

## 🚀 Features

### 🏠 Home Page
- Hero section with Shop Now button
- New Arrivals section
- Best Sellers section
- Clickable product cards
- Hover image effect (Home page)

---

### 🛍 Products Page
- Advanced Sidebar Filters:
  - Gender (Men / Women with Unisex logic)
  - Brand
  - Type (Sneakers, Boots, Flats, Heels, Sandals)
  - Price Range
- Navbar filtering (Category, Type, Brand, Search)
- Combined Navbar + Sidebar filtering logic
- Fixed sidebar filter
- Add to Cart button
- Discount-ready product structure

---

### 📄 Product Details Page
- Image gallery with thumbnails
- Size selector
- Quantity selector
- Product rating display
- Product description
- Add to Cart (Login required)

---

### 🛒 Cart System
- Slide-in cart drawer
- Increase / Decrease quantity
- Remove items
- Subtotal calculation
- Persistent cart using localStorage
- Cart cleared on logout

---

### 🔐 Authentication System
- Signup with validation
- Login with stored credentials
- Persistent login using localStorage
- Profile dropdown in navbar
- Logout functionality
- Add to Cart allowed only if logged in
- Redirect to login if unauthenticated

---

## 🛠 Tech Stack

- React (Vite)
- React Router DOM
- CSS3 (Custom Styling)
- LocalStorage (Auth + Cart persistence)
- Git & GitHub (Version Control)

---

## 📂 Project Structure

```
src/
│
├── components/
│   ├── Navbar.jsx
│   ├── Footer.jsx
│   ├── CartDrawer.jsx
│   └── ScrollToTop.jsx
│
├── pages/
│   ├── Home.jsx
│   ├── Products.jsx
│   ├── ProductDetails.jsx
│   ├── Login.jsx
│   └── Signup.jsx
│
├── data/
│   └── products.js
│
├── styles/
│   ├── Navbar.css
│   ├── Products.css
│   ├── ProductDetails.css
│   ├── Auth.css
│   └── CartDrawer.css
│
└── App.jsx
```

---

## 🔄 Authentication Flow

1. User signs up → stored in localStorage  
2. User logs in → validated from stored users  
3. User state saved in App state + localStorage  
4. Navbar updates dynamically  
5. Add to Cart allowed only if logged in  
6. Logout clears user + cart  

---

## 🧠 Filtering Logic

- Navbar:
  - Men → shows Men + Unisex
  - Women → shows Women + Unisex
- Sidebar gender overrides navbar category
- Clear button resets all sidebar filters
- All filters combined using `useMemo`

---

## 💾 Data Persistence

| Feature | Storage |
|----------|----------|
| Logged-in User | localStorage |
| Cart | localStorage |
| Registered Users | localStorage |

---

## 🧑‍💻 How To Run Locally

```bash
git clone https://github.com/Krishnaprasad-07/ShoeVerse.git
cd ShoeVerse
npm install
npm run dev
```

---

## 👨‍💻 Contributors

**Krishnaprasad KB**  
B.Tech Computer Science Engineering  
Full Stack Developer (MERN Stack)

**Pavithra Janardhanan**  
B.Tech Computer Science Engineering  
Full Stack Developer (MERN Stack)

**Deepika M**  
B.Tech Computer Science Engineering  
Full Stack Developer (MERN Stack)

---

## 📌 Current Status

- Authentication Integrated  
- Cart Protected (Login Required)  
- Sidebar + Navbar Filters Working Together  
- Stable Main Branch  
- Clean UI  

---

## 🔮 Future Improvements

- Backend Integration (Node + Express + MongoDB)
- Payment Gateway Integration
- Wishlist System
- Order History
- Admin Dashboard
- Firebase / JWT Authentication

---

## ⭐ Project Purpose

ShoeVerse demonstrates:

- Real-world e-commerce UI architecture
- Authentication flow handling
- State management using React
- Complex filtering logic
- Component-based scalable structure
