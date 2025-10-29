// src/app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import SiteNavbar from "../components/SiteNavbar";
import SiteFooter from "../components/SiteFooter";
import { Inter } from "next/font/google";
import localFont from "next/font/local";

// Font configuration with fallbacks
const inter = Inter({ 
  subsets: ["latin"],
  fallback: ["system-ui", "arial"],
  display: "swap",
  variable: "--font-inter"
});

const manrope = localFont({
  src: "../../public/Assets/Manrope-VariableFont_wght.ttf",
  variable: "--font-manrope",
  fallback: ["system-ui", "arial"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "ArroundU",
  description: "Discover what's around you.",
  icons: {
    icon: "/logo.PNG",
    shortcut: "/logo.PNG",
    apple: "/logo.PNG",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        {/* Preload critical images for faster loading */}
        <link rel="preload" href="/3.jpg" as="image" />
        <link rel="preload" href="/2.jpg" as="image" />
        <link rel="preload" href="/5.jpg" as="image" />
      </head>
      {/* Flex column so footer sticks to bottom on short pages */}
      <body className={`${inter.variable} ${manrope.variable} font-sans bg-neutral-950 text-neutral-100 min-h-screen flex flex-col` }>
        
        {/* Global navbar */}
        <SiteNavbar />

        {/* Main content area (pushed below fixed navbar) */}
        <main className="pt-20 flex-1">
          {children}
        </main>

        {/* Global footer */}
        <SiteFooter />
      </body>
    </html>
  );
}
