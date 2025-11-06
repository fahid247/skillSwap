# SkillSwap

This is a website for learning skills for free , teach a skill and learn a skill from him , it's a win win deal.

Live Url : https://skillswap-de43c.web.app/

## 🚀 Key Features

### 🧍‍♂️ User Authentication
- Email & Password **Signup / Login** with Firebase.
- **Google Login** integration.
- **Password Reset** via email.
- **User Profile Management** — users can view and update their name and profile photo.

---

### 🏷️ Skill Listings
- Displays dynamic **Skill Cards** containing:
  - Skill name  
  - Provider details  
  - Rating & price  
  - Description and image  
- Data fetched from a local JSON file or API.

---

### 📋 Skill Details Page
- Clicking on a skill opens a **detailed view** with full information.
- Uses **React Router** and `useParams()` for dynamic routing.

---

### 🎨 Modern UI/UX
- Fully **responsive design** using TailwindCSS.
- **Swiper slider** for featured skills.
- **Animate.css** for engaging animations on cards and components.
- Clean and consistent color palette for an elegant look.

---

### 🧠 Context-Based Authentication
- Implements **React Context API** for global user state management.
- Tracks authentication status with **Firebase onAuthStateChanged()**.

---

### 🔐 Protected Routes
- Certain routes (like *My Profile* or *Update Profile*) are accessible **only when logged in**.
- Redirects unauthenticated users to the login page.

---

### 👤 My Profile Page
- Displays **user’s name, photo, and email**.
- Allows profile updates (e.g., change name, photo, etc.).

---

### 📨 Email Reset & Support
- Functional **“Forgot Password?”** link that sends a reset email.
- Opens **Gmail in a new tab** for user convenience.

---

### ⚙️ Developer-Friendly Setup
- Built with:
  - **React Router v6+**
  - **Firebase Authentication**
  - **React Context API**
  - **TailwindCSS**
- Uses **reusable and modular components** (`SkillCard`, `AuthProvider`, `PrivateRoute`, etc.)

---

### 🌟 Future Enhancements
- ⭐ Skill rating & review system  
- 💬 Direct chat or booking between learners and teachers  
- 📆 Class scheduling & time-slot management  
- 🪙 Wallet system for payment handling  

---

## 🛠️ Tech Stack
**Frontend:** React, TailwindCSS, Animate.css, react-hot-toast , swiper  
**Authentication:** Firebase Auth  
**Routing:** React Router  
**State Management:** React Context API  

---

## 💡 Author
**Fahid Aqundow**  
Built with ❤️ using React & Firebase.
