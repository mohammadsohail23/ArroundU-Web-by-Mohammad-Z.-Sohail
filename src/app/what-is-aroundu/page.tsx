"use client";

import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";

// Note: Metadata cannot be exported from client components

type Shot = { src: string; title: string; desc: string };

const shots: Shot[] = [
  { src: "/ss1.png", title: "Home · Following", desc: "On this screen, you can check out your followers. Just swipe up or down to explore — you'll see 9 profiles at a time." },
  { src: "/ss2.png", title: "Home · Nearby", desc: "On this screen, you can see people nearby within 1 km. Tap a profile to follow them or start a chat.and connect with your friends"  
   },
  { src: "/ss3.png", title: "Chat", desc: "See your conversations here. Search at the top or tap a profile to start chatting.and connect with your friends" },
  { src: "/ss4.png", title: "Chat · Direct Message", desc: "This is your chat screen for one-on-one conversations. Send messages, share photos, or even schedule a message to stay connected." },
  { src: "/ss5.png", title: "Profile", desc: "This is your profile screen. View your followers, update your details, and manage how others see you." },
  { src: "/ss6.png", title: "Edit Profile", desc: "Update your profile — add a photo, change your name, username, bio, or phone number. Make it yours." },
  { src: "/ss7.png", title: "Settings", desc: "Manage your privacy, reset your password, clear history, block users, and customize your experience — all in one clean screen." },
];

