'use client';
import React, { useState, useEffect, useCallback } from 'react';
import { Shield, Zap, Mic, ArrowRight, Github, Code, Heart, Clock, TrendingUp, AudioLines, Type, Globe, Rocket, Laptop, Languages, SplitSquareHorizontal, Monitor } from 'lucide-react';
import Image from 'next/image';
import { Navigation } from '@/components/navigation';
import { useTheme } from 'next-themes';
import { PageLoadAnimation } from '@/components/page-load-animation';
import { usePageAnimation } from '@/hooks/use-page-animation';
import { LiveCaptionDemo } from '@/components/live-caption-demo';
import { AudioToggleButton } from '@/components/audio-toggle-button';

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
        <section className="py-24 bg-muted relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 relative">
            {/* Background Animation - Full Width */}
            <div className="absolute inset-0 flex items-center  ">
              <LiveCaptionDemo />
            </div>
            
            {/* Content Overlay */}
            <div className="relative z-10 flex justify-end">
              {/* Right side - Content Panel */}
              <div className="bg-background/20 backdrop-blur-md border border-border/50 rounded-3xl p-8 lg:p-12 max-w-lg lg:max-w-xl shadow-xl">
                <div className="text-left">
                  <h2 className="text-5xl font-extralight text-foreground mb-8 tracking-tight">Faster Than Ever</h2>
                  <p className="text-xl text-muted-foreground mb-12 leading-relaxed font-light">
                    Optimized performance delivers faster transcription with improved efficiency compared to macOS built-in live captions.
                  </p>
                  
                  <div className="grid grid-cols-2 gap-8 mb-8">
                    <div className="bg-muted/60 backdrop-blur-sm rounded-2xl p-6 text-center border border-border/30">
                      <div className="text-4xl font-extralight text-foreground mb-2">1.7x</div>
                      <div className="text-muted-foreground font-light">Word-level Lead Rate<sup>*</sup></div>
                    </div>
                    <div className="bg-muted/60 backdrop-blur-sm rounded-2xl p-6 text-center border border-border/30">
                      <div className="text-4xl font-extralight text-foreground mb-2">10%</div>
                      <div className="text-muted-foreground font-light">Latency Reduction<sup>*</sup></div>
                    </div>
                  </div>
                  
                  <p className="text-xs text-muted-foreground font-light">
                    <sup>*</sup> Based on carefully internal testing. Results may vary depending on audio quality and system configuration. More information shows up in the <a href="https://github.com/wayne-xyz/Livcap" className="text-foreground font-light">GitHub</a>.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: Dual Audio Sources */}
        <section className="py-24 bg-background">
          <div className="max-w-7xl mx-auto px-6 sm:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
              {/* Left side - Content Panel */}
              <div className="bg-muted/20  backdrop-blur-sm rounded-3xl p-6 sm:p-8 lg:p-10 border border-border/20 shadow-lg ">
                <div className="text-left">
                  <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extralight text-foreground mb-6 lg:mb-8 tracking-tight">Dual Audio Sources</h2>
                  <p className="text-lg sm:text-xl text-muted-foreground mb-8 lg:mb-12 leading-relaxed font-light">
                    Simultaneously capture and caption both microphone input and system audio. Perfect for meetings, calls, and presentations where you need to capture everything being said.
                  </p>
                  
                  <div className="bg-background/60 backdrop-blur-sm rounded-2xl p-4 sm:p-6 border border-border/30">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                      <div className="flex items-center space-x-3">
                        <Image 
                          src="/mic-audio.svg" 
                          alt="Microphone Audio" 
                          width={24} 
                          height={24} 
                          className={`w-5 h-5 sm:w-6 sm:h-6 ${resolvedTheme === 'dark' ? 'filter invert' : ''}`}
                        />
                        <span className="text-foreground font-light text-sm sm:text-base">Microphone</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Image 
                          src="/system-audio.svg" 
                          alt="System Audio" 
                          width={24} 
                          height={24} 
                          className={`w-8 h-8 sm:w-8 sm:h-8 ${resolvedTheme === 'dark' ? 'filter invert' : ''}`}
                        />
                        <span className="text-foreground font-light text-sm sm:text-base">System Audio</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Right side - Button Group Panel */}
              <div className="flex justify-center">
                <div className="backdrop-blur-sm rounded-2xl p-6 sm:p-8">

                  <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
                    <AudioToggleButton 
                      type="microphone" 
                      initialState={true}
                      onToggle={(isOn) => console.log('Microphone:', isOn ? 'ON' : 'OFF')}
                    />

                    <AudioToggleButton  
                      type="system" 
                      initialState={true}
                      onToggle={(isOn) => console.log('System Audio:', isOn ? 'ON' : 'OFF')}
                    />

                    <AudioToggleButton 
                      type="pin" 
                      initialState={false}
                      onToggle={(isOn) => console.log('Pin:', isOn ? 'ON' : 'OFF')}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: Smart Line Breaking */}
        <section className="py-24 bg-muted">
          <div className="max-w-7xl mx-auto px-6 sm:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
              {/* Left side - Simple Icon */}
              <div className="flex justify-center">
                <div className="w-48 h-48 sm:w-56 sm:h-56 lg:w-64 lg:h-64 border-2 border-border/30 rounded-3xl flex items-center justify-center group hover:border-border/50 transition-all duration-300">
                  <SplitSquareHorizontal className="w-24 h-24 sm:w-28 sm:h-28 lg:w-32 lg:h-32 text-foreground/70 group-hover:text-foreground transition-colors duration-300" />
                </div>
              </div>
              
              {/* Right side - Content Panel */}
              <div className="bg-background/20 backdrop-blur-sm rounded-3xl p-6 sm:p-8 lg:p-10 border border-border/20 shadow-lg">
                <div className="text-left">
                  <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extralight text-foreground mb-6 lg:mb-8 tracking-tight">Smart Line Breaking</h2>
                  <p className="text-lg sm:text-xl text-muted-foreground mb-8 lg:mb-12 leading-relaxed font-light">
                    Intelligent sentence-sense line breaking responds to natural speech patterns and interruptions. Easy to track content in the caption view with adaptive formatting.
                  </p>
                  
                  <div className="bg-muted/60 backdrop-blur-sm rounded-2xl p-4 sm:p-6 border border-border/30">
                    <div className="space-y-3 text-muted-foreground font-light">
                      <div className="flex items-center">
                        <div className="w-2 h-2 bg-foreground rounded-full mr-4"></div>
                        <span className="text-sm sm:text-base">Natural pause detection</span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-2 h-2 bg-foreground rounded-full mr-4"></div>
                        <span className="text-sm sm:text-base">Interruption handling</span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-2 h-2 bg-foreground rounded-full mr-4"></div>
                        <span className="text-sm sm:text-base">Constant formatting</span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-2 h-2 bg-foreground rounded-full mr-4"></div>
                        <span className="text-sm sm:text-base">Real-time UI response</span>
                      </div>
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
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
              {/* Left side - Simple Icon */}
              <div className="flex justify-center">
                <div className="w-48 h-48 sm:w-56 sm:h-56 lg:w-64 lg:h-64 border-2 border-border/30 rounded-3xl flex items-center justify-center group hover:border-border/50 transition-all duration-300">
                  <div className="flex flex-col items-center space-y-3 sm:space-y-4">
                    <Shield className="w-16 h-16 sm:w-18 sm:h-18 lg:w-20 lg:h-20 text-foreground/70 group-hover:text-foreground transition-colors duration-300" />
                    <Github className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 text-foreground/70 group-hover:text-foreground transition-colors duration-300" />
                  </div>
                </div>
              </div>
              
              {/* Right side - Content Panel */}
              <div className="bg-muted/20 backdrop-blur-sm rounded-3xl p-6 sm:p-8 lg:p-10 border border-border/20 shadow-lg">
                <div className="text-left">
                  <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extralight text-foreground mb-6 lg:mb-8 tracking-tight">Open Source & Secure</h2>
                  <p className="text-lg sm:text-xl text-muted-foreground mb-8 lg:mb-12 leading-relaxed font-light">
                    Built in the open with complete transparency. Your data stays on your device - no cloud processing, no data collection, no privacy concerns.
                  </p>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-6 lg:mb-8">
                    <div className="bg-background/60 backdrop-blur-sm rounded-2xl p-4 sm:p-6 border border-border/30">
                      <h3 className="text-foreground font-light mb-3 sm:mb-4 flex items-center text-sm sm:text-base">
                        <Github className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                        Open Source
                      </h3>
                      <p className="text-muted-foreground text-xs sm:text-sm font-light">MIT licensed, full transparency</p>
                    </div>
                    <div className="bg-background/60 backdrop-blur-sm rounded-2xl p-4 sm:p-6 border border-border/30">
                      <h3 className="text-foreground font-light mb-3 sm:mb-4 flex items-center text-sm sm:text-base">
                        <Shield className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                        Privacy First
                      </h3>
                      <p className="text-muted-foreground text-xs sm:text-sm font-light">Local processing only, more details in the repository</p>
                    </div>
                  </div>
                  
                  <a href="https://github.com/wayne-xyz/Livcap" className="inline-flex items-center text-foreground hover:text-muted-foreground transition-colors font-light text-sm sm:text-base">
                  Explore the repository <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 ml-2" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 5: What's Next */}
        <section className="py-24 bg-muted">
          <div className="max-w-7xl mx-auto px-6 sm:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
              {/* Left side - Simple Icon */}
              <div className="flex justify-center">
                <div className="w-48 h-48 sm:w-56 sm:h-56 lg:w-64 lg:h-64 border-2 border-border/30 rounded-3xl flex items-center justify-center group hover:border-border/50 transition-all duration-300">
                  <div className="flex flex-col items-center space-y-3 sm:space-y-4">
                    <Languages className="w-16 h-16 sm:w-18 sm:h-18 lg:w-20 lg:h-20 text-foreground/70 group-hover:text-foreground transition-colors duration-300" />
                    <Zap className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 text-foreground/70 group-hover:text-foreground transition-colors duration-300" />
                  </div>
                </div>
              </div>
              
              {/* Right side - Content Panel */}
              <div className="bg-background/20 backdrop-blur-sm rounded-3xl p-6 sm:p-8 lg:p-10 border border-border/20 shadow-lg">
                <div className="text-left">
                  <div className="inline-flex items-center px-3 sm:px-4 py-2 bg-muted/60 backdrop-blur-sm rounded-full text-foreground text-xs sm:text-sm font-light mb-6 lg:mb-8 border border-border/30">
                    <Rocket className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
                    In Development • Coming Soon
                  </div>
                  <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extralight text-foreground mb-6 lg:mb-8 tracking-tight">What's Next</h2>
                  <p className="text-lg sm:text-xl text-muted-foreground mb-8 lg:mb-12 leading-relaxed font-light">
                    Exciting new features coming soon. Real-time translation and even faster performance.
                  </p>
                  
                  <div className="space-y-4 sm:space-y-6">
                    <div className="bg-muted/60 backdrop-blur-sm rounded-2xl p-4 sm:p-6 border border-border/30">
                      <h3 className="text-foreground font-light mb-3 flex items-center text-sm sm:text-base">
                        <Languages className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                        Real-time Translation
                      </h3>
                      <p className="text-muted-foreground text-xs sm:text-sm font-light">Translate captions to multiple languages in real-time</p>
                    </div>
                    <div className="bg-muted/60 backdrop-blur-sm rounded-2xl p-4 sm:p-6 border border-border/30">
                      <h3 className="text-foreground font-light mb-3 flex items-center text-sm sm:text-base">
                        <Zap className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                        Even Faster Performance
                      </h3>
                      <p className="text-muted-foreground text-xs sm:text-sm font-light">Faster than fastest</p>
                    </div>
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