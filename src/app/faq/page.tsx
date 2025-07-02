'use client';

import React, { useState } from 'react';
import { ArrowLeft, ChevronDown, ChevronUp, MessageCircle, Mic, Monitor, Shield, Download, Settings } from 'lucide-react';
import Link from 'next/link';
import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';

interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'general' | 'technical' | 'privacy' | 'installation';
  icon: React.ComponentType<{ className?: string }>;
}

const faqData: FAQItem[] = [
  {
    id: 'what-is-livcap',
    question: 'What is Livcap?',
    answer: 'Livcap is a privacy-first live captioning application for macOS that provides real-time transcription of both microphone input and system audio. It processes everything locally on your device using Apple&apos;s built-in speech recognition frameworks.',
    category: 'general',
    icon: MessageCircle
  },
  {
    id: 'data-collection',
    question: 'Does Livcap collect my data?',
    answer: 'No, Livcap does not collect, store, transmit, or process any of your personal data. All audio processing and live captioning happens locally on your device. Your conversations, audio, and captions never leave your Mac.',
    category: 'privacy',
    icon: Shield
  },
  {
    id: 'system-requirements',
    question: 'What are the system requirements?',
    answer: 'Livcap requires macOS with microphone and system audio access permissions. It works with Apple\'s built-in speech recognition frameworks, so any Mac that supports these features should work. MacOS 15.0+ is minimum requirement.',
    category: 'technical',
    icon: Monitor
  },
  {
    id: 'how-to-install',
    question: 'How do I install Livcap?',
    answer: 'Livcap is currently in development. Once released, installation instructions will be available on livcap.app. You\'ll be able to download through MacOS App Store. Also, you\'ll be able to download the app directly or build it from source code.',
    category: 'installation',
    icon: Download
  },
  {
    id: 'permissions-needed',
    question: 'What permissions does Livcap need?',
    answer: 'Livcap requires: (1) Microphone Access to capture and process audio for live captioning, (2) System Audio Access to caption system audio from applications, and (3) Speech Recognition permiision to use Apple\'s built-in speech recognition frameworks.',
    category: 'technical',
    icon: Settings
  },
  {
    id: 'accuracy',
    question: 'How accurate are the captions?',
    answer: 'Caption accuracy depends on Apple\'s built-in speech recognition quality, which varies based on audio clarity, speaker accent, background noise, and language. Livcap processes audio locally using the same technology as macOS built-in live captions, with optimizations for better performance.',
    category: 'technical',
    icon: Mic
  },
  {
    id: 'languages-supported',
    question: 'What languages are supported?',
    answer: 'Livcap supports the same languages as Apple\'s speech recognition frameworks on your macOS version. Currently, it supports English only. More languages will be added in the future.',
    category: 'general',
    icon: MessageCircle
  },
  {
    id: 'open-source',
    question: 'Is Livcap open source?',
    answer: 'Yes! Livcap is open source software released under the MIT License. You can review our complete source code, contribute to development, or build your own version at github.com/wayne-xyz/Livcap.',
    category: 'general',
    icon: Shield
  },
  {
    id: 'dual-audio',
    question: 'Can Livcap caption both microphone and system audio simultaneously?',
    answer: 'Yes, Livcap can simultaneously capture and caption both microphone input and system audio. This is perfect for meetings, calls, and presentations where you need to capture everything being said from multiple audio sources.',
    category: 'technical',
    icon: Mic
  },
  {
    id: 'performance',
    question: 'How does Livcap compare to macOS built-in live captions?',
    answer: 'Livcap aims to provide faster transcription with improved efficiency. Based on internal testing, we target 1.7x word-level lead rate and 10% latency reduction compared to macOS built-in live captions, though results may vary depending on audio quality and system configuration.',
    category: 'technical',
    icon: Monitor
  },
  {
    id: 'cost',
    question: 'Is Livcap free?',
    answer: 'Yes, Livcap is completely free and open source. There are no subscription fees, in-app purchases, or hidden costs. You can download it from app store soon. You can use it for personal or commercial purposes under the MIT License.',
    category: 'general',
    icon: Download
  },
  {
    id: 'support',
    question: 'How do I get support or report issues?',
    answer: 'For support, bug reports, or feature requests, please open an issue in our GitHub repository at github.com/wayne-xyz/Livcap/issues. Our community and maintainers will help address your questions.',
    category: 'general',
    icon: MessageCircle
  }
];

