"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useMemo, useState, useRef } from "react";

type Item = { label: string; href: string };

const items: Item[] = [
  { label: "Welcome",          href: "/" },
  { label: "About",            href: "/about" },
  { label: "Legal Stuff",      href: "/legalstuff" },
  { label: "Reach Us",         href: "/reach-us" },
  { label: "What is ArroundU",  href: "/what-is-aroundu" },
];

export default function SiteNavbar() {
  const pathname = usePathname();
  const current = useMemo(() => (pathname === "/" ? "/" : pathname?.replace(/\/$/, "")), [pathname]);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <div className="fixed top-4 inset-x-0 z-50 flex sm:justify-center px-4">
      {/* Desktop Navigation */}
      <nav className="hidden md:flex items-center gap-2 rounded-full border border-white/10 bg-black/80 backdrop-blur-xl shadow-lg px-2 py-1.5 text-sm text-neutral-200">
        {/* Logo (click → home) */}
        <Link href="/" className="ml-1 mr-2 inline-flex items-center">
          <Image
            src="/logo.PNG"   // use exact case, or rename file to logo.png
            alt="AroundU logo"
            width={28}
            height={28}
            className="rounded-full ring-1 ring-white/20"
            priority
          />
        </Link>

        {/* Tabs */}
        <ul className="flex items-center gap-1">
          {items.map((it) => {
            const isActive = current === (it.href === "/" ? "/" : it.href);
            return (
              <li key={it.href}>
                <Link
                  href={it.href}
                  className={`group relative inline-flex items-center rounded-full px-4 py-2 transition ${isActive ? "text-white" : "text-neutral-300 hover:text-white"}`}
                  aria-current={isActive ? "page" : undefined}
                >
                  <span className="relative">
                    {it.label}
                    {/* thin gradient underline like your screenshot */}
                    <span
                      className={`pointer-events-none absolute -bottom-1 left-0 right-0 h-0.5 rounded-full bg-gradient-to-r from-cyan-400 via-indigo-400 to-fuchsia-400 ${isActive ? "opacity-100" : "opacity-0 group-hover:opacity-60"} transition-opacity`}
                    />
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Mobile Navigation */}
      <div className="md:hidden relative">
        {/* Mobile Header with Logo and Hamburger */}
        <div className="flex items-center justify-between rounded-full border border-white/10 bg-black/80 backdrop-blur-xl shadow-lg px-4 py-2">
          {/* Logo */}
          <Link href="/" className="inline-flex items-center">
            <Image
              src="/logo.PNG"
              alt="AroundU logo"
              width={24}
              height={24}
              className="rounded-full ring-1 ring-white/20"
              priority
            />
          </Link>

          {/* Hamburger Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className="flex flex-col items-center justify-center w-16 h-8 space-y-1"
            aria-label="Toggle mobile menu"
          >
            <span className={`w-5 h-0.5 bg-white transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
            <span className={`w-5 h-0.5 bg-white transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`w-5 h-0.5 bg-white transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        {isMobileMenuOpen && (
          <div 
            ref={mobileMenuRef}
            className="absolute top-full left-0 right-0 mt-2 rounded-2xl border border-white/10 bg-black/95 backdrop-blur-xl shadow-lg overflow-hidden"
          >
            <ul className="py-2">
              {items.map((it) => {
                const isActive = current === (it.href === "/" ? "/" : it.href);
                return (
                  <li key={it.href}>
                    <Link
                      href={it.href}
                      onClick={closeMobileMenu}
                      className={`block px-6 py-3 text-sm transition-colors ${
                        isActive 
                          ? "text-white bg-white/10" 
                          : "text-neutral-300 hover:text-white hover:bg-white/5"
                      }`}
                      aria-current={isActive ? "page" : undefined}
                    >
                      {it.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
