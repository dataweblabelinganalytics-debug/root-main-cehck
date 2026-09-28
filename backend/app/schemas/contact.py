from marshmallow import Schema, fields, validate, pre_load
from app.utils.validators import sanitize_string

class ContactSchema(Schema):
    name = fields.String(required=True, validate=validate.Length(min=2, max=100))
    email = fields.Email(required=True)
    phone = fields.String(required=False, allow_none=True, validate=validate.Length(max=20))
    company = fields.String(required=False, allow_none=True, validate=validate.Length(max=200))
    subject = fields.String(required=True, validate=validate.Length(min=3, max=300))
    message = fields.String(required=True, validate=validate.Length(min=10, max=5000))
    project_interest = fields.String(
        required=False, 
        allow_none=True,
        validate=validate.OneOf(['General Enquiry', 'Kendrix Scheduling Software', 'Kendrix Content Intelligence', 'AI & Automation', 'Partnership', 'Other'])
    )

    @pre_load
    def sanitize_data(self, in_data, **kwargs):
        for field in ['name', 'phone', 'company', 'subject', 'message']:
            if field in in_data and isinstance(in_data[field], str):
                in_data[field] = sanitize_string(in_data[field])
        return in_data

class ContactResponseSchema(Schema):
    id = fields.String()
    status = fields.String()
    created_at = fields.DateTime()
