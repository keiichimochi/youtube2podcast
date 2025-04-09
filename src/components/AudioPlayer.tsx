'use client';

import React, { useRef, useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Play, Pause } from 'lucide-react';

interface AudioPlayerProps {
  audioData: string; // Base64 encoded audio data
}

export const AudioPlayer: React.FC<AudioPlayerProps> = ({ audioData }) => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [audioSrc, setAudioSrc] = useState<string | null>(null);

  useEffect(() => {
    if (audioData) {
      const byteCharacters = atob(audioData);
      const byteNumbers = new Array(byteCharacters.length);
      for (let i = 0; i < byteCharacters.length; i++) {
        byteNumbers[i] = byteCharacters.charCodeAt(i);
      }
      const byteArray = new Uint8Array(byteNumbers);
      const blob = new Blob([byteArray], { type: 'audio/mp3' });
      const url = URL.createObjectURL(blob);
      setAudioSrc(url);
      
      // Clean up the object URL when the component unmounts or audioData changes
      return () => {
        if (url) {
          URL.revokeObjectURL(url);
        }
      };
    }
  }, [audioData]);

  const togglePlayPause = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  // Reset isPlaying state when audio finishes
  useEffect(() => {
    const audioElement = audioRef.current;
    const handleEnded = () => setIsPlaying(false);
    if (audioElement) {
      audioElement.addEventListener('ended', handleEnded);
      return () => {
        audioElement.removeEventListener('ended', handleEnded);
      };
    }
  }, []);

  if (!audioSrc) {
    return null; // Don't render anything if there's no audio source
  }

  return (
    <div className="flex items-center space-x-2">
      <Button onClick={togglePlayPause} variant="outline" size="icon">
        {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
      </Button>
      <audio ref={audioRef} src={audioSrc} />
      {/* You can add a progress bar or time display here if needed */}
    </div>
  );
}; 