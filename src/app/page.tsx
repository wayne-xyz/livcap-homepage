'use client';
import React, { useState, useEffect } from 'react';
import { Download, Shield, Zap, MousePointer, Mic, ArrowRight, Github, Code, Heart } from 'lucide-react';
import Image from 'next/image';
import appIconDark from './appIcon_dark.png';
import appIconLight from './appIcon_light.png';
import { ThemeSwitcher } from '@/components/theme-switcher';
import { useTheme } from 'next-themes';

export default function Home() {
  const [year, setYear] = useState<number | null>(null);
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setYear(new Date().getFullYear());
    setMounted(true);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center space-x-4">
              {mounted ? (
                <Image 
                  src={resolvedTheme === 'dark' ? appIconDark : appIconLight} 
                  alt="Livcap Logo" 
                  width={40}
                  height={40}
                />
              ) : (
                <div className="w-10 h-10" />
              )}
              <span className="text-2xl font-light tracking-tight">Livcap</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-muted-foreground hover:text-foreground transition-colors font-light">Features</a>
              <a href="#opensource" className="text-muted-foreground hover:text-foreground transition-colors font-light">Open Source</a>
              <a href="#privacy" className="text-muted-foreground hover:text-foreground transition-colors font-light">Privacy</a>
              <a href="https://github.com/livcap/livcap" className="flex items-center text-muted-foreground hover:text-foreground transition-colors font-light">
                <Github className="w-4 h-4 mr-2" />
                GitHub
              </a>
              <a href="#" className="bg-foreground text-background px-6 py-2 rounded-lg hover:bg-primary/90 transition-colors font-light">
                Mac App Store
              </a>
              <ThemeSwitcher />
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-24 px-6 sm:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center px-4 py-2 bg-muted rounded-full text-foreground text-sm font-light mb-12">
              <Code className="w-4 h-4 mr-2" />
              Open Source • Privacy First • Local Processing
            </div>
            <h1 className="text-6xl sm:text-8xl font-extralight text-foreground leading-none mb-8 tracking-tight">
              Live Captions
              <span className="block font-light">
                Simplified
              </span>
            </h1>
            <p className="text-xl text-muted-foreground mb-16 leading-relaxed font-light max-w-3xl mx-auto">
              The most private, open source live captioning app for macOS.
              One-click activation, lightning-fast local processing, zero data sharing.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <a href="#" className="group bg-foreground text-background px-10 py-4 rounded-xl font-light text-lg hover:bg-primary/90 transition-all duration-300 flex items-center">
                <Download className="w-5 h-5 mr-3" />
                Download on Mac App Store
                <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="https://github.com/" className="group border border-border text-foreground px-10 py-4 rounded-xl font-light text-lg hover:border-foreground transition-all duration-300 flex items-center">
                <Github className="w-5 h-5 mr-3" />
                View on GitHub
                <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </section>

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
              <a href="https://github.com/" className="text-foreground hover:text-muted-foreground transition-colors font-light flex items-center justify-center">
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
              <a href="https://github.com/" className="text-foreground hover:text-muted-foreground transition-colors font-light flex items-center justify-center">
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
              <a href="https://github.com/" className="text-foreground hover:text-muted-foreground transition-colors font-light flex items-center justify-center">
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
            <h2 className="text-5xl font-extralight text-foreground mb-6 tracking-tight">Built for Performance</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-light">
              Every feature designed with your privacy and productivity in mind
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            <div className="group text-center">
              <div className="w-16 h-16 bg-foreground rounded-2xl flex items-center justify-center mb-8 mx-auto group-hover:scale-105 transition-transform duration-300">
                <Shield className="w-8 h-8 text-background" />
              </div>
              <h3 className="text-2xl font-light text-foreground mb-4">100% Local</h3>
              <p className="text-muted-foreground leading-relaxed font-light">
                Your audio never leaves your device. Advanced AI models run locally, ensuring complete privacy and zero latency.
              </p>
            </div>

            <div className="group text-center">
              <div className="w-16 h-16 bg-foreground rounded-2xl flex items-center justify-center mb-8 mx-auto group-hover:scale-105 transition-transform duration-300">
                <Zap className="w-8 h-8 text-background" />
              </div>
              <h3 className="text-2xl font-light text-foreground mb-4">Lightning Fast</h3>
              <p className="text-muted-foreground leading-relaxed font-light">
                Optimized for Apple Silicon and Intel Macs. Real-time captions with minimal CPU usage and instant response.
              </p>
            </div>

            <div className="group text-center">
              <div className="w-16 h-16 bg-foreground rounded-2xl flex items-center justify-center mb-8 mx-auto group-hover:scale-105 transition-transform duration-300">
                <MousePointer className="w-8 h-8 text-background" />
              </div>
              <h3 className="text-2xl font-light text-foreground mb-4">One-Click</h3>
              <p className="text-muted-foreground leading-relaxed font-light">
                Start captioning with a single click from the menu bar. Seamless integration with macOS.
              </p>
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

      {/* Download CTA */}
      <section className="py-24 bg-foreground">
        <div className="max-w-4xl mx-auto text-center px-6 sm:px-8">
          <h2 className="text-5xl font-extralight text-background mb-8 tracking-tight">Ready to Get Started?</h2>
          <p className="text-xl text-muted-foreground mb-12 font-light">
            Download Livcap from the Mac App Store or build from source
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-8">
            <a href="#" className="bg-background text-foreground px-10 py-4 rounded-xl font-light text-lg hover:bg-muted transition-colors flex items-center shadow-xl">
              <Download className="w-5 h-5 mr-3" />
              Download on Mac App Store
            </a>
            <a href="https://github.com/" className="border border-muted-foreground text-background px-10 py-4 rounded-xl font-light text-lg hover:border-background transition-colors flex items-center">
              <Github className="w-5 h-5 mr-3" />
              View on GitHub
            </a>
          </div>
          <p className="text-sm text-muted-foreground">&copy; {year} Livcap. All rights reserved.</p>
        </div>
      </section>
    </div>
  );
}