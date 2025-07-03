'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Settings } from 'lucide-react';

interface CaptionViewProps {
  text: string;
  speed: number;
  label: string;
  isActive: boolean;
}

const CaptionView: React.FC<CaptionViewProps> = ({ text, speed, label, isActive }) => {
  const [displayText, setDisplayText] = useState('');
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const words = text.split(' ');

  useEffect(() => {
    if (!isActive) {
      setDisplayText('');
      setCurrentWordIndex(0);
      return;
    }

    const interval = setInterval(() => {
      if (currentWordIndex < words.length) {
        setDisplayText(prev => prev + (prev ? ' ' : '') + words[currentWordIndex]);
        setCurrentWordIndex(prev => prev + 1);
      }
    }, speed);

    return () => clearInterval(interval);
  }, [currentWordIndex, words, speed, isActive]);

  const isLivcap = label.toLowerCase().includes('livcap');

  return (
    <div className="w-full space-y-6">
      <div className="flex items-center space-x-3">
        {isLivcap ? (
          <Image 
            src="/128-mac.png" 
            alt="Livcap Icon" 
            width={20} 
            height={20} 
            className="rounded-md"
          />
        ) : (
          <Settings className="w-5 h-5 text-muted-foreground" />
        )}
        <div className="text-sm text-muted-foreground font-medium uppercase tracking-wide">{label}</div>
      </div>
      <div 
        className="p-8 rounded-2xl min-h-[120px] flex items-center shadow-sm border border-gray-400/50 backdrop-blur-sm "
        style={{ width: '100%' }}
      >
        <span className="text-2xl font-light leading-relaxed w-full text-left">
          {displayText}
          {isActive && isLivcap && <span className="animate-pulse ml-1 text-gray-400">...</span>}
        </span>
      </div>
    </div>
  );
};

export function LiveCaptionDemo() {
  const [animationCycle, setAnimationCycle] = useState(0);
  const [isActive, setIsActive] = useState(false);

  const demoText = "A labyrinth of ivy-clad brick pavilions and glass-topped corridors.";
  const systemSpeed = 420; // slower
  const livcapSpeed = 380; // faster (1.7x faster approximately)

  useEffect(() => {
    const startAnimation = () => {
      setIsActive(true);
      
      // Reset after animation completes
      const totalTime = Math.max(
        demoText.split(' ').length * systemSpeed,
        demoText.split(' ').length * livcapSpeed
      );
      
      setTimeout(() => {
        setIsActive(false);
        setTimeout(() => {
          setAnimationCycle(prev => prev + 1);
        }, 1500); // Pause between cycles
      }, totalTime + 800);
    };

    const timer = setTimeout(startAnimation, 800);
    return () => clearTimeout(timer);
  }, [animationCycle]);

  return (
    <div className="w-full max-w-4xl space-y-12 p-8">
          <CaptionView
        text={demoText}
        speed={livcapSpeed}
        label="Livcap"
        isActive={isActive}
      />
      <CaptionView
        text={demoText}
        speed={systemSpeed}
        label="macOS System Default"
        isActive={isActive}
      />

    </div>
  );
}

export default LiveCaptionDemo;