from app.extensions import db
from app.models.newsletter import NewsletterSubscriber

class NewsletterService:
    @staticmethod
    def subscribe(email: str) -> tuple[NewsletterSubscriber, bool]:
        subscriber = NewsletterSubscriber.query.filter_by(email=email).first()
        
        if subscriber:
            if not subscriber.is_active:
                subscriber.is_active = True
                db.session.commit()
                return subscriber, False
            return subscriber, False
            
        new_subscriber = NewsletterSubscriber(email=email, is_active=True)
        db.session.add(new_subscriber)
        db.session.commit()
        
        return new_subscriber, True