export default function WhatIsAroundUPage() {
  const [isScrolling, setIsScrolling] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (scrollContainerRef.current) {
      observer.observe(scrollContainerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleScroll = () => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const scrollLeft = container.scrollLeft;
      const maxScroll = container.scrollWidth - container.clientWidth;
      const progress = maxScroll > 0 ? scrollLeft / maxScroll : 0;
      setScrollProgress(progress);
      setIsScrolling(true);
      
      setTimeout(() => setIsScrolling(false), 150);
    }
  };

  return (
    <section className="min-h-screen text-white animate-fade-in bg-black content-page">
      {/* Full width header */}
      <div className="w-full py-16 sm:py-20">
        <header className="mb-12 sm:mb-16 text-center animate-slide-up">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white animate-bounce-in">
            Get to know <span className="gradient-text floating-element">ArroundU.</span>
          </h1>
          <p className="text-lg sm:text-xl text-neutral-300 max-w-3xl mx-auto mt-6 cursor-line-highlight">
            Discover the features that make ArroundU the perfect social networking app for connecting with people around you.
          </p>
        </header>
      </div>

      {/* Advanced Horizontal Scrollable Gallery */}
      <div 
        ref={scrollContainerRef}
        className="relative w-full py-8 sm:py-2 px-4 sm:px-8 lg:px-16 xl:px-40 z-50"
        onScroll={handleScroll}
      >
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-cyan-500/5 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        {/* Enhanced Left Shadow with Animation */}
        <div className={`absolute left-0 top-0 bottom-0 w-24 sm:w-32  z-10 pointer-events-none transition-opacity duration-300 ${scrollProgress > 0.05 ? 'opacity-50' : 'opacity-100'}`}></div>
        
        {/* Enhanced Right Shadow with Animation */}
        <div className={`absolute right-0 top-0 bottom-0 w-24 sm:w-32  z-10 pointer-events-none transition-opacity duration-300 ${scrollProgress < 0.95 ? 'opacity-100' : 'opacity-50'}`}></div>
        
        {/* Scroll Progress Indicator */}
        {/* <div className="absolute top-4 left-1/2 transform -translate-x-1/2 z-20">
          <div className="w-32 h-1 bg-neutral-700 rounded-full overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full transition-all duration-300 ease-out"
              style={{ width: `${scrollProgress * 100}%` }}
            ></div>
          </div>
        </div> */}
        
        {/* Scrollable Container with Enhanced Styling */}
        <div 
          className={`flex gap-6 sm:gap-8 overflow-x-auto scrollbar-hide pb-6 transition-all duration-300 ${isScrolling ? 'scale-[0.98]' : 'scale-100'} relative z-50`}
          style={{ 
            scrollBehavior: 'smooth',
            scrollSnapType: 'x mandatory'
          }}
        >
          {shots.map((s, idx) => (
            <div 
              key={s.src} 
              className="flex-shrink-0 w-64 sm:w-72 lg:w-80 transition-all duration-500 relative z-50"
              style={{ scrollSnapAlign: 'start' }}
            >
              <EnhancedPhoneCard {...s} priority={idx < 2} index={idx} isVisible={isVisible} />
            </div>
          ))}
        </div>
        
        {/* Enhanced Instructions with Animation */}
     
      </div>

      {/* Enhanced FAQs Section - Full Width */}
      <div className="w-full px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="w-full max-w-6xl mx-auto animate-slide-up">
          <h1 className="text-[64px] font-semibold text-white text-start mb-12">
            FAQs
          </h1>
          <div className="space-y-4 sm:space-y-6">
            <Faq q="What is ArroundU?" a="ArroundU is a social app that helps you find and vibe with people nearby (within about 1 km / 0.6 miles). You can follow, chat, and share stories — or even look up someone by name if they're not nearby." open />
            <Faq q="Do I need to share my phone number?" a="Nope. You don't have to give out your number or socials. Everything stays inside ArroundU." />
            <Faq q="How does the 1 km / 0.6 miles radius work?" a="ArroundU shows people who are nearby in that range. It never shows your exact address or a live map — just 'you're close.'" />
            <Faq q="Can people see my exact location?" a="No. Privacy comes first. We only show an approximate radius, never a pin on a map." />
            <Faq q="Who can follow me?" a="Anyone who's nearby or who searches for your name in the app can send you a follow request. It's always your choice to accept or ignore." />
            <Faq q="Can I block someone?" a="Yes. If someone makes you uncomfortable, hit Block and they won't be able to contact you again." />
            <Faq q="What if I don't want to appear nearby?" a='You can turn off your presence anytime with the "Stop Sharing" button.' />
            <Faq q="What is a scheduled message?" a="It lets you type something now and send it later — great for reminders, birthday wishes, or planned chats." />
            <Faq
              q="Is my data safe?"
              a={
                <>
                  Yes. We don't sell your data. Your info is encrypted and handled under our{" "}
                  <Link href="/legalstuff" className="underline underline-offset-2 hover:text-cyan-300 transition-colors">Privacy Policy</Link>.
                </>
              }
            />
            <Faq q="Can I delete my account?" a="Not yet. For now, you can block people, edit your profile, or stop sharing nearby. Account deletion will come in a future update." />
            <Faq
              q="How do I contact support?"
              a={
                <>
                  Easy — email us at{" "}
                  <a href="mailto:support@arroundu.com" className="underline underline-offset-2 hover:text-cyan-300 transition-colors">support@arroundu.com</a>.
                </>
              }
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function EnhancedPhoneCard({
  src, title, desc, priority = false, index = 0, isVisible = false,
}: Shot & { priority?: boolean; index?: number; isVisible?: boolean }) {
  return (
    <article 
      className={`h-full group transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      {/* Card container */}
      <div className="h-full rounded-3xl p-[2px] transition-all duration-500">
        {/* Enhanced card shell */}
        <div className="flex h-full flex-col rounded-[22px] border border-white/20 bg-transparent p-3 sm:p-4 group-hover:border-cyan-400/30 transition-all duration-500 cursor-pointer relative overflow-hidden">
          
          {/* Enhanced header with better typography */}
          <div className="relative z-10 mb-3 min-h-[60px]">
            <h3 className="text-sm sm:text-base font-bold text-white group-hover:text-cyan-300 transition-colors duration-300 cursor-line-highlight mb-1.5 leading-tight">
              {title}
            </h3>
            <p className="text-xs text-neutral-300 group-hover:text-white transition-colors duration-300 cursor-line-highlight leading-relaxed line-clamp-3">
              {desc}
            </p>
          </div>

          {/* Enhanced phone frame with 3D effect */}
          <div className="relative w-full aspect-[9/19.5] overflow-hidden rounded-2xl border-2 border-white/20 bg-transparent group-hover:border-cyan-400/40 transition-all duration-500 transform group-hover:scale-[1.02] group-hover:-translate-y-1 p-1">
            
            {/* Using img tag instead of Next.js Image component to avoid optimization issues */}
            <div className="relative w-full h-full">
              <img
                src={src}
                alt={title}
                className="absolute inset-0 w-full h-full object-contain transition-transform duration-500 z-10 scale-90"
                loading={priority ? "eager" : "lazy"}
              />
            </div>
            
          </div>

        </div>
      </div>
    </article>
  );
}

function Faq({ q, a, open = false }: { q: string; a: React.ReactNode; open?: boolean }) {
  return (
    <details
      className="group rounded-2xl border border-white/10 bg-gradient-to-br from-neutral-900/60 to-neutral-800/40 px-6 sm:px-8 py-6 hover:border-cyan-400/30 hover:bg-gradient-to-br hover:from-neutral-800/80 hover:to-neutral-700/60 transition-all duration-500 cursor-pointer glow-effect backdrop-blur-sm shadow-lg hover:shadow-cyan-500/10"
      {...(open ? { open: true } : {})}
    >
      <summary className="flex cursor-pointer list-none items-center justify-between gap-4">
        <h3 className="text-base sm:text-lg font-semibold text-white group-hover:text-cyan-300 transition-colors duration-300 cursor-line-highlight leading-relaxed">{q}</h3>
        <span className="relative inline-flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-neutral-800 to-neutral-700 ring-1 ring-white/10 group-hover:from-cyan-500/20 group-hover:to-blue-500/20 group-hover:ring-cyan-400/30 transition-all duration-300 shadow-lg group-hover:shadow-cyan-500/20">
          <span className="absolute h-4 w-0.5 bg-white/80 transition-all duration-300 group-open:rotate-90 group-hover:bg-cyan-300 group-hover:scale-110" />
          <span className="absolute h-0.5 w-4 bg-white/80 group-hover:bg-cyan-300 group-hover:scale-110 transition-all duration-300" />
        </span>
      </summary>
      <div className="pt-6 text-sm text-neutral-300 group-hover:text-white transition-colors duration-300 cursor-line-highlight leading-relaxed border-t border-white/5 group-hover:border-cyan-400/20 mt-4">{a}</div>
    </details>
  );
}
