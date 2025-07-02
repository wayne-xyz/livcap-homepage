'use client';
import React, { useState, useEffect, useCallback } from 'react';
import { Shield, Zap, Mic, ArrowRight, Github, Code, Heart, Clock, TrendingUp, AudioLines, Type, Globe, Rocket, Laptop, Languages, SplitSquareHorizontal, Monitor } from 'lucide-react';
import Image from 'next/image';
import { Navigation } from '@/components/navigation';
import { useTheme } from 'next-themes';
import { PageLoadAnimation } from '@/components/page-load-animation';
import { usePageAnimation } from '@/hooks/use-page-animation';

export default function Home() {
  const [year, setYear] = useState<number | null>(null);
  const [mounted, setMounted] = useState(false);
  const [pageLoadComplete, setPageLoadComplete] = useState(false);
  const { resolvedTheme } = useTheme();
  const { getAnimationClass } = usePageAnimation(pageLoadComplete);

  useEffect(() => {
    setYear(new Date().getFullYear());
    setMounted(true);
  }, []);

  const handlePageLoadComplete = useCallback(() => {
    console.log('🎬 PageLoadAnimation complete, content now visible & animations starting');
    setPageLoadComplete(true);
  }, []);

  // Don't render theme-dependent content until mounted
  if (!mounted) {
    return <div className="min-h-screen bg-background text-foreground">Loading...</div>;
  }

  console.log('Current theme:', resolvedTheme); // Debug info

  return (
    <PageLoadAnimation onAnimationComplete={handlePageLoadComplete}>
      {/* Always render and show content */}
      <div className="min-h-screen bg-background text-foreground">
        
        <Navigation />

        {/* Hero Section */}
        <section className="pt-32 pb-24 px-6 sm:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center max-w-4xl mx-auto ">
           
              {/* Animated App Icon */}
              <div className={`flex justify-center w-full mb-12 ${getAnimationClass('icon')}`}>
                <Image 
                  src="/1024-mac.png"
                  alt="Livcap App Icon"
                  width={800}  /* Max size */
                  height={800} /* Max size */
                  className="object-contain w-full h-full" /* Let the container control the size */
                />
              </div>

              <h1 className={`text-4xl sm:text-6xl font-extralight text-foreground leading-none mb-8 tracking-tight ${getAnimationClass('title')}`}>
                Private First Live Caption Application for macOS
              </h1>
              <p className={`text-xl text-muted-foreground mb-12 leading-relaxed font-light max-w-3xl mx-auto ${getAnimationClass('subtitle')}`}>
                Fast, built in public, user privacy first. More features coming soon.
              </p>
              
              {/* Coming Soon Notice with Star GitHub Button */}
              <div className={`flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mb-16 ${getAnimationClass('notice')}`}>
                <div className={`inline-flex items-center px-6 py-3 rounded-xl text-base font-light border ${
                  resolvedTheme === 'dark' 
                    ? 'bg-blue-900/20 border-blue-800 text-blue-200' 
                    : 'bg-blue-50 border-blue-200 text-blue-950'
                }`}>
                  <Clock className="w-5 h-5 mr-3" />
                  <div className="text-left">
                    <div className="font-medium">macOS App Coming Soon</div>
                    <div className="text-sm opacity-75">Currently in development • Follow our GitHub for updates</div>
                  </div>
                </div>
                
                <a href="https://github.com/wayne-xyz/Livcap" className="group border border-border text-foreground px-6 py-3 rounded-xl font-light text-base hover:border-foreground transition-all duration-300 flex items-center">
                  <Github className="w-5 h-5 mr-3" />
                  Star on GitHub
                  <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          </div>
        </section>

        <div className={getAnimationClass('sections')}>
        
        {/* Section 1: Faster Than Ever */}
        <section className="py-24 bg-muted">
          <div className="max-w-7xl mx-auto px-6 sm:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Left side - Icon/Animation */}
              <div className="flex justify-center">
                <div className="w-64 h-64 bg-foreground rounded-3xl flex items-center justify-center group hover:scale-105 transition-transform duration-300">
                  <TrendingUp className="w-32 h-32 text-background" />
                </div>
              </div>
              
              {/* Right side - Content */}
              <div className="text-left">
                <h2 className="text-5xl font-extralight text-foreground mb-8 tracking-tight">Faster Than Ever</h2>
                <p className="text-xl text-muted-foreground mb-12 leading-relaxed font-light">
                  Optimized performance delivers faster transcription with improved efficiency compared to macOS built-in live captions.
                </p>
                
                <div className="grid grid-cols-2 gap-8 mb-8">
                  <div className="bg-background rounded-2xl p-6 text-center">
                    <div className="text-4xl font-extralight text-foreground mb-2">1.7x</div>
                    <div className="text-muted-foreground font-light">Word-level Lead Rate</div>
                  </div>
                  <div className="bg-background rounded-2xl p-6 text-center">
                    <div className="text-4xl font-extralight text-foreground mb-2">10%</div>
                    <div className="text-muted-foreground font-light">Latency Reduction</div>
                  </div>
                </div>
                
                <p className="text-sm text-muted-foreground font-light">vs. macOS Built-in Live Caption</p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: Dual Audio Sources */}
        <section className="py-24 bg-background">
          <div className="max-w-7xl mx-auto px-6 sm:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Left side - Icon/Animation */}
              <div className="flex justify-center">
                <div className="relative">
                  <div className="w-64 h-64 bg-foreground rounded-3xl flex items-center justify-center shadow-lg group hover:scale-105 transition-transform duration-300">
                    <div className="flex items-center space-x-8">
                      <Mic className="w-16 h-16 text-background" />
                      <div className="text-2xl text-muted-foreground">+</div>
                      <Laptop className="w-16 h-16 text-background" />
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Right side - Content */}
              <div className="text-left">
                <h2 className="text-5xl font-extralight text-foreground mb-8 tracking-tight">Dual Audio Sources</h2>
                <p className="text-xl text-muted-foreground mb-12 leading-relaxed font-light">
                  Simultaneously capture and caption both microphone input and system audio. Perfect for meetings, calls, and presentations where you need to capture everything being said.
                </p>
                
                <div className="bg-muted rounded-2xl p-6 border border-border">
                  <div className="grid grid-cols-2 gap-6">
                    <div className="flex items-center space-x-3">
                      <Mic className="w-6 h-6 text-foreground" />
                      <span className="text-foreground font-light">Microphone</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Laptop className="w-6 h-6 text-foreground" />
                      <span className="text-foreground font-light">System Audio</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: Smart Line Breaking */}
        <section className="py-24 bg-muted">
          <div className="max-w-7xl mx-auto px-6 sm:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Left side - Icon/Animation */}
              <div className="flex justify-center">
                <div className="w-64 h-64 bg-foreground rounded-3xl flex items-center justify-center group hover:scale-105 transition-transform duration-300">
                  <SplitSquareHorizontal className="w-32 h-32 text-background" />
                </div>
              </div>
              
              {/* Right side - Content */}
              <div className="text-left">
                <h2 className="text-5xl font-extralight text-foreground mb-8 tracking-tight">Smart Line Breaking</h2>
                <p className="text-xl text-muted-foreground mb-12 leading-relaxed font-light">
                  Intelligent sentence-sense line breaking responds to natural speech patterns and interruptions. Easy to track content in the caption view with adaptive formatting.
                </p>
                
                <div className="bg-background rounded-2xl p-6">
                  <div className="space-y-3 text-muted-foreground font-light">
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-foreground rounded-full mr-4"></div>
                      Natural pause detection
                    </div>
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-foreground rounded-full mr-4"></div>
                      Interruption handling
                    </div>
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-foreground rounded-full mr-4"></div>
                      Dynamic text formatting
                    </div>
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-foreground rounded-full mr-4"></div>
                      Real-time UI response
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 4: Open Source & Privacy */}
        <section className="py-24 bg-background">
          <div className="max-w-7xl mx-auto px-6 sm:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Left side - Icon/Animation */}
              <div className="flex justify-center">
                <div className="relative">
                  <div className="w-64 h-64 bg-foreground rounded-3xl flex items-center justify-center shadow-lg group hover:scale-105 transition-transform duration-300">
                    <div className="flex flex-col items-center space-y-4">
                      <Shield className="w-20 h-20 text-background" />
                      <Github className="w-16 h-16 text-background" />
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Right side - Content */}
              <div className="text-left">
                <h2 className="text-5xl font-extralight text-foreground mb-8 tracking-tight">Open Source & Secure</h2>
                <p className="text-xl text-muted-foreground mb-12 leading-relaxed font-light">
                  Built in the open with complete transparency. Your data stays on your device - no cloud processing, no data collection, no privacy concerns.
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="bg-muted rounded-2xl p-6 border border-border">
                    <h3 className="text-foreground font-light mb-4 flex items-center">
                      <Github className="w-5 h-5 mr-2" />
                      Open Source
                    </h3>
                    <p className="text-muted-foreground text-sm font-light">MIT licensed, full transparency</p>
                  </div>
                  <div className="bg-muted rounded-2xl p-6 border border-border">
                    <h3 className="text-foreground font-light mb-4 flex items-center">
                      <Shield className="w-5 h-5 mr-2" />
                      Privacy First
                    </h3>
                    <p className="text-muted-foreground text-sm font-light">Local processing only</p>
                  </div>
                </div>
                
                <a href="https://github.com/wayne-xyz/Livcap" className="inline-flex items-center mt-8 text-foreground hover:text-muted-foreground transition-colors font-light">
                  View Repository <ArrowRight className="w-4 h-4 ml-2" />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Section 5: What's Next */}
        <section className="py-24 bg-muted">
          <div className="max-w-7xl mx-auto px-6 sm:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Left side - Icon/Animation */}
              <div className="flex justify-center">
                <div className="w-64 h-64 bg-foreground rounded-3xl flex items-center justify-center group hover:scale-105 transition-transform duration-300">
                  <div className="flex flex-col items-center space-y-4">
                    <Languages className="w-20 h-20 text-background" />
                    <Zap className="w-16 h-16 text-background" />
                  </div>
                </div>
              </div>
              
              {/* Right side - Content */}
              <div className="text-left">
                <div className="inline-flex items-center px-4 py-2 bg-background rounded-full text-foreground text-sm font-light mb-8">
                  <Rocket className="w-4 h-4 mr-2" />
                  In Development • Coming Soon
                </div>
                <h2 className="text-5xl font-extralight text-foreground mb-8 tracking-tight">What's Next</h2>
                <p className="text-xl text-muted-foreground mb-12 leading-relaxed font-light">
                  Exciting new features coming soon. Real-time translation and even faster performance.
                </p>
                
                <div className="space-y-6">
                  <div className="bg-background rounded-2xl p-6">
                    <h3 className="text-foreground font-light mb-3 flex items-center">
                      <Languages className="w-5 h-5 mr-2" />
                      Real-time Translation
                    </h3>
                    <p className="text-muted-foreground text-sm font-light">Translate captions to multiple languages in real-time</p>
                  </div>
                  <div className="bg-background rounded-2xl p-6">
                    <h3 className="text-foreground font-light mb-3 flex items-center">
                      <Zap className="w-5 h-5 mr-2" />
                      Even Faster Performance
                    </h3>
                    <p className="text-muted-foreground text-sm font-light">Sub-100ms latency with advanced optimization</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        

        </div>

   
        {/* Footer Section */}
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
      </div>
      </PageLoadAnimation>
    );
  }