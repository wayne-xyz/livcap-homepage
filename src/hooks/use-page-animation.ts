import { useState, useEffect } from 'react';

export function usePageAnimation(pageLoadComplete: boolean) {
  const [animationStarted, setAnimationStarted] = useState(false);

  useEffect(() => {
    if (!pageLoadComplete) return;
    
    // Start page settlement animation after page-load-animation completes
    const timer = setTimeout(() => {
      setAnimationStarted(true);
    }, -100); // Small delay to see initial centered state
    
    return () => clearTimeout(timer);
  }, [pageLoadComplete]);

  return {
    animationStarted: pageLoadComplete && animationStarted,
    getAnimationClass: (element: 'icon' | 'title' | 'subtitle' | 'notice' | 'buttons' | 'sections') => {
      if (!pageLoadComplete || !animationStarted) return 'opacity-0';
      
      switch (element) {
        case 'icon':
          return animationStarted ? 'animate-settle-container' : 'opacity-0';
        case 'title':
          return 'animate-slide-up-2';
        case 'subtitle':
          return 'animate-slide-up-3';
        case 'notice':
          return 'animate-slide-up-4';
        case 'buttons':
          return 'animate-slide-up-5';
        case 'sections':
          return 'animate-fade-in-delayed';
        default:
          return '';
      }
    },
  };
} 