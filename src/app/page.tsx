'use client';
import React, { useState, useEffect, useCallback } from 'react';
import { Shield, Zap, Mic, ArrowRight, Github, Code, Heart, Clock, TrendingUp, AudioLines, Type, Globe, Rocket } from 'lucide-react';
import Image from 'next/image';
import { ThemeSwitcher } from '@/components/theme-switcher';
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
        {/* Navigation */}
        <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 bg-background/90 backdrop-blur-md border border-border rounded-2xl">
        <div className="px-6 sm:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-4 mr-8">
              <Image 
                src="/128-mac.png" 
                alt="Livcap Logo" 
                width={32}
                height={32}
              />
              <span className="text-xl font-light tracking-tight">Livcap</span>
            </div>
            <div className="hidden md:flex items-center space-x-6">
              <a href="#features" className="text-muted-foreground hover:text-foreground transition-colors font-light">Features</a>
              <a href="#opensource" className="text-muted-foreground hover:text-foreground transition-colors font-light">Open Source</a>
              <a href="#privacy" className="text-muted-foreground hover:text-foreground transition-colors font-light">Privacy</a>
              <a href="https://github.com/wayne-xyz/Livcap" className="flex items-center text-muted-foreground hover:text-foreground transition-colors font-light">
                <Github className="w-4 h-4 mr-2" />
                GitHub
              </a>
              <a href="#" className="bg-foreground text-background px-4 py-2 rounded-lg hover:bg-primary/90 transition-colors font-light text-sm">
                Coming Soon
              </a>
              <ThemeSwitcher />
            </div>
          </div>
        </div>
      </nav>

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

            <h1 className={`text-6xl sm:text-8xl font-extralight text-foreground leading-none mb-8 tracking-tight ${getAnimationClass('title')}`}>
              Live Captions
              <span className="block font-light">
                Simplified
              </span>
            </h1>
            <p className={`text-xl text-muted-foreground mb-12 leading-relaxed font-light max-w-3xl mx-auto ${getAnimationClass('subtitle')}`}>
              The most private, open source live captioning app for macOS.
              One-click activation, lightning-fast local processing, zero data sharing.
            </p>
            
            {/* Coming Soon Notice - Using conditional styling */}
            <div className={`inline-flex items-center px-6 py-3 rounded-xl text-base font-light mb-16 border ${getAnimationClass('notice')} ${
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
            
            <div className={`flex flex-col sm:flex-row items-center justify-center gap-6 ${getAnimationClass('buttons')}`}>
              <a href="https://github.com/wayne-xyz/Livcap" className="group bg-foreground text-background px-10 py-4 rounded-xl font-light text-lg hover:bg-primary/90 transition-all duration-300 flex items-center">
                <Github className="w-5 h-5 mr-3" />
                View Source Code
                <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="https://github.com/wayne-xyz/Livcap" className="group border border-border text-foreground px-10 py-4 rounded-xl font-light text-lg hover:border-foreground transition-all duration-300 flex items-center">
                <Github className="w-5 h-5 mr-3" />
                Star on GitHub
                <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <div className={getAnimationClass('sections')}>
      {/* Open Source Section */}
      <section id="opensource" className="py-24 bg-muted">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-extralight text-foreground mb-6 tracking-tight">Built in the Open</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-light">
              Livcap is completely open source. Inspect the code, contribute improvements, or build your own version.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            <div className="group text-center">
              <div className="w-16 h-16 bg-foreground rounded-2xl flex items-center justify-center mb-8 mx-auto group-hover:scale-105 transition-transform duration-300">
                <Github className="w-8 h-8 text-background" />
              </div>
              <h3 className="text-2xl font-light text-foreground mb-4">Open Source</h3>
              <p className="text-muted-foreground leading-relaxed font-light mb-6">
                Full source code available on GitHub. MIT licensed for maximum freedom and transparency.
              </p>
              <a href="https://github.com/wayne-xyz/Livcap" className="text-foreground hover:text-muted-foreground transition-colors font-light flex items-center justify-center">
                View Repository <ArrowRight className="w-4 h-4 ml-2" />
              </a>
            </div>

            <div className="group text-center">
              <div className="w-16 h-16 bg-foreground rounded-2xl flex items-center justify-center mb-8 mx-auto group-hover:scale-105 transition-transform duration-300">
                <Heart className="w-8 h-8 text-background" />
              </div>
              <h3 className="text-2xl font-light text-foreground mb-4">Community Driven</h3>
              <p className="text-muted-foreground leading-relaxed font-light mb-6">
                Built by developers, for developers. Contributions welcome from the community.
              </p>
              <a href="https://github.com/wayne-xyz/Livcap" className="text-foreground hover:text-muted-foreground transition-colors font-light flex items-center justify-center">
                Contribute <ArrowRight className="w-4 h-4 ml-2" />
              </a>
            </div>

            <div className="group text-center">
              <div className="w-16 h-16 bg-foreground rounded-2xl flex items-center justify-center mb-8 mx-auto group-hover:scale-105 transition-transform duration-300">
                <Code className="w-8 h-8 text-background" />
              </div>
              <h3 className="text-2xl font-light text-foreground mb-4">Transparent</h3>
              <p className="text-muted-foreground leading-relaxed font-light mb-6">
                No hidden code, no black boxes. Every line of code is open for inspection and audit.
              </p>
              <a href="https://github.com/wayne-xyz/Livcap" className="text-foreground hover:text-muted-foreground transition-colors font-light flex items-center justify-center">
                View Releases <ArrowRight className="w-4 h-4 ml-2" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-extralight text-foreground mb-6 tracking-tight">Next-Level Captioning</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-light">
              Revolutionary features that make Livcap the most advanced live captioning solution for macOS
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            {/* Faster Than Ever */}
            <div className="group text-center">
              <div className="w-16 h-16 bg-foreground rounded-2xl flex items-center justify-center mb-8 mx-auto group-hover:scale-105 transition-transform duration-300">
                <TrendingUp className="w-8 h-8 text-background" />
              </div>
              <h3 className="text-2xl font-light text-foreground mb-4">Faster Than Ever</h3>
              <p className="text-muted-foreground leading-relaxed font-light mb-6">
                Optimized performance delivers faster transcription with improved efficiency compared to macOS built-in live captions.
              </p>
              <div className="bg-muted rounded-xl p-4 mb-4">
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="text-center">
                    <div className="text-2xl font-light text-foreground mb-1">10%</div>
                    <div className="text-muted-foreground font-light">Latency Reduction</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-light text-foreground mb-1">1.7x</div>
                    <div className="text-muted-foreground font-light">Word-level Lead Rate</div>
                  </div>
                </div>
              </div>
              <p className="text-xs text-muted-foreground font-light">vs. macOS Built-in Live Caption</p>
            </div>

            {/* Mixed Audio Sources */}
            <div className="group text-center">
              <div className="w-16 h-16 bg-foreground rounded-2xl flex items-center justify-center mb-8 mx-auto group-hover:scale-105 transition-transform duration-300">
                <AudioLines className="w-8 h-8 text-background" />
              </div>
              <h3 className="text-2xl font-light text-foreground mb-4">Dual Audio Sources</h3>
              <p className="text-muted-foreground leading-relaxed font-light">
                Simultaneously capture and caption both microphone input and system audio. Perfect for meetings, calls, and presentations where you need to capture everything being said.
              </p>
              <div className="bg-muted rounded-xl p-4 mt-6">
                <div className="flex items-center justify-center space-x-4 text-sm">
                  <div className="flex items-center">
                    <Mic className="w-4 h-4 mr-2 text-foreground" />
                    <span className="text-muted-foreground font-light">Microphone</span>
                  </div>
                  <div className="text-muted-foreground">+</div>
                  <div className="flex items-center">
                    <AudioLines className="w-4 h-4 mr-2 text-foreground" />
                    <span className="text-muted-foreground font-light">System Audio</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Sentence Sense Line Breaking */}
            <div className="group text-center">
              <div className="w-16 h-16 bg-foreground rounded-2xl flex items-center justify-center mb-8 mx-auto group-hover:scale-105 transition-transform duration-300">
                <Type className="w-8 h-8 text-background" />
              </div>
              <h3 className="text-2xl font-light text-foreground mb-4">Smart Line Breaks</h3>
              <p className="text-muted-foreground leading-relaxed font-light">
                Intelligent sentence-sense line breaking responds to natural speech patterns and interruptions. The UI adapts in real-time to your speaking rhythm for better readability.
              </p>
              <div className="bg-muted rounded-xl p-4 mt-6 text-left">
                <div className="text-sm text-muted-foreground font-light space-y-2">
                  <div>✓ Natural pause detection</div>
                  <div>✓ Interruption handling</div>
                  <div>✓ Dynamic text formatting</div>
                  <div>✓ Real-time UI response</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What's Next Section */}
      <section className="py-24 bg-muted">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-4 py-2 bg-background rounded-full text-foreground text-sm font-light mb-8">
              <Rocket className="w-4 h-4 mr-2" />
              In Development • Coming Soon
            </div>
            <h2 className="text-5xl font-extralight text-foreground mb-6 tracking-tight">What&apos;s Next</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-light">
              Exciting new features planned for future versions. Help us build the future of live captioning.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 mb-16">
            {/* Multi-Language Support */}
            <div className="group text-center">
              <div className="w-16 h-16 bg-background rounded-2xl flex items-center justify-center mb-8 mx-auto group-hover:scale-105 transition-transform duration-300 shadow-sm">
                <Globe className="w-8 h-8 text-foreground" />
              </div>
              <h3 className="text-2xl font-light text-foreground mb-4">Multi-Language Support</h3>
              <p className="text-muted-foreground leading-relaxed font-light mb-6">
                Expanding beyond English to support multiple languages for global accessibility. Real-time transcription in your preferred language.
              </p>
              <div className="bg-background rounded-xl p-4 border border-border">
                <div className="text-sm text-muted-foreground font-light space-y-2">
                  <div>🌍 Spanish, French, German</div>
                  <div>🗾 Japanese, Korean, Chinese</div>
                  <div>🌏 Portuguese, Italian, Dutch</div>
                  <div>📝 And many more...</div>
                </div>
              </div>
            </div>

            {/* Enhanced Performance */}
            <div className="group text-center">
              <div className="w-16 h-16 bg-background rounded-2xl flex items-center justify-center mb-8 mx-auto group-hover:scale-105 transition-transform duration-300 shadow-sm">
                <Zap className="w-8 h-8 text-foreground" />
              </div>
              <h3 className="text-2xl font-light text-foreground mb-4">Even Faster</h3>
              <p className="text-muted-foreground leading-relaxed font-light mb-6">
                Continuous performance improvements and optimization. We&apos;re pushing the boundaries of real-time transcription speed.
              </p>
              <div className="bg-background rounded-xl p-4 border border-border">
                <div className="text-sm text-muted-foreground font-light space-y-2">
                  <div>⚡ Advanced model optimization</div>
                  <div>🔧 Hardware acceleration</div>
                  <div>📊 Reduced memory footprint</div>
                  <div>🎯 Sub-100ms latency goal</div>
                </div>
              </div>
            </div>
          </div>

          {/* Contributors Call-to-Action */}
          <div className="bg-background border border-border rounded-2xl p-8 text-center">
            <div className="max-w-2xl mx-auto">
              <h3 className="text-2xl font-light text-foreground mb-4">Want to Contribute?</h3>
              <p className="text-muted-foreground mb-6 font-light">
                Help us improve Livcap. All contributions welcome.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a href="https://github.com/wayne-xyz/Livcap" className="bg-foreground text-background px-6 py-3 rounded-lg font-light hover:bg-primary/90 transition-colors flex items-center">
                  <Github className="w-4 h-4 mr-2" />
                  View on GitHub
                </a>
                <a href="https://github.com/wayne-xyz/Livcap/issues" className="border border-border text-foreground px-6 py-3 rounded-lg font-light hover:border-foreground transition-colors flex items-center">
                  Report Issues
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Demo Preview Section */}
      <section className="py-24 bg-muted">
        <div className="max-w-6xl mx-auto px-6 sm:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-extralight text-foreground mb-6 tracking-tight">See It In Action</h2>
            <p className="text-xl text-muted-foreground font-light">Crystal clear captions, perfectly synchronized</p>
          </div>
          
          <div className="relative">
            <div className="bg-foreground rounded-3xl p-8 shadow-2xl">
              <div className="flex items-center space-x-3 mb-8">
                <div className="w-3 h-3 bg-muted-foreground rounded-full"></div>
                <div className="w-3 h-3 bg-muted-foreground rounded-full"></div>
                <div className="w-3 h-3 bg-muted-foreground rounded-full"></div>
                <span className="text-muted-foreground text-sm ml-4 font-light">Livcap</span>
              </div>
              <div className="bg-background/10 rounded-2xl p-12 min-h-[320px] flex items-center justify-center">
                <div className="text-center">
                  <div className="inline-block p-6 bg-background/10 rounded-2xl mb-6">
                    <Mic className="w-16 h-16 text-foreground" />
                  </div>
                  <p className="text-foreground text-xl mb-3 font-light">Live captions will appear here</p>
                  <p className="text-muted-foreground font-light">Start speaking to see real-time transcription</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Privacy Section */}
      <section id="privacy" className="py-24 bg-muted">
        <div className="max-w-5xl mx-auto px-6 sm:px-8">
          <div className="text-center mb-20">
            <div className="inline-block p-6 bg-background rounded-2xl mb-8 shadow-sm">
              <Shield className="w-16 h-16 text-foreground" />
            </div>
            <h2 className="text-5xl font-extralight text-foreground mb-8 tracking-tight">Your Privacy, Our Priority</h2>
            <p className="text-xl text-muted-foreground mb-12 leading-relaxed font-light max-w-3xl mx-auto">
              Unlike cloud-based solutions, Livcap processes everything locally on your Mac. 
              No internet connection required, no data collection, no privacy concerns.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-background border border-border p-8 rounded-2xl">
              <h3 className="font-light text-foreground mb-6 text-xl">✓ What We Do</h3>
              <ul className="space-y-4 text-muted-foreground font-light">
                <li>• Process audio locally on your device</li>
                <li>• Store preferences on your Mac only</li>
                <li>• Provide offline functionality</li>
                <li>• Open source all code for transparency</li>
              </ul>
            </div>
            <div className="bg-background border border-border p-8 rounded-2xl">
              <h3 className="font-light text-foreground mb-6 text-xl">✗ What We Don&apos;t Do</h3>
              <ul className="space-y-4 text-muted-foreground font-light">
                <li>• Send audio to external servers</li>
                <li>• Collect personal information</li>
                <li>• Track your usage patterns</li>
                <li>• Hide code in proprietary systems</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      </div>

      {/* Download CTA */}
      <section className="py-24 bg-foreground">
        <div className="max-w-4xl mx-auto text-center px-6 sm:px-8">
          <h2 className="text-5xl font-extralight text-background mb-8 tracking-tight">Ready to Get Started?</h2>
          <p className="text-xl text-muted-foreground mb-12 font-light">
            Explore the source code on GitHub and follow development progress
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-8">
            <a href="https://github.com/wayne-xyz/Livcap" className="bg-background text-foreground px-10 py-4 rounded-xl font-light text-lg hover:bg-muted transition-colors flex items-center shadow-xl">
              <Github className="w-5 h-5 mr-3" />
              View on GitHub
            </a>
            <a href="https://github.com/wayne-xyz/Livcap" className="border border-muted-foreground text-background px-10 py-4 rounded-xl font-light text-lg hover:border-background transition-colors flex items-center">
              <Heart className="w-5 h-5 mr-3" />
              Star the Project
            </a>
          </div>
          <p className="text-sm text-muted-foreground">&copy; {year} Livcap. All rights reserved.</p>
        </div>
      </section>
    </div>
    </PageLoadAnimation>
  );
}