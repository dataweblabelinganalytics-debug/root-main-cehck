from app.extensions import db
from app.models.contact import ContactInquiry

class ContactService:
    @staticmethod
    def create_inquiry(data, ip_address=None, user_agent=None) -> ContactInquiry:
        inquiry = ContactInquiry(
            name=data['name'],
            email=data['email'],
            phone=data.get('phone'),
            company=data.get('company'),
            subject=data['subject'],
            message=data['message'],
            project_interest=data.get('project_interest'),
            ip_address=ip_address,
            user_agent=user_agent
        )
        db.session.add(inquiry)
        db.session.commit()
        return inquiry
