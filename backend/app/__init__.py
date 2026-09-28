import os
from flask import Flask, jsonify
from flask_cors import CORS
from app.config import config_by_name
from app.extensions import db, migrate, ma, limiter

def create_app(config_name=None):
    if config_name is None:
        config_name = os.environ.get('FLASK_ENV', 'default')

    app = Flask(__name__)
    app.config.from_object(config_by_name[config_name])

    # Initialize extensions
    db.init_app(app)
    migrate.init_app(app, db)
    ma.init_app(app)
    limiter.init_app(app)

    # Vercel functions can only write to /tmp. When no managed DATABASE_URL is
    # configured, create the schema in the ephemeral SQLite fallback.
    if os.environ.get('VERCEL') and app.config['SQLALCHEMY_DATABASE_URI'].startswith('sqlite:'):
        with app.app_context():
            db.create_all()
    
    # Configure CORS
    CORS(app, origins=[app.config['FRONTEND_URL']])

    # Register blueprints
    from app.routes.health import health_bp
    from app.routes.contact import contact_bp
    from app.routes.newsletter import newsletter_bp

    app.register_blueprint(health_bp)
    app.register_blueprint(contact_bp)
    app.register_blueprint(newsletter_bp)

    # Register error handlers
    @app.errorhandler(400)
    def bad_request(error):
        return jsonify({"error": "Bad Request", "message": str(error)}), 400

    @app.errorhandler(404)
    def not_found(error):
        return jsonify({"error": "Not Found", "message": "The requested resource could not be found."}), 404

    @app.errorhandler(405)
    def method_not_allowed(error):
        return jsonify({"error": "Method Not Allowed", "message": "The method is not allowed for the requested URL."}), 405

    @app.errorhandler(429)
    def ratelimit_handler(error):
        return jsonify({"error": "Too Many Requests", "message": "Rate limit exceeded. Please try again later."}), 429

    @app.errorhandler(500)
    def internal_server_error(error):
        return jsonify({"error": "Internal Server Error", "message": "An unexpected error occurred."}), 500

    return app
