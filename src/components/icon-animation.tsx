'use client';

import { useRive } from '@rive-app/react-canvas';
import { useEffect, useState } from 'react';

interface IconAnimationProps {
  className?: string;
  width?: number;
  height?: number;
  autoplay?: boolean;
  stateMachine?: string;
  animationName?: string;
}

export function IconAnimation({ 
  className = "", 
  width = 200, 
  height = 200, 
  autoplay = true,
  stateMachine,
  animationName
}: IconAnimationProps) {
  const [mounted, setMounted] = useState(false);

  const { RiveComponent } = useRive({
    src: '/animation/icon.riv',
    autoplay,
    stateMachines: stateMachine ? [stateMachine] : undefined,
    animations: animationName ? [animationName] : undefined,
    onLoad: () => {
      console.log('Rive animation loaded successfully');
    },
    onLoadError: (error) => {
      console.error('Error loading Rive animation:', error);
    },
  });

  useEffect(() => {
    setMounted(true);
  }, []);

  // Don't render until mounted to avoid hydration issues
  if (!mounted) {
    return (
      <div 
        className={`flex items-center justify-center bg-muted rounded-lg ${className}`}
        style={{ width, height }}
      >
        <div className="animate-pulse text-muted-foreground text-sm">Loading...</div>
      </div>
    );
  }

  return (
    <div 
      className={`flex items-center justify-center ${className}`}
      style={{ width: `${width}px`, height: `${height}px` }}
    >
      <RiveComponent 
        width={width}
        height={height}
        style={{ width: `${width}px`, height: `${height}px` }}
      />
    </div>
  );
}

export default IconAnimation;
