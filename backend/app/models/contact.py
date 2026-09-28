import uuid
from datetime import datetime, timezone
from app.extensions import db

class ContactInquiry(db.Model):
    __tablename__ = 'contact_inquiries'

    id = db.Column(db.String(36), primary_key=True, default=lambda: str(uuid.uuid4()))
    name = db.Column(db.String(100), nullable=False)
    email = db.Column(db.String(255), nullable=False)
    phone = db.Column(db.String(20), nullable=True)
    company = db.Column(db.String(200), nullable=True)
    subject = db.Column(db.String(300), nullable=False)
    message = db.Column(db.Text, nullable=False)
    project_interest = db.Column(db.String(100), nullable=True)
    status = db.Column(db.String(20), default='NEW') # NEW, READ, REPLIED, ARCHIVED
    ip_address = db.Column(db.String(45), nullable=True)
    user_agent = db.Column(db.String(500), nullable=True)
    created_at = db.Column(db.DateTime, default=lambda: datetime.now(timezone.utc))
    updated_at = db.Column(db.DateTime, default=lambda: datetime.now(timezone.utc), onupdate=lambda: datetime.now(timezone.utc))

    def __repr__(self):
        return f"<ContactInquiry {self.id} - {self.email}>"
