# HireLoop - Modern Job Portal Platform

An advanced, full-stack job portal designed to bridge the gap between talented job seekers and top-tier recruiters. HireLoop offers a seamless, modern, and highly functional platform for job discovery, application management, and talent acquisition.

## 🌍 Live URLs
- **Frontend Live Link:** [https://hireloop-client.vercel.app](https://hireloop-client.vercel.app)
- **Backend Live Link:** [https://hireloop-server-one.vercel.app](https://hireloop-server-one.vercel.app/)

---

## 🎯 Project Purpose
HireLoop aims to simplify the recruitment process by providing dedicated, role-based interfaces for Seekers, Recruiters, and Admins. It streamlines job posting, applicant tracking, and company management while ensuring a secure and user-friendly experience.

---

## ✨ Key Features

### 🔐 Authentication & Role Management
- Secure JWT-based authentication.
- Distinct roles: `Admin`, `Recruiter`, and `Seeker`.
- Route protection to ensure secure access to respective dashboards.

### 💼 For Job Seekers
- Advanced Job Search with real-time filtering (by Job Type, Category, and Remote status).
- Server-side pagination for smooth browsing of large job lists.
- Easy 1-click job application process.
- Dedicated dashboard to track application status.

### 🏢 For Recruiters
- Create and manage detailed Company Profiles.
- Post, update, and manage job listings.
- Review and track candidate applications efficiently.
- Premium subscription plans via Stripe for enhanced hiring tools.

### 🛡️ For Admins
- Comprehensive dashboard to monitor platform activities.
- Manage user roles and system status.
- Approve or reject company profiles.
- View platform-wide statistics and analytics.

---

## 🛠️ Technology Stack & Packages

**Frontend:**
- **Framework:** Next.js 16 (App Router)
- **Styling:** Tailwind CSS
- **UI Components:** HeroUI
- **Icons:** React Icons, Gravity UI Icons
- **State Management:** React Hooks (`useState`, `useEffect`)

**Backend:**
- **Runtime:** Node.js
- **Framework:** Express.js
- **Database:** MongoDB (with `mongodb` native driver)
- **Payment Gateway:** Stripe
- **Security:** `cors`, `dotenv`, Custom JWT Middleware

---

## 🔑 Environment Variables Setup

To run this project locally, create a `.env.local` file in the client directory and a `.env` file in the server directory with the following keys:

**Client Side (`.env.local`):**
```env
NEXT_PUBLIC_BASE_URL=http://localhost:5000
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=your_stripe_publishable_key
