'use client';

import React from 'react';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { Navigation } from '@/components/navigation';

export default function Privacy() {
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
              Privacy Policy
            </h1>
            <p className="text-lg text-muted-foreground font-light">
              Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
          </div>
          
          {/* Content */}
          <div className="bg-muted/20 backdrop-blur-sm rounded-3xl p-8 lg:p-12 border border-border/20 shadow-lg">
            <div className="prose prose-neutral dark:prose-invert max-w-none">
              
              <h2 className="text-2xl font-extralight text-foreground mb-6">Privacy-First Approach</h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Livcap is designed with privacy as our core principle. This Privacy Policy explains how we handle your information when you use our macOS live captioning application.
              </p>
              
              <div className="bg-background/60 backdrop-blur-sm rounded-2xl p-6 border border-border/30 mb-8">
                <h3 className="text-xl font-light text-foreground mb-4">🔒 No Data Collection</h3>
                <p className="text-muted-foreground leading-relaxed">
                  <strong>Livcap does not collect, store, transmit, or process any of your personal data.</strong> All audio processing and live captioning happens locally on your device. Your conversations, audio, and captions never leave your Mac.
                </p>
              </div>
              
              <h2 className="text-2xl font-extralight text-foreground mb-6 mt-8">What We Don't Collect</h2>
              <ul className="text-muted-foreground space-y-3 mb-8">
                <li>• Audio recordings or content</li>
                <li>• Generated captions or transcriptions</li>
                <li>• Personal information or identifiers</li>
                <li>• Usage analytics or telemetry</li>
                <li>• Device information or system data</li>
                <li>• Network activity or connections</li>
                <li>• Any other personal or sensitive information</li>
              </ul>
              
              <h2 className="text-2xl font-extralight text-foreground mb-6">Local Processing Only</h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Livcap uses Apple's built-in speech recognition frameworks and APIs that operate entirely on your device. No audio data is transmitted to external servers, including our own. All processing happens locally using your Mac's hardware and Apple's on-device machine learning capabilities.
              </p>
              
              <div className="bg-background/60 backdrop-blur-sm rounded-2xl p-6 border border-border/30 mb-8">
                <h3 className="text-xl font-light text-foreground mb-4">🔧 Technology Framework</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Currently, Livcap utilizes Apple-supplied APIs and frameworks for all speech recognition functionality. This ensures the highest level of privacy and security as all processing remains within Apple's ecosystem on your device.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  <strong>Future Changes:</strong> We may update or change the underlying frameworks and technologies used in future versions of Livcap. However, <strong>privacy will always remain our first priority</strong>. Any future technology changes will maintain our commitment to local processing and zero data collection.
                </p>
              </div>
              
              <h2 className="text-2xl font-extralight text-foreground mb-6">Permissions</h2>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                Livcap requires the following system permissions to function:
              </p>
              <ul className="text-muted-foreground space-y-3 mb-8">
                <li>• <strong>Microphone Access:</strong> To capture and process audio for live captioning</li>
                <li>• <strong>System Audio Access:</strong> To caption system audio from applications</li>
                <li>• <strong>Accessibility Features:</strong> To display captions as overlay windows</li>
              </ul>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                These permissions are used solely for the application's core functionality and do not enable any data collection or transmission.
              </p>
              
              <h2 className="text-2xl font-extralight text-foreground mb-6">Open Source Transparency</h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Livcap is open source software released under the MIT License. You can review our complete source code at{' '}
                <a href="https://github.com/wayne-xyz/Livcap" className="text-foreground hover:text-muted-foreground transition-colors">
                  github.com/wayne-xyz/Livcap
                </a>{' '}
                to verify our privacy claims and understand exactly how the application works.
              </p>
              
              <h2 className="text-2xl font-extralight text-foreground mb-6">Third-Party Services</h2>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Livcap does not integrate with any third-party services, analytics platforms, or external APIs. The application operates completely independently on your device.
              </p>
              
              <h2 className="text-2xl font-extralight text-foreground mb-6">Updates to This Policy</h2>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Any changes to this Privacy Policy will be posted on this page and in our GitHub repository. Since we don't collect any data, we cannot notify users directly of policy changes. We recommend checking this page periodically for updates.
              </p>
              
              <h2 className="text-2xl font-extralight text-foreground mb-6">Contact</h2>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                If you have questions about this Privacy Policy, please open an issue in our GitHub repository at{' '}
                <a href="https://github.com/wayne-xyz/Livcap/issues" className="text-foreground hover:text-muted-foreground transition-colors">
                  github.com/wayne-xyz/Livcap/issues
                </a>.
              </p>
              
              <div className="bg-background/60 backdrop-blur-sm rounded-2xl p-6 border border-border/30 mt-8">
                <p className="text-muted-foreground text-sm leading-relaxed">
                  <strong>Summary:</strong> Livcap is designed to respect your privacy completely. We don't collect, store, or transmit any of your data. Everything happens locally on your Mac, and you can verify this by reviewing our open source code.
                </p>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}