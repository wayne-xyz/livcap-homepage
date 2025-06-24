'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import appIconDark from './appIcon_dark.png';
import appIconLight from './appIcon_light.png';

export default function NotFound() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-background text-foreground">
      <div className="text-center">
        {mounted ? (
          <Image
            src={resolvedTheme === 'dark' ? appIconDark : appIconLight}
            alt="Livcap Logo"
            width={80}
            height={80}
            className="mx-auto mb-8"
          />
        ) : (
          <div className="w-20 h-20 mx-auto mb-8" />
        )}
        <h1 className="text-6xl font-extralight mb-4">404</h1>
        <h2 className="text-2xl font-light mb-6">Page Not Found</h2>
        <p className="text-muted-foreground mb-8">
          Sorry, the page you are looking for does not exist.
        </p>
        <Link href="/" className="bg-foreground text-background px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors font-light">
            Go back to Homepage
        </Link>
      </div>
    </div>
  );
} 