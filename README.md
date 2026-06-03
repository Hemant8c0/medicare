# MediCare AI - Smart Hospital Management System

Flask project for hospital operations with patient management, doctor management, appointment booking, billing, pharmacy, laboratory PDF reports, AI screening, face attendance, emergency handling, telemedicine, notifications, and dashboard charts.

## Tech Stack

- Frontend: HTML, CSS, JavaScript, Bootstrap, Chart.js
- Backend: Python Flask
- Database: MySQL through `DATABASE_URL`, with SQLite fallback for quick local runs
- AI/ML: Scikit-learn starter models
- Face Attendance: OpenCV Haar face detection
- PDF: ReportLab

## Run Locally

```powershell
cd "C:\Users\heman\OneDrive\Documents\New project"
python -m venv .venv
.\.venv\Scripts\Activate.ps1
pip install -r requirements.txt
flask --app run.py seed
flask --app run.py run
```

Open `http://127.0.0.1:5000`.

## Deploy on Render

This project is ready for Render deployment. The production start command is:

```text
gunicorn run:app
```

See [RENDER_DEPLOY.md](RENDER_DEPLOY.md) for step-by-step deployment.

## Demo Login

- Admin: `admin@medicare.ai` / `admin123`
- Doctor: `doctor@medicare.ai` / `doctor123`
- Patient: `patient@medicare.ai` / `patient123`

## MySQL Setup

Create the database:

```sql
CREATE DATABASE medicare_ai CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
```

Create `.env` from `.env.example`, update the MySQL password, then run:

```powershell
$env:DATABASE_URL="mysql+pymysql://root:your_password@localhost/medicare_ai"
flask --app run.py seed
flask --app run.py run
```

## Included Modules

- Patient registration, login, medical history, previous reports, online and emergency registration
- Doctor profile, specialization management, availability, appointment schedule
- Online appointment booking, slot selection, status updates, automatic reminder queue
- Auto bill generation, doctor and medicine charges, printable payment receipts
- Medicine stock, expiry tracking, sales, low stock notifications
- Blood test, X-Ray, MRI report records with PDF download
- AI symptom checker for cold, flu, dengue, migraine, and food infection signals
- ML-style diabetes, heart disease, and liver disease prediction forms
- Face verification attendance using OpenCV on uploaded images
- Admin dashboard with revenue, patient statistics, disease analysis, and appointments
- Emergency patient entry, ambulance status, doctor alert queue
- Telemedicine scheduling and doctor chat messages
- SMS/email notification queue

## Notes

The AI predictions are educational screening helpers, not medical diagnosis. For a production system, replace the starter datasets with validated clinical datasets and add authentication, authorization, audit logs, payment gateway integration, SMS/email provider integration, and real face embeddings.