const categories = {
  general: { name: 'General', icon: MessageCircle },
  technical: { name: 'Technical', icon: Settings },
  privacy: { name: 'Privacy & Security', icon: Shield },
  installation: { name: 'Installation', icon: Download }
};

export default function FAQ() {
  const [openItems, setOpenItems] = useState<string[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const toggleItem = (id: string) => {
    setOpenItems(prev => 
      prev.includes(id) 
        ? prev.filter(item => item !== id)
        : [...prev, id]
    );
  };

  const filteredFAQ = selectedCategory === 'all' 
    ? faqData 
    : faqData.filter(item => item.category === selectedCategory);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      
      <div className="pt-32 pb-24 px-6 sm:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Back to Home */}
          <Link href="/" className="inline-flex items-center text-muted-foreground hover:text-foreground transition-colors mb-8 font-light">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Link>
          
          {/* Header */}
          <div className="mb-12">
            <h1 className="text-4xl sm:text-5xl font-extralight text-foreground mb-6 tracking-tight">
              Frequently Asked Questions
            </h1>
            <p className="text-lg text-muted-foreground font-light">
              Find answers to common questions about Livcap
            </p>
          </div>
          
          {/* Category Filter */}
          <div className="mb-8">
            <div className="flex flex-wrap gap-3">
              <button
                onClick={() => setSelectedCategory('all')}
                className={`px-4 py-2 rounded-lg font-light text-sm transition-colors ${
                  selectedCategory === 'all'
                    ? 'bg-foreground text-background'
                    : 'border border-border text-foreground hover:border-foreground/50 hover:bg-muted/30'
                }`}
              >
                All Questions
              </button>
              {Object.entries(categories).map(([key, category]) => {
                const IconComponent = category.icon;
                return (
                  <button
                    key={key}
                    onClick={() => setSelectedCategory(key)}
                    className={`px-4 py-2 rounded-lg font-light text-sm transition-colors flex items-center gap-2 ${
                      selectedCategory === key
                        ? 'bg-foreground text-background'
                        : 'border border-border text-foreground hover:border-foreground/50 hover:bg-muted/30'
                    }`}
                  >
                    <IconComponent className="w-4 h-4" />
                    {category.name}
                  </button>
                );
              })}
            </div>
          </div>
          
          {/* FAQ Items */}
          <div className="space-y-4">
            {filteredFAQ.map((item) => {
              const isOpen = openItems.includes(item.id);
              const IconComponent = item.icon;
              
              return (
                <div key={item.id} className="bg-muted/20 backdrop-blur-sm rounded-2xl border border-border/20 shadow-lg overflow-hidden">
                  <button
                    onClick={() => toggleItem(item.id)}
                    className="w-full p-6 text-left flex items-center justify-between hover:bg-muted/10 transition-colors"
                  >
                    <div className="flex items-center gap-4">
                      <div className="flex-shrink-0">
                        <IconComponent className="w-5 h-5 text-foreground/70" />
                      </div>
                      <h3 className="text-lg font-light text-foreground pr-4">{item.question}</h3>
                    </div>
                    {isOpen ? (
                      <ChevronUp className="w-5 h-5 text-muted-foreground flex-shrink-0" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-muted-foreground flex-shrink-0" />
                    )}
                  </button>
                  
                  {isOpen && (
                    <div className="px-6 pb-6">
                      <div className="pl-9 border-l-2 border-border/20 ml-2">
                        <p className="text-muted-foreground leading-relaxed font-light">
                          {item.answer}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
          
          {/* Still have questions */}
          <div className="mt-16 bg-muted/20 backdrop-blur-sm rounded-3xl p-8 border border-border/20 shadow-lg text-center">
            <h2 className="text-2xl font-extralight text-foreground mb-4">Still have questions?</h2>
            <p className="text-muted-foreground mb-6 leading-relaxed font-light">
              Can't find what you're looking for? Open an issue on our GitHub repository and our community will help.
            </p>
            <a 
              href="https://github.com/wayne-xyz/Livcap/issues" 
              className="inline-flex items-center bg-foreground text-background px-6 py-3 rounded-lg hover:bg-foreground/90 transition-colors font-light"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Ask a Question
            </a>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}