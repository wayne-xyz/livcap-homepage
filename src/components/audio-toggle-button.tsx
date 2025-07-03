'use client';

import React, { useState } from 'react';
import { Mic, MicOff, Volume2, VolumeX, Pin, PinOff } from 'lucide-react';

interface AudioToggleButtonProps {
  type: 'microphone' | 'system' | 'pin';
  initialState?: boolean;
  className?: string;
  onToggle?: (isOn: boolean) => void;
}

export const AudioToggleButton: React.FC<AudioToggleButtonProps> = ({
  type,
  initialState = true,
  className = '',
  onToggle
}) => {
  const [isOn, setIsOn] = useState(initialState);

  const handleClick = () => {
    const newState = !isOn;
    setIsOn(newState);
    onToggle?.(newState);
  };

  const getIconComponent = () => {
    if (type === 'microphone') {
      return isOn ? Mic : MicOff;
    } else if (type === 'system') {
      return isOn ? Volume2 : VolumeX;
    } else {
      return isOn ? Pin : PinOff;
    }
  };

  const getAltText = () => {
    const audioType = type === 'microphone' ? 'Microphone' : 
                      type === 'system' ? 'System' : 'Pin';
    const state = isOn ? 'On' : 'Off';
    const suffix = type === 'pin' ? '' : ' Audio';
    return `${audioType}${suffix} ${state}`;
  };

  return (
    <button
      onClick={handleClick}
      className={`
        relative group cursor-pointer
        w-20 h-20 rounded-full
        bg-muted hover:bg-muted/80
        border-2 border-border hover:border-foreground/20
        transition-all duration-300 ease-in-out
        transform hover:scale-105 active:scale-95
        flex items-center justify-center
        shadow-lg hover:shadow-xl

        ${className}
      `}
      aria-label={getAltText()}
      title={getAltText()}
    >
      {/* Background circle with subtle gradient */}
      <div className={`
        absolute inset-0 rounded-full transition-all duration-300
        ${isOn 
          ? 'bg-gradient-to-br from-primary/10 to-primary/5' 
          : 'bg-gradient-to-br from-muted-foreground/5 to-muted-foreground/10'
        }
      `} />
      
      {/* Icon */}
      <div className="relative z-10">
        {React.createElement(getIconComponent(), {
          className: `
           w-8 h-8 transition-all duration-300
            text-foreground group-hover:brightness-125
          `
        })}
      </div>


    </button>
  );
}; 