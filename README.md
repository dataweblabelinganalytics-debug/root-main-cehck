# Kendrix Corporate Website

**Kendrix** — AI, Automation & Intelligent Software

A production-quality corporate website for Kendrix, an India-built AI and automation company focused on creating practical software products that automate real business workflows.

---

## Tech Stack

### Frontend
- **React 19** with TypeScript
- **Vite** for build tooling
- **Tailwind CSS** for styling
- **React Router v7** for client-side routing
- **Framer Motion** for subtle animations
- **Lucide React** for icons
- **React Helmet Async** for SEO metadata

### Backend
- **Python 3.11+** with Flask
- **SQLAlchemy** ORM
- **PostgreSQL** database
- **Flask-Migrate** (Alembic) for database migrations
- **Marshmallow** for input validation
- **Flask-Limiter** for rate limiting
- **Flask-CORS** for cross-origin requests

---

## Project Structure

```
├── frontend/                  # React + Vite frontend
│   ├── public/                # Static assets, logo, favicon
│   ├── src/
│   │   ├── components/        # Reusable UI, layout, section, visualization components
│   │   ├── data/              # Project data, navigation config
│   │   ├── hooks/             # Custom React hooks
│   │   ├── pages/             # Route page components
│   │   ├── services/          # API service layer
│   │   ├── styles/            # Global CSS
│   │   ├── types/             # TypeScript interfaces
│   │   └── utils/             # Utility functions
│   ├── package.json
│   ├── tailwind.config.ts
│   └── vite.config.ts
│
├── backend/                   # Flask backend
│   ├── app/
│   │   ├── models/            # SQLAlchemy models
│   │   ├── routes/            # API route blueprints
│   │   ├── schemas/           # Marshmallow validation schemas
│   │   ├── services/          # Business logic layer
│   │   └── utils/             # Helpers and validators
│   ├── migrations/            # Alembic database migrations
│   ├── tests/                 # Pytest test suite
│   ├── run.py                 # Entry point
│   ├── requirements.txt
│   └── .env.example
│
└── README.md
```

---

## Getting Started

### Prerequisites

- **Node.js** 18+ and npm
- **Python** 3.11+
- **PostgreSQL** 14+

### 1. Clone the Repository

```bash
git clone <repository-url>
cd "Kendrix parent"
```

### 2. Backend Setup

```bash
cd backend

# Create virtual environment
python -m venv .venv

# Activate (Windows)
.venv\Scripts\activate

# Activate (macOS/Linux)
source .venv/bin/activate

# Install dependencies
pip install -r requirements.txt

# Configure environment
cp .env.example .env
# Edit .env with your PostgreSQL credentials and secret key
```

### 3. PostgreSQL Database Setup

```sql
-- Connect to PostgreSQL and create the database
CREATE DATABASE kendrix;
```

```bash
# Run database migrations
flask db upgrade
```

### 4. Start Backend

```bash
flask run
# Backend runs at http://localhost:5000
```

### 5. Frontend Setup

```bash
cd frontend

# Install dependencies
npm install

# Start development server
npm run dev
# Frontend runs at http://localhost:5173
```

The Vite dev server proxies API requests (`/api/*`) to the Flask backend automatically.

---

## Environment Variables

| Variable | Description | Default |
|---|---|---|
| `DATABASE_URL` | PostgreSQL connection string | `postgresql://postgres:postgres@localhost:5432/kendrix` |
| `SECRET_KEY` | Flask secret key | *Must be set* |
| `FLASK_ENV` | Environment (development/production) | `development` |
| `FRONTEND_URL` | Frontend URL for CORS | `http://localhost:5173` |
| `CONTACT_EMAIL` | Contact email displayed on website | `hello@kendrix.in` |

---

## API Endpoints

| Method | Endpoint | Description | Rate Limit |
|---|---|---|---|
| `GET` | `/api/health` | Health check | — |
| `POST` | `/api/contact` | Submit contact inquiry | 5/minute |
| `POST` | `/api/newsletter` | Subscribe to newsletter | 3/minute |

---

## Database Schema

### contact_inquiries

| Column | Type | Description |
|---|---|---|
| `id` | UUID | Primary key |
| `name` | VARCHAR(100) | Contact name |
| `email` | VARCHAR(255) | Email address |
| `phone` | VARCHAR(20) | Phone (optional) |
| `company` | VARCHAR(200) | Company (optional) |
| `subject` | VARCHAR(300) | Inquiry subject |
| `message` | TEXT | Message body |
| `project_interest` | VARCHAR(100) | Product interest (optional) |
| `status` | VARCHAR(20) | NEW / READ / REPLIED / ARCHIVED |
| `ip_address` | VARCHAR(45) | Submitter IP (optional) |
| `user_agent` | VARCHAR(500) | Browser user agent (optional) |
| `created_at` | TIMESTAMP | Creation timestamp |
| `updated_at` | TIMESTAMP | Last update timestamp |

### newsletter_subscribers

| Column | Type | Description |
|---|---|---|
| `id` | UUID | Primary key |
| `email` | VARCHAR(255) | Unique email address |
| `is_active` | BOOLEAN | Subscription status |
| `created_at` | TIMESTAMP | Subscription date |
| `updated_at` | TIMESTAMP | Last update |

---

## Website Routes

| Path | Page |
|---|---|
| `/` | Homepage |
| `/about` | About Kendrix |
| `/projects` | All Projects |
| `/projects/kendrix-scheduling` | Kendrix Scheduling Software |
| `/projects/kendrix-content-intelligence` | Kendrix AI Content Intelligence |
| `/contact` | Contact Us |
| `/privacy` | Privacy Policy |
| `/terms` | Terms of Service |

---

## Building for Production

### Frontend

```bash
cd frontend
npm run build
# Output in frontend/dist/
```

### Backend

```bash
cd backend
# Use gunicorn for production
gunicorn "app:create_app()" --bind 0.0.0.0:5000
```

---

## Running Tests

### Backend

```bash
cd backend
python -m pytest tests/ -v
```

### Frontend

```bash
cd frontend
npm run typecheck
npm run lint
```

---

## Production Deployment

1. Set `FLASK_ENV=production` in environment
2. Use a strong, random `SECRET_KEY`
3. Configure PostgreSQL with proper credentials
4. Serve frontend build output via Nginx or CDN
5. Use gunicorn + Nginx for Flask backend
6. Enable HTTPS
7. Set `FRONTEND_URL` to production domain

---

## Brand Assets

- **Full Logo**: `frontend/public/kendrix-logo.png` (with wordmark)
- **Logo SVG**: `frontend/public/kendrix-logo.svg`
- **Icon SVG**: `frontend/public/kendrix-icon.svg` (K mark only)
- **Favicon**: `frontend/public/kendrix-icon.svg`

### Brand Colors

| Color | Hex | Usage |
|---|---|---|
| Primary Navy | `#061B3A` | Headlines, dark backgrounds |
| Primary Blue | `#2563EB` | CTAs, links, brand accent |
| Light Blue | `#38BDF8` | Hover states, highlights |
| Cyan | `#06B6D4` | Diagrams, subtle accents |
| Orange | `#F59E0B` | Small indicators, active states |
| Background | `#FFFFFF` | Primary background |
| Alt Background | `#F6F9FC` | Section backgrounds |

---

© Kendrix. All rights reserved. Proudly built in India 🇮🇳
