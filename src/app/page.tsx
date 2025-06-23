'use client';
import React, { useState, useEffect } from 'react';
import { Download, Shield, Zap, MousePointer, Mic, ArrowRight, Github, Code, Heart } from 'lucide-react';

export default function Home() {
  const [year, setYear] = useState<number | null>(null);

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <div className="min-h-screen bg-white text-black">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center">
                <Mic className="w-5 h-5 text-white" />
              </div>
              <span className="text-2xl font-light tracking-tight">Livcap</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-gray-600 hover:text-black transition-colors font-light">Features</a>
              <a href="#opensource" className="text-gray-600 hover:text-black transition-colors font-light">Open Source</a>
              <a href="#privacy" className="text-gray-600 hover:text-black transition-colors font-light">Privacy</a>
              <a href="https://github.com/livcap/livcap" className="flex items-center text-gray-600 hover:text-black transition-colors font-light">
                <Github className="w-4 h-4 mr-2" />
                GitHub
              </a>
              <a href="#" className="bg-black text-white px-6 py-2 rounded-lg hover:bg-gray-800 transition-colors font-light">
                Mac App Store
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-24 px-6 sm:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center px-4 py-2 bg-gray-100 rounded-full text-black text-sm font-light mb-12">
              <Code className="w-4 h-4 mr-2" />
              Open Source • Privacy First • Local Processing
            </div>
            <h1 className="text-6xl sm:text-8xl font-extralight text-black leading-none mb-8 tracking-tight">
              Live Captions
              <span className="block font-light">
                Simplified
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-16 leading-relaxed font-light max-w-3xl mx-auto">
              The most private, open source live captioning app for macOS.
              One-click activation, lightning-fast local processing, zero data sharing.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <a href="#" className="group bg-black text-white px-10 py-4 rounded-xl font-light text-lg hover:bg-gray-800 transition-all duration-300 flex items-center">
                <Download className="w-5 h-5 mr-3" />
                Download on Mac App Store
                <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="https://github.com/" className="group border border-gray-300 text-black px-10 py-4 rounded-xl font-light text-lg hover:border-black transition-all duration-300 flex items-center">
                <Github className="w-5 h-5 mr-3" />
                View on GitHub
                <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Open Source Section */}
      <section id="opensource" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-extralight text-black mb-6 tracking-tight">Built in the Open</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light">
              Livcap is completely open source. Inspect the code, contribute improvements, or build your own version.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            <div className="group text-center">
              <div className="w-16 h-16 bg-black rounded-2xl flex items-center justify-center mb-8 mx-auto group-hover:scale-105 transition-transform duration-300">
                <Github className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-light text-black mb-4">Open Source</h3>
              <p className="text-gray-600 leading-relaxed font-light mb-6">
                Full source code available on GitHub. MIT licensed for maximum freedom and transparency.
              </p>
              <a href="https://github.com/" className="text-black hover:text-gray-600 transition-colors font-light flex items-center justify-center">
                View Repository <ArrowRight className="w-4 h-4 ml-2" />
              </a>
            </div>

            <div className="group text-center">
              <div className="w-16 h-16 bg-black rounded-2xl flex items-center justify-center mb-8 mx-auto group-hover:scale-105 transition-transform duration-300">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-light text-black mb-4">Community Driven</h3>
              <p className="text-gray-600 leading-relaxed font-light mb-6">
                Built by developers, for developers. Contributions welcome from the community.
              </p>
              <a href="https://github.com/" className="text-black hover:text-gray-600 transition-colors font-light flex items-center justify-center">
                Contribute <ArrowRight className="w-4 h-4 ml-2" />
              </a>
            </div>

            <div className="group text-center">
              <div className="w-16 h-16 bg-black rounded-2xl flex items-center justify-center mb-8 mx-auto group-hover:scale-105 transition-transform duration-300">
                <Code className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-light text-black mb-4">Transparent</h3>
              <p className="text-gray-600 leading-relaxed font-light mb-6">
                No hidden code, no black boxes. Every line of code is open for inspection and audit.
              </p>
              <a href="https://github.com/" className="text-black hover:text-gray-600 transition-colors font-light flex items-center justify-center">
                View Releases <ArrowRight className="w-4 h-4 ml-2" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-extralight text-black mb-6 tracking-tight">Built for Performance</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto font-light">
              Every feature designed with your privacy and productivity in mind
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            <div className="group text-center">
              <div className="w-16 h-16 bg-black rounded-2xl flex items-center justify-center mb-8 mx-auto group-hover:scale-105 transition-transform duration-300">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-light text-black mb-4">100% Local</h3>
              <p className="text-gray-600 leading-relaxed font-light">
                Your audio never leaves your device. Advanced AI models run locally, ensuring complete privacy and zero latency.
              </p>
            </div>

            <div className="group text-center">
              <div className="w-16 h-16 bg-black rounded-2xl flex items-center justify-center mb-8 mx-auto group-hover:scale-105 transition-transform duration-300">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-light text-black mb-4">Lightning Fast</h3>
              <p className="text-gray-600 leading-relaxed font-light">
                Optimized for Apple Silicon and Intel Macs. Real-time captions with minimal CPU usage and instant response.
              </p>
            </div>

            <div className="group text-center">
              <div className="w-16 h-16 bg-black rounded-2xl flex items-center justify-center mb-8 mx-auto group-hover:scale-105 transition-transform duration-300">
                <MousePointer className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-light text-black mb-4">One-Click</h3>
              <p className="text-gray-600 leading-relaxed font-light">
                Start captioning with a single click from the menu bar. Seamless integration with macOS.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Demo Preview Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 sm:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-extralight text-black mb-6 tracking-tight">See It In Action</h2>
            <p className="text-xl text-gray-600 font-light">Crystal clear captions, perfectly synchronized</p>
          </div>
          
          <div className="relative">
            <div className="bg-black rounded-3xl p-8 shadow-2xl">
              <div className="flex items-center space-x-3 mb-8">
                <div className="w-3 h-3 bg-gray-500 rounded-full"></div>
                <div className="w-3 h-3 bg-gray-500 rounded-full"></div>
                <div className="w-3 h-3 bg-gray-500 rounded-full"></div>
                <span className="text-gray-400 text-sm ml-4 font-light">Livcap</span>
              </div>
              <div className="bg-gray-900 rounded-2xl p-12 min-h-[320px] flex items-center justify-center">
                <div className="text-center">
                  <div className="inline-block p-6 bg-white/10 rounded-2xl mb-6">
                    <Mic className="w-16 h-16 text-white" />
                  </div>
                  <p className="text-white text-xl mb-3 font-light">Live captions will appear here</p>
                  <p className="text-gray-400 font-light">Start speaking to see real-time transcription</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Privacy Section */}
      <section id="privacy" className="py-24 bg-gray-50">
        <div className="max-w-5xl mx-auto px-6 sm:px-8">
          <div className="text-center mb-20">
            <div className="inline-block p-6 bg-white rounded-2xl mb-8 shadow-sm">
              <Shield className="w-16 h-16 text-black" />
            </div>
            <h2 className="text-5xl font-extralight text-black mb-8 tracking-tight">Your Privacy, Our Priority</h2>
            <p className="text-xl text-gray-600 mb-12 leading-relaxed font-light max-w-3xl mx-auto">
              Unlike cloud-based solutions, Livcap processes everything locally on your Mac. 
              No internet connection required, no data collection, no privacy concerns.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white border border-gray-200 p-8 rounded-2xl">
              <h3 className="font-light text-black mb-6 text-xl">✓ What We Do</h3>
              <ul className="space-y-4 text-gray-600 font-light">
                <li>• Process audio locally on your device</li>
                <li>• Store preferences on your Mac only</li>
                <li>• Provide offline functionality</li>
                <li>• Open source all code for transparency</li>
              </ul>
            </div>
            <div className="bg-white border border-gray-200 p-8 rounded-2xl">
              <h3 className="font-light text-black mb-6 text-xl">✗ What We Don't Do</h3>
              <ul className="space-y-4 text-gray-600 font-light">
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
      <section className="py-24 bg-black">
        <div className="max-w-4xl mx-auto text-center px-6 sm:px-8">
          <h2 className="text-5xl font-extralight text-white mb-8 tracking-tight">Ready to Get Started?</h2>
          <p className="text-xl text-gray-300 mb-12 font-light">
            Download Livcap from the Mac App Store or build from source
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-8">
            <a href="#" className="bg-white text-black px-10 py-4 rounded-xl font-light text-lg hover:bg-gray-100 transition-colors flex items-center shadow-xl">
              <Download className="w-5 h-5 mr-3" />
              Download on Mac App Store
            </a>
            <a href="https://github.com/" className="border border-gray-600 text-white px-10 py-4 rounded-xl font-light text-lg hover:border-gray-400 transition-colors flex items-center">
              <Github className="w-5 h-5 mr-3" />
              Build from Source
            </a>
          </div>
          <p className="text-gray-400 text-sm font-light">
            macOS 12.0+ • Universal Binary • MIT Licensed • 15MB Download
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 py-16">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-3 mb-6 md:mb-0">
              <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center">
                <Mic className="w-5 h-5 text-white" />
              </div>
              <span className="text-2xl font-light text-black tracking-tight">Livcap</span>
            </div>
            <div className="flex items-center space-x-8 text-gray-600 font-light">
              <a href="https://github.com/" className="hover:text-black transition-colors flex items-center">
                <Github className="w-4 h-4 mr-2" />
                GitHub
              </a>
              <a href="/privacy" className="hover:text-black transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-black transition-colors">MIT License</a>
              <a href="#" className="hover:text-black transition-colors">Support</a>
            </div>
          </div>
          <div className="border-t border-gray-200 mt-12 pt-12 text-center text-gray-500">
            <p className="font-light">&copy; {year} Livcap. Open source software made with care for macOS users.</p>
          </div>
        </div>
      </footer>
    </div>
  );
} 