from flask import Blueprint, request, jsonify
from marshmallow import ValidationError
from app.extensions import limiter
from app.schemas.contact import ContactSchema
from app.services.contact import ContactService
import logging

contact_bp = Blueprint('contact', __name__, url_prefix='/api')
contact_schema = ContactSchema()

@contact_bp.route('/contact', methods=['POST'])
@limiter.limit("5 per minute")
def submit_contact():
    try:
        json_data = request.get_json()
        if not json_data:
            return jsonify({"error": "Bad Request", "message": "No input data provided"}), 400

        data = contact_schema.load(json_data)
        ip_address = request.headers.get('X-Forwarded-For', request.remote_addr)
        user_agent = request.headers.get('User-Agent')

        inquiry = ContactService.create_inquiry(data, ip_address, user_agent)
        
        return jsonify({
            "message": "Inquiry submitted successfully",
            "inquiry_id": inquiry.id
        }), 201

    except ValidationError as err:
        return jsonify({"error": "Validation Error", "messages": err.messages}), 400
    except Exception as e:
        logging.error(f"Error submitting contact inquiry: {str(e)}")
        return jsonify({"error": "Internal Server Error", "message": "An error occurred while processing your request"}), 500
