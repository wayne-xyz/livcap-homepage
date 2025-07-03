'use client';

import React, { useState, useEffect } from 'react';
import { Github } from 'lucide-react';
import Image from 'next/image';

export function Footer() {
  const [year, setYear] = useState<number | null>(null);

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <section className="py-24 bg-foreground">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left side - App Icon */}
          <div className="flex justify-center lg:justify-start">
            <div className="flex flex-col items-center lg:items-start">
              <Image 
                src="/1024-mac.png"
                alt="Livcap App Icon"
                width={120}
                height={120}
                className="rounded-3xl mb-6"
              />
            </div>
          </div>
          
          {/* Right side - Links */}
          <div className="text-center lg:text-left">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h4 className="text-background font-light text-lg mb-6">Legal</h4>
                <div className="space-y-3">
                  <a href="/privacy" className="block text-muted-foreground hover:text-background transition-colors font-light">
                    Privacy Policy
                  </a>
                  <a href="/terms" className="block text-muted-foreground hover:text-background transition-colors font-light">
                    Terms of Service
                  </a>
                </div>
              </div>
              
              <div className="space-y-4">
                <h4 className="text-background font-light text-lg mb-6">Support</h4>
                <div className="space-y-3">
                  <a href="/contact" className="block text-muted-foreground hover:text-background transition-colors font-light">
                    Contact
                  </a>
                  <a href="/faq" className="block text-muted-foreground hover:text-background transition-colors font-light">
                    Frequently Asked Questions
                  </a>
                </div>
              </div>
            </div>
            
            {/* GitHub link */}
            <div className="mt-12 pt-8 border-t border-muted-foreground/20">
              <a href="https://github.com/wayne-xyz/Livcap" className="inline-flex items-center text-muted-foreground hover:text-background transition-colors font-light">
                <Github className="w-5 h-5 mr-2" />
                View on GitHub
              </a>
            </div>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="mt-16 pt-8 border-t border-muted-foreground/20 text-center">
          <p className="text-sm text-muted-foreground">&copy; {year} Wayne-xyz. Released under the MIT License.</p>
        </div>
      </div>
    </section>
  );
}