# Deploy MediCare AI on Render

## Files Already Added

- `requirements.txt` includes `gunicorn` for production.
- `Procfile` starts the app with `gunicorn run:app`.
- `render.yaml` lets Render auto-detect build/start settings.
- `.python-version` pins Python to `3.10.11`.
- `/healthz` route is used as the Render health check.

## Manual Render Setup

1. Push this project to GitHub.
2. Open `https://render.com`.
3. Click `New` > `Web Service`.
4. Connect your GitHub repository.
5. Use these settings:
   - Language: `Python 3`
   - Build Command: `pip install -r requirements.txt`
   - Start Command: `gunicorn run:app`
   - Health Check Path: `/healthz`
6. Add environment variables:
   - `SECRET_KEY`: any long random value
   - `SEED_DEMO_DATA`: `true`
   - `PYTHON_VERSION`: `3.10.11`
7. Click `Deploy Web Service`.

## Database Note

Without `DATABASE_URL`, Render will use SQLite. That is fine for a demo, but Render filesystem data can reset on redeploys.

For a persistent production database, create PostgreSQL or external MySQL and add:

```text
DATABASE_URL=postgresql+psycopg2://USER:PASSWORD@HOST:PORT/DATABASE
```

or:

```text
DATABASE_URL=mysql+pymysql://USER:PASSWORD@HOST:3306/DATABASE
```

## Demo Logins After Deploy

Set `SEED_DEMO_DATA=true`, then these will work:

- Admin: `admin@medicare.ai` / `admin123`
- Doctor: `doctor@medicare.ai` / `doctor123`
- Patient: `patient@medicare.ai` / `patient123`
