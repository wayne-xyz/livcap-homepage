'use client';

import { useState, useEffect, useRef } from 'react';
import { IconAnimation } from './icon-animation';

interface PageLoadAnimationProps {
  children: React.ReactNode;
  onAnimationComplete?: () => void;
}

export function PageLoadAnimation({ children, onAnimationComplete }: PageLoadAnimationProps) {
  const [animationPhase, setAnimationPhase] = useState<'loading' | 'backgroundShrinking' | 'complete'>('loading');
  const [iconSize, setIconSize] = useState({ width: 800, height: 800 });
  const callbackRef = useRef(onAnimationComplete);

  // Update icon size based on screen size
  useEffect(() => {
    const updateIconSize = () => {
      const screenWidth = window.innerWidth;
      if (screenWidth < 640) { // sm breakpoint
        setIconSize({ width: 300, height: 300 });
      } else if (screenWidth < 768) { // md breakpoint
        setIconSize({ width: 400, height: 400 });
      } else if (screenWidth < 1024) { // lg breakpoint
        setIconSize({ width: 600, height: 600 });
      } else {
        setIconSize({ width: 800, height: 800 });
      }
    };

    updateIconSize();
    window.addEventListener('resize', updateIconSize);
    return () => window.removeEventListener('resize', updateIconSize);
  }, []);
  
  // Update ref when callback changes
  useEffect(() => {
    callbackRef.current = onAnimationComplete;
  }, [onAnimationComplete]);

  useEffect(() => {
    // Start the animation sequence after Rive animation plays
    const riveAnimationDuration = 3000; // Adjust based on your animation length

    
    // Phase 1: Start background shrinking (keep icon visible)
    const timer1 = setTimeout(() => {
      setAnimationPhase('backgroundShrinking');
    }, riveAnimationDuration); // this is start point for background shrinking

    // Phase 2: Complete animation (icon disappears immediately, no fading)
    const timer2 = setTimeout(() => {
      setAnimationPhase('complete');
      callbackRef.current?.();
    }, riveAnimationDuration + 800); // After background shrink completes, immediately complete

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []); // Remove dependency to prevent restart

  if (animationPhase === 'complete') {
    console.log('🎬 PageLoadAnimation: IconAnimation unmounting - animation complete!');
    return <>{children}</>;
  }

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Icon Animation Layer - Responsive sizing */}
      <div className="absolute inset-0 flex items-center justify-center z-30">
        <div 
          className="transition-all duration-300 ease-out"
          style={{
            width: `${iconSize.width}px`,
            height: `${iconSize.height}px`,
          }}
        >
          <IconAnimation 
            width={iconSize.width} 
            height={iconSize.height} 
            animationName="Timeline 1"
          />
        </div>
      </div>

      {/* White Background Overlay - Circular Shrink */}
      <div 
        className="absolute inset-0 transition-all duration-800 ease-out z-20"
        style={{
          backgroundColor: '#ffffff',
          clipPath: animationPhase === 'backgroundShrinking'
            ? 'circle(2% at center 50%)' 
            : 'circle(100% at center 50%)',
        }}
      />


    </div>
  );
} 