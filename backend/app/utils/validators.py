import bleach

def sanitize_string(value: str) -> str:
    if not value:
        return value
    clean_text = bleach.clean(value, tags=[], attributes={}, strip=True)
    return clean_text.strip()

def is_valid_email(email: str) -> bool:
    import re
    pattern = r"^[\w\.-]+@[\w\.-]+\.\w+$"
    return re.match(pattern, email) is not None

def is_valid_phone(phone: str) -> bool:
    import re
    pattern = r"^\+?[\d\s\-\(\)]+$"
    return re.match(pattern, phone) is not None
