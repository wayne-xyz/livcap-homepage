import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/providers";
import appIconDark from "./appIcon_dark.png";
import appIconLight from "./appIcon_light.png";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Livcap - Privacy-First Live Captions for macOS",
  description: "The most private, open source live captioning app for macOS. One-click activation, lightning-fast local processing, zero data sharing.",
  icons: [
    {
      rel: "icon",
      url: appIconLight.src,
      media: "(prefers-color-scheme: light)",
    },
    {
      rel: "icon",
      url: appIconDark.src,
      media: "(prefers-color-scheme: dark)",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Providers attribute="class" defaultTheme="system" enableSystem>
          {children}
        </Providers>
      </body>
    </html>
  );
}
