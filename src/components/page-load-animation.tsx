'use client';

import { useState, useEffect, useRef } from 'react';
import { IconAnimation } from './icon-animation';

interface PageLoadAnimationProps {
  children: React.ReactNode;
  onAnimationComplete?: () => void;
}

export function PageLoadAnimation({ children, onAnimationComplete }: PageLoadAnimationProps) {
  const [animationPhase, setAnimationPhase] = useState<'loading' | 'backgroundShrinking' | 'complete'>('loading');
  const [showContent, setShowContent] = useState(false);
  const callbackRef = useRef(onAnimationComplete);
  
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
      setShowContent(true);
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
      {/* Icon Animation Layer - No fading, just visible/hidden */}
      <div className="absolute inset-0 flex items-center justify-center z-30">
        <div 
          style={{
            width: '800px',
            height: '800px',
          }}
        >
          <IconAnimation 
            width={800} 
            height={800} 
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

      {/* Content Layer (hidden initially) */}
      <div 
        className={`absolute inset-0 z-10 transition-opacity duration-1000 ${
          showContent ? 'opacity-100' : 'opacity-100'
        }`}
      >
        <div className="relative">
          {children}
        </div>
      </div>
    </div>
  );
} 