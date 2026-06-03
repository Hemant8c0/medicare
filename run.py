import click

from app import create_app, db
from app.models import seed_demo_data


app = create_app()


@app.cli.command("init-db")
def init_db():
    """Create database tables."""
    db.create_all()
    click.echo("Database tables created.")


@app.cli.command("seed")
def seed():
    """Load demo hospital data."""
    db.create_all()
    seed_demo_data(db.session)
    click.echo("Demo data loaded.")


if __name__ == "__main__":
    app.run(debug=True)

