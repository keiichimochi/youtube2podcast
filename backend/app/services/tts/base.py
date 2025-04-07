from abc import ABC, abstractmethod
from typing import Optional, BinaryIO

class BaseTTSService(ABC):
    """Base class for Text-to-Speech services"""
    
    @abstractmethod
    async def text_to_speech(self, text: str) -> bytes:
        """Convert text to speech and return audio data"""
        pass
    
    @abstractmethod
    async def initialize(self) -> None:
        """Initialize the service with necessary setup"""
        pass 