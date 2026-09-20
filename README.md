# 💊 Mab Drug — Pharmaceutical & Healthcare Platform

[![React](https://img.shields.io/badge/React-19.x-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-8.x-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.x-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Django](https://img.shields.io/badge/Django-5.2-092E20?style=for-the-badge&logo=django&logoColor=white)](https://www.djangoproject.com/)
[![Django REST Framework](https://img.shields.io/badge/DRF-3.18-red?style=for-the-badge&logo=django&logoColor=white)](https://www.django-rest-framework.org/)
[![MySQL](https://img.shields.io/badge/MySQL-8.0-4479A1?style=for-the-badge&logo=mysql&logoColor=white)](https://www.mysql.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)

A modern, high-performance, full-stack web application developed for **Mab Drug**, a pharmaceutical enterprise. This platform features an interactive frontend showcasing therapeutic categories, certified formulations, quality compliance protocols, and a robust Django REST backend for product management and client inquiry capture.

---

## 📑 Table of Contents

- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Project Architecture](#-project-architecture)
- [Directory Structure](#-directory-structure)
- [Getting Started](#-getting-started)
  - [Prerequisites](#prerequisites)
  - [1. Clone Repository](#1-clone-repository)
  - [2. Backend Setup (Django & MySQL)](#2-backend-setup-django--mysql)
  - [3. Frontend Setup (React & Vite)](#3-frontend-setup-react--vite)
- [API Documentation](#-api-documentation)
- [Environment Variables](#-environment-variables)
- [Contributing](#-contributing)
- [License](#-license)

---

## ✨ Features

- **Dynamic Product Catalogue**: Browse pharmaceutical products filtered by active categories with real-time UI updates.
- **Inquiry Management System**: Interactive client enquiry form with instant backend validation and database storage.
- **Corporate Showcase**: Sections for Company Mission, Core Values, Quality & Regulatory Compliance, and Global Distribution.
- **Fluid UI / UX**: Smooth animations powered by Framer Motion and fully responsive styling with Tailwind CSS.
- **Secure RESTful API**: Built on Django REST Framework with CORS security and environment-driven secrets.

---

## 🛠 Tech Stack

### Frontend
- **Framework:** [React 19](https://react.dev/)
- **Bundler:** [Vite](https://vitejs.dev/)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/)
- **Animations:** [Framer Motion](https://www.framer.com/motion/)
- **Icons:** [Lucide React](https://lucide.dev/)
- **HTTP Client:** [Axios](https://axios-http.com/)
- **Routing:** [React Router v7](https://reactrouter.com/)

### Backend
- **Framework:** [Django 5.2](https://www.djangoproject.com/)
- **REST API:** [Django REST Framework (DRF)](https://www.django-rest-framework.org/)
- **CORS Handling:** [django-cors-headers](https://github.com/adamchainz/django-cors-headers)
- **Database:** [MySQL](https://www.mysql.com/) via `mysqlclient`
- **Environment Management:** [python-dotenv](https://github.com/theskumar/python-dotenv)

---

## 📁 Directory Structure

```text
mabdrug/
├── .gitignore                    # Master gitignore for Python, Node, & secrets
├── LICENSE                       # Open-source MIT License
├── README.md                     # Comprehensive project documentation
│
├── backend/                      # Django REST API Backend
│   ├── config/                   # Django core settings, WSGI/ASGI & root URLs
│   │   ├── settings.py
│   │   ├── urls.py
│   │   └── wsgi.py
│   ├── enquiries/                # Enquiries & Products Application
│   │   ├── migrations/           # Database migration files
│   │   ├── admin.py              # Django Admin panel registrations
│   │   ├── models.py             # Product, Category & Enquiry data models
│   │   ├── serializers.py        # DRF Serializers for JSON serialization
│   │   ├── urls.py               # Application route declarations
│   │   └── views.py              # API view endpoints
│   ├── products/                 # Static media and assets
│   ├── .env.example              # Sample environment template (safe for Git)
│   ├── manage.py                 # Django command-line utility
│   └── requirements.txt          # Python dependencies manifest
│
└── Frontend-pharma/              # React + Vite Frontend
    ├── public/                   # Static icons & branding assets
    ├── src/
    │   ├── assets/               # Images and SVG illustrations
    │   ├── components/           # Reusable UI components (Navbar, Footer, etc.)
    │   ├── pages/                # Page views
    │   ├── sections/             # Page sections (Hero, About, Products, Contact, etc.)
    │   ├── services/             # Axios API service instances
    │   ├── App.jsx               # Main React Application component
    │   └── main.jsx              # React DOM entry point
    ├── package.json              # NPM scripts and dependencies
    └── vite.config.js            # Vite build configuration
```

---

## 🚀 Getting Started

Follow these steps to run the application locally in development mode.

### Prerequisites

Make sure you have the following installed on your system:
- **Python 3.10+**: [Download Python](https://www.python.org/downloads/)
- **Node.js 18+ & npm**: [Download Node.js](https://nodejs.org/)
- **MySQL Server**: [Download MySQL](https://dev.mysql.com/downloads/installer/)
- **Git**: [Download Git](https://git-scm.com/)

---

### 1. Clone Repository

```bash
git clone https://github.com/<your-username>/mabdrug.git
cd mabdrug
```

---

### 2. Backend Setup (Django & MySQL)

#### A. Create the MySQL Database
Open your MySQL client or terminal and run:
```sql
CREATE DATABASE mabdrug_db CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
```

#### B. Setup Python Virtual Environment
Navigate to the `backend` directory:
```bash
cd backend
python -m venv venv
```

Activate the virtual environment:
- **Windows (PowerShell):**
  ```powershell
  .\venv\Scripts\Activate.ps1
  ```
- **Windows (CMD):**
  ```cmd
  .\venv\Scripts\activate.bat
  ```
- **macOS / Linux:**
  ```bash
  source venv/bin/activate
  ```

#### C. Install Dependencies
```bash
pip install -r requirements.txt
```

#### D. Configure Environment Variables
Copy `.env.example` to create your local `.env`:
```bash
cp .env.example .env
```
Open `.env` and fill in your MySQL credentials:
```env
SECRET_KEY=your-django-secret-key-here
DEBUG=True

DB_NAME=mabdrug_db
DB_USER=root
DB_PASSWORD=your_mysql_password
DB_HOST=localhost
DB_PORT=3306
```

#### E. Run Migrations & Start Django Server
```bash
python manage.py makemigrations
python manage.py migrate
python manage.py runserver
```
The backend API will be live at `http://127.0.0.1:8000/`.

---

### 3. Frontend Setup (React & Vite)

Open a new terminal window and navigate to `Frontend-pharma`:

```bash
cd Frontend-pharma
npm install
npm run dev
```

The frontend development server will start at `http://localhost:5173/`.

---

## 📡 API Documentation

| Endpoint | Method | Description | Request Body |
| :--- | :--- | :--- | :--- |
| `/api/categories/` | `GET` | Fetch all active pharmaceutical product categories | None |
| `/api/products/` | `GET` | Fetch all active pharmaceutical products | None |
| `/api/enquiries/` | `POST` | Submit a customer business or purchase inquiry | `{ "name": "...", "email": "...", "phone": "...", "message": "..." }` |
| `/admin/` | `GET` | Django Administration portal | Admin credentials |

---

## 🔐 Environment Variables

Never commit the `.env` file to version control. Below is a reference of required backend variables:

| Variable | Description | Default |
| :--- | :--- | :--- |
| `SECRET_KEY` | Django application cryptographic secret key | Required |
| `DEBUG` | Enables/disables debug mode (`True` / `False`) | `True` |
| `DB_NAME` | MySQL database name | `mabdrug_db` |
| `DB_USER` | MySQL database user | `root` |
| `DB_PASSWORD` | MySQL database password | Required |
| `DB_HOST` | Database host address | `localhost` |
| `DB_PORT` | Database port number | `3306` |

---

## 🤝 Contributing

Contributions are welcome! To contribute:

1. **Fork** the repository.
2. Create a feature branch:
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. Commit your changes with clear messages:
   ```bash
   git commit -m "feat: add support for product batch numbers"
   ```
4. Push to the branch:
   ```bash
   git push origin feature/your-feature-name
   ```
5. Open a **Pull Request**.

---

## 📄 License

This project is open-source and licensed under the [MIT License](LICENSE).
