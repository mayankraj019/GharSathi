# 🏠 GharSathi — Smart Rental Requirement Platform

> **"Stop Searching. Start Living."**  
> *Your Trusted Partner in Finding the Perfect Home.*

GharSathi is an award-winning, high-conversion rental requirement platform designed to eliminate the frustration of traditional property search. Instead of browsing hundreds of outdated listings or dealing with spam from unverified brokers, users submit **one simple requirement form**. Our platform validates the request, stores it securely in PostgreSQL via Prisma, and dispatches instant email notifications to verified area property experts.

---

## ✨ Features

- 🎯 **One-Form Rental Matching**: Submit your budget, flat type (1RK–3BHK), preferred locality, and move-in date in under 60 seconds.
- 🔒 **Privacy & Anti-Spam First**: No public profiles, no ad-network data selling, zero spam calls.
- ⚡ **Instant Email Notifications**: Automated HTML email dispatch via Resend / Nodemailer to platform operators upon enquiry submission.
- 🗄️ **Supabase PostgreSQL & Prisma ORM**: Enterprise-grade database storage with typed schema definitions.
- 🎨 **Minimalist Apple/Stripe Aesthetic**: Handcrafted UI with zero glassmorphism or flashy neon—built using Inter typography, subtle elevation shadows, and custom architectural vector SVG illustrations.
- 📱 **Mobile-First Responsiveness**: Smooth performance on mobile devices, tablets, and desktops.
- 📜 **Interactive Legal Modals**: Instant popup dialogs for Privacy Policy, Terms & Conditions, and Broker Partner Guidelines.
- 🔍 **Complete SEO Optimization**: Dynamic OpenGraph tags, Twitter cards, XML Sitemap, `robots.txt`, and JSON-LD structured data.

---

## 🛠️ Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/) (App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Database**: [Supabase PostgreSQL](https://supabase.com/)
- **ORM**: [Prisma ORM](https://www.prisma.io/)
- **Form Management**: [React Hook Form](https://react-hook-form.com/)
- **Validation**: [Zod](https://zod.dev/)
- **Email Service**: [Resend](https://resend.com/) & [Nodemailer](https://nodemailer.com/)
- **Icons**: [Lucide React](https://lucide.dev/)

---

## 🚀 Quick Start

### 1. Clone the repository
```bash
git clone https://github.com/mayankraj019/GharSathi.git
cd GharSathi
```

### 2. Install dependencies
```bash
npm install
```

### 3. Configure Environment Variables
Create a `.env` file in the root directory:
```env
DATABASE_URL="postgresql://postgres:YOUR_PASSWORD@db.ywyyxzvuqrwrrmsovzkk.supabase.co:5432/postgres"
OWNER_EMAIL="supportgharsathi@gmail.com"
RESEND_API_KEY="re_123456789"
SMTP_HOST="smtp.gmail.com"
SMTP_PORT="587"
SMTP_USER="supportgharsathi@gmail.com"
SMTP_PASS="your-16-letter-app-password"
```

### 4. Push Database Schema
```bash
npx prisma db push
```

### 5. Run Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) to view the app in your browser.

---

## 📄 License

Distributed under the MIT License.
