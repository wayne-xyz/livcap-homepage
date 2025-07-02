'use client';

import React from 'react';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';

export default function Terms() {
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
              Terms of Service
            </h1>
            <p className="text-lg text-muted-foreground font-light">
              Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
          </div>
          
          {/* Content */}
          <div className="bg-muted/20 backdrop-blur-sm rounded-3xl p-8 lg:p-12 border border-border/20 shadow-lg">
            <div className="prose prose-neutral dark:prose-invert max-w-none">
              
              <h2 className="text-2xl font-extralight text-foreground mb-6">Acceptance of Terms</h2>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                By downloading, installing, or using Livcap, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use the application.
              </p>
              
              <h2 className="text-2xl font-extralight text-foreground mb-6">Description of Service</h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Livcap is a macOS application that provides real-time live captioning for audio input from microphones and system audio. The application processes audio locally on your device using Apple&apos;s built-in speech recognition frameworks and APIs.
              </p>
              
              <div className="bg-background/60 backdrop-blur-sm rounded-2xl p-6 border border-border/30 mb-8">
                <h3 className="text-xl font-light text-foreground mb-4">🔧 Technology and Framework Usage</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Livcap currently utilizes Apple-supplied APIs and frameworks for all core functionality. This includes speech recognition, audio processing, and system integration capabilities provided by macOS.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  <strong>Future Technology Changes:</strong> We reserve the right to update, modify, or change the underlying frameworks and technologies used in Livcap in future versions. However, <strong>user privacy will always remain our first priority</strong> regardless of any technological changes. Any updates will maintain our commitment to local processing and data protection.
                </p>
              </div>
              
              <div className="bg-background/60 backdrop-blur-sm rounded-2xl p-6 border border-border/30 mb-8">
                <h3 className="text-xl font-light text-foreground mb-4">🏠 Local Processing</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Livcap operates entirely on your device. No data is collected, transmitted, or stored on external servers. All audio processing happens locally using your Mac's hardware.
                </p>
              </div>
              
              <h2 className="text-2xl font-extralight text-foreground mb-6">License and Usage Rights</h2>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                Livcap is open source software released under the MIT License. This grants you the following rights:
              </p>
              <ul className="text-muted-foreground space-y-3 mb-8">
                <li>• Use the software for personal or commercial purposes</li>
                <li>• Modify and distribute the source code</li>
                <li>• Create derivative works</li>
                <li>• Include in proprietary software</li>
              </ul>
              
              <h2 className="text-2xl font-extralight text-foreground mb-6">Prohibited Uses</h2>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                You agree NOT to use Livcap or its source code for:
              </p>
              <ul className="text-muted-foreground space-y-3 mb-8">
                <li>• Illegal activities or violating any applicable laws</li>
                <li>• Unauthorized recording or surveillance without proper consent</li>
                <li>• Harassment, stalking, or invasion of privacy</li>
                <li>• Creating malware, spyware, or other malicious software</li>
                <li>• Circumventing security measures or access controls</li>
                <li>• Any activity that could harm individuals or organizations</li>
              </ul>
              
              <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800/30 rounded-2xl p-6 mb-8">
                <h3 className="text-xl font-light text-foreground mb-4">⚠️ Legal Compliance</h3>
                <p className="text-muted-foreground leading-relaxed">
                  <strong>You are responsible for complying with all applicable laws regarding audio recording and privacy in your jurisdiction.</strong> Some regions require consent from all parties before recording audio or conversations. Ensure you have proper authorization before using Livcap in any recording capacity.
                </p>
              </div>
              
              <h2 className="text-2xl font-extralight text-foreground mb-6">MIT License Requirements</h2>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                When using, modifying, or distributing Livcap&apos;s source code, you must:
              </p>
              <ul className="text-muted-foreground space-y-3 mb-8">
                <li>• Include the original MIT License text</li>
                <li>• Include the original copyright notice</li>
                <li>• Provide attribution to the original authors</li>
              </ul>
              
              <h2 className="text-2xl font-extralight text-foreground mb-6">Disclaimer of Warranties</h2>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Livcap is provided &quot;AS IS&quot; without warranty of any kind. We make no guarantees about:
              </p>
              <ul className="text-muted-foreground space-y-3 mb-8">
                <li>• Accuracy of speech recognition or captions</li>
                <li>• Uninterrupted or error-free operation</li>
                <li>• Compatibility with all macOS versions or hardware</li>
                <li>• Fitness for any particular purpose</li>
              </ul>
              
              <h2 className="text-2xl font-extralight text-foreground mb-6">Limitation of Liability</h2>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                To the maximum extent permitted by law, the developers of Livcap shall not be liable for any direct, indirect, incidental, special, consequential, or punitive damages arising from your use of the application, including but not limited to:
              </p>
              <ul className="text-muted-foreground space-y-3 mb-8">
                <li>• Data loss or corruption</li>
                <li>• System damage or performance issues</li>
                <li>• Missed or inaccurate captions</li>
                <li>• Privacy breaches due to misuse</li>
                <li>• Legal consequences from unauthorized recording</li>
              </ul>
              
              <h2 className="text-2xl font-extralight text-foreground mb-6">System Requirements and Compatibility</h2>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Livcap is designed for macOS and requires appropriate system permissions to function. The application may not work properly on all hardware configurations or macOS versions. Users are responsible for ensuring compatibility with their systems.
              </p>
              
              <h2 className="text-2xl font-extralight text-foreground mb-6">Privacy and Data Handling</h2>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Please refer to our Privacy Policy for detailed information about how Livcap handles data. In summary: we don&apos;t collect, store, or transmit any of your personal data or audio content.
              </p>
              
              <h2 className="text-2xl font-extralight text-foreground mb-6">Modifications to Terms</h2>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                We reserve the right to update these Terms of Service at any time. Changes will be posted on our website and GitHub repository. Your continued use of Livcap after changes constitutes acceptance of the new terms.
              </p>
              
              <h2 className="text-2xl font-extralight text-foreground mb-6">Termination</h2>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                You may stop using Livcap at any time by uninstalling the application. These terms remain in effect regarding your prior use of the software and any derivatives you may have created.
              </p>
              
              <h2 className="text-2xl font-extralight text-foreground mb-6">Governing Law</h2>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                These terms shall be governed by and construed in accordance with applicable law. Any disputes arising from the use of Livcap should be resolved through appropriate legal channels in your jurisdiction.
              </p>
              
              <h2 className="text-2xl font-extralight text-foreground mb-6">Contact Information</h2>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                For questions about these Terms of Service, please open an issue in our GitHub repository at{' '}
                <a href="https://github.com/wayne-xyz/Livcap/issues" className="text-foreground hover:text-muted-foreground transition-colors">
                  github.com/wayne-xyz/Livcap/issues
                </a>{' '}
                or review our source code at{' '}
                <a href="https://github.com/wayne-xyz/Livcap" className="text-foreground hover:text-muted-foreground transition-colors">
                  github.com/wayne-xyz/Livcap
                </a>.
              </p>
              
              <div className="bg-background/60 backdrop-blur-sm rounded-2xl p-6 border border-border/30 mt-8">
                <p className="text-muted-foreground text-sm leading-relaxed">
                  <strong>Remember:</strong> Livcap is open source software provided free of charge. Use it responsibly, respect privacy laws, and contribute back to the community when possible.
                </p>
              </div>
              
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}