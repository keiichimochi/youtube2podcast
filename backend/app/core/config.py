from pydantic_settings import BaseSettings
from functools import lru_cache

class Settings(BaseSettings):
    # App Settings
    APP_NAME: str = "YouTube2Podcast"
    API_V1_STR: str = "/api/v1"
    
    # API Keys
    GEMINI_API_KEY: str = ""
    OPENAI_API_KEY: str = ""
    
    # Service Settings
    TEXT_SERVICE: str = "gemini"  # can be changed to other services in future
    TTS_SERVICE: str = "openai"   # can be changed to other services in future
    
    # File Storage
    TEMP_DIR: str = "temp"
    
    class Config:
        env_file = ".env"
        case_sensitive = True

@lru_cache()
def get_settings():
    return Settings()

settings = get_settings() 