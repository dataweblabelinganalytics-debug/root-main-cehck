from flask import Blueprint, request, jsonify
from marshmallow import ValidationError
from app.extensions import limiter
from app.schemas.newsletter import NewsletterSchema
from app.services.newsletter import NewsletterService
import logging

newsletter_bp = Blueprint('newsletter', __name__, url_prefix='/api')
newsletter_schema = NewsletterSchema()

@newsletter_bp.route('/newsletter', methods=['POST'])
@limiter.limit("3 per minute")
def subscribe_newsletter():
    try:
        json_data = request.get_json()
        if not json_data:
            return jsonify({"error": "Bad Request", "message": "No input data provided"}), 400

        data = newsletter_schema.load(json_data)
        
        subscriber, is_new = NewsletterService.subscribe(data['email'])
        
        if is_new:
            return jsonify({"message": "Successfully subscribed to the newsletter"}), 201
        else:
            return jsonify({"message": "You are already subscribed to the newsletter"}), 200

    except ValidationError as err:
        return jsonify({"error": "Validation Error", "messages": err.messages}), 400
    except Exception as e:
        logging.error(f"Error subscribing to newsletter: {str(e)}")
        return jsonify({"error": "Internal Server Error", "message": "An error occurred while processing your request"}), 500
