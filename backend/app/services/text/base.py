from abc import ABC, abstractmethod
from typing import Optional

class BaseTextService(ABC):
    """Base class for text processing services"""
    
    @abstractmethod
    async def process_text(self, text: str) -> str:
        """Process text and convert it to podcast format"""
        pass
    
    @abstractmethod
    async def initialize(self) -> None:
        """Initialize the service with necessary setup"""
        pass 