'use client';

import React, { useState, useEffect } from 'react';

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

  return (
    <div className="flex flex-col space-y-3">
      <div className="text-xs text-muted-foreground font-medium uppercase tracking-wide">{label}</div>
      <div 
        className="bg-gray-900 text-gray-50 p-4 rounded-lg min-h-[64px] flex items-center shadow-sm border border-gray-800"
        style={{ aspectRatio: '4/1' }}
      >
        <span className="text-sm font-light leading-relaxed">
          {displayText}
          {isActive && <span className="animate-pulse ml-1 text-gray-400">|</span>}
        </span>
      </div>
    </div>
  );
};

export function LiveCaptionDemo() {
  const [animationCycle, setAnimationCycle] = useState(0);
  const [isActive, setIsActive] = useState(false);

  const demoText = "Live captions are working perfectly right now";
  const systemSpeed = 420; // slower
  const livcapSpeed = 250; // faster (1.7x faster approximately)

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
    <div className="w-full max-w-sm space-y-6 p-6 bg-background rounded-2xl border border-border">
      <div className="text-center mb-4">
        <h3 className="text-lg font-light text-foreground mb-1">Live Caption Comparison</h3>
        <p className="text-xs text-muted-foreground">Real-time performance demo</p>
      </div>
      
      <CaptionView
        text={demoText}
        speed={systemSpeed}
        label="macOS System Default"
        isActive={isActive}
      />
      <CaptionView
        text={demoText}
        speed={livcapSpeed}
        label="Livcap (1.7x faster)"
        isActive={isActive}
      />
    </div>
  );
}

export default LiveCaptionDemo;