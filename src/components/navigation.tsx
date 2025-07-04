'use client';

import { useState } from 'react';
import { GithubIcon, MoreHorizontal } from 'lucide-react';
import { ThemeSwitcher } from './theme-switcher';

interface NavigationProps {
  className?: string;
}

export function Navigation({ className = "" }: NavigationProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <nav className={`fixed top-4 left-1/2 transform -translate-x-1/2 z-50 bg-background/90 backdrop-blur-md border border-border rounded-2xl w-[95%] sm:w-[80%] md:w-[70%] lg:w-1/2 min-w-fit max-w-4xl ${className}`}>
      <div className="px-4 sm:px-6 md:px-8">
        <div className="flex items-center justify-between h-14 sm:h-16">
          {/* Left side - Brand name */}
          <div className="flex items-center">
            <span className="text-lg sm:text-xl font-light tracking-tight">Livcap</span>
          </div>
          
          {/* Desktop Items - Hidden on small screens */}
          <div className="hidden sm:flex items-center space-x-4 md:space-x-6">
            <a 
              href="https://apps.apple.com/us/app/livcap/id6748108138?mt=12" 
              className="border border-border text-foreground px-3 py-2 sm:px-4 sm:py-2 rounded-lg hover:border-foreground/50 hover:bg-muted/30 transition-colors font-light text-xs sm:text-sm"
            >
              App Store
            </a>
            <a 
              href="https://github.com/wayne-xyz/Livcap" 
              className="text-muted-foreground hover:text-foreground transition-colors p-2 rounded-lg hover:bg-muted"
              aria-label="GitHub Repository"
            >
              <GithubIcon className="w-5 h-5" />
            </a>
            <ThemeSwitcher />
          </div>

          {/* Mobile Menu - 3 dots button, shown only on small screens */}
          <div className="sm:hidden relative">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-muted-foreground hover:text-foreground transition-colors p-2 rounded-lg hover:bg-muted"
              aria-label="More options"
            >
              <MoreHorizontal className="w-5 h-5" />
            </button>

            {/* Mobile Dropdown Menu */}
            {isMobileMenuOpen && (
              <>
                {/* Backdrop to close menu when clicking outside */}
                <div 
                  className="fixed inset-0 z-[-1]" 
                  onClick={closeMobileMenu}
                />
                
                {/* Dropdown Menu */}
                <div className="absolute right-0 top-full mt-2 bg-background border border-border rounded-xl shadow-lg p-2 min-w-[200px] z-50">
                  <div className="space-y-2">
                    {/* Coming Soon */}
                    <a 
                      href="https://apps.apple.com/us/app/livcap/id6748108138?mt=12"
                      className="block w-full p-3 border border-border text-foreground rounded-lg hover:border-foreground/50 hover:bg-muted/30 transition-colors text-center font-light text-sm"
                      onClick={closeMobileMenu}
                    >
                      App Store
                    </a>
                    

                    

                    <div className="flex items-center space-x-3">
                      
                                                {/* GitHub */}
                            <a 
                            href="https://github.com/wayne-xyz/Livcap"
                            className="flex items-center space-x-3 p-3 rounded-lg hover:bg-muted transition-colors text-muted-foreground hover:text-foreground"
                            onClick={closeMobileMenu}
                            >
                            <GithubIcon className="w-4 h-4" />
                            
                            </a>

                                                {/* Theme Switcher */}
                            <div  onClick={(e) => e.stopPropagation()}>
                                <ThemeSwitcher />
                            </div>
                            
                      
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
} 