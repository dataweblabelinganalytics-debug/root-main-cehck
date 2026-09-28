from marshmallow import Schema, fields, pre_load
from app.utils.validators import sanitize_string

class NewsletterSchema(Schema):
    email = fields.Email(required=True)

    @pre_load
    def sanitize_data(self, in_data, **kwargs):
        if 'email' in in_data and isinstance(in_data['email'], str):
            in_data['email'] = sanitize_string(in_data['email'].lower())
        return in_data
