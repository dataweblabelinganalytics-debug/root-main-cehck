import os
from dotenv import load_dotenv

load_dotenv()

DEFAULT_DATABASE_URL = (
    'sqlite:////tmp/kendrix.db'
    if os.environ.get('VERCEL')
    else 'sqlite:///dev.db'
)

class BaseConfig:
    SECRET_KEY = os.environ.get('SECRET_KEY', 'default-secret-key-for-dev')
    SQLALCHEMY_TRACK_MODIFICATIONS = False
    FRONTEND_URL = os.environ.get('FRONTEND_URL', 'http://localhost:5173')
    CONTACT_EMAIL = os.environ.get('CONTACT_EMAIL', 'hello@kendrix.in')
    RATELIMIT_STORAGE_URI = "memory://"

class DevelopmentConfig(BaseConfig):
    DEBUG = True
    SQLALCHEMY_DATABASE_URI = os.environ.get('DATABASE_URL', DEFAULT_DATABASE_URL)

class ProductionConfig(BaseConfig):
    DEBUG = False
    SQLALCHEMY_DATABASE_URI = os.environ.get('DATABASE_URL', DEFAULT_DATABASE_URL)
    PROPAGATE_EXCEPTIONS = False

class TestingConfig(BaseConfig):
    TESTING = True
    SQLALCHEMY_DATABASE_URI = 'sqlite:///:memory:'
    RATELIMIT_ENABLED = False

config_by_name = {
    'development': DevelopmentConfig,
    'production': ProductionConfig,
    'testing': TestingConfig,
    'default': DevelopmentConfig
}
