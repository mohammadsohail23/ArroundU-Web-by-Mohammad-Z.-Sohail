"use client";

import { useEffect, useState } from "react";

/** Slides in the exact order you asked: 3, 2, 5, 4, 6, 1 */
const imgs = ["/3.jpg", "/2.jpg", "/5.jpg", "/4.jpg", "/6.jpg", "/1.jpg"];

/** Accent colors mapped 1:1 with slides above */
const accents = ["#8C83F2", "#E8ADE4", "#ADE8B6", "#E8C7AD", "#ADD1E8", "#E8E2AD"];

export default function HomePage() {
  const [i, setI] = useState(0);
  const [imagesLoaded, setImagesLoaded] = useState(false);

  // Preload all images for faster switching
  useEffect(() => {
    const preloadImages = () => {
      const imagePromises = imgs.map((src) => {
        return new Promise((resolve, reject) => {
          const img = new Image();
          img.onload = resolve;
          img.onerror = reject;
          img.src = src;
        });
      });

      Promise.all(imagePromises)
        .then(() => setImagesLoaded(true))
        .catch(() => setImagesLoaded(true)); // Still show content even if some images fail
    };

    preloadImages();
  }, []);

  useEffect(() => {
    const id = setInterval(() => setI((n) => (n + 1) % imgs.length), 5000);
    return () => clearInterval(id);
  }, []);

  const accent = accents[i];

  return (
    // Full-bleed hero (behind fixed navbar)
    <section className="relative -mx-[calc((100vw-100%)/2)] mt-[-5rem] h-svh w-screen overflow-hidden bg-black">
      {/* Cross-fading background images */}
      <div className="absolute inset-0">
        {imgs.map((src, idx) => (
          <img
            key={src}
            src={src}
            alt=""
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
              idx === i ? "opacity-100" : "opacity-0"
            }`}
            loading={idx === 0 ? "eager" : "lazy"}
            decoding="async"
          />
        ))}
        <div className="absolute inset-0 bg-black/35" />
      </div>

      {/* Centered overlay text */}
      <div className="relative z-10 flex h-full w-full items-center justify-center px-6 text-center">
        <div className="max-w-none">
          <h1
            style={{ color: accent }}
            className="mx-auto w-fit font-extrabold tracking-tight leading-none
                       text-[clamp(2rem,8vw,7rem)] md:whitespace-nowrap transition-colors duration-700 drop-shadow"
          >
            Welcome to arroundu
          </h1>

          <p className="mt-6 text-xl sm:text-3xl md:text-4xl text-white/95 leading-snug">
            Find Friends Nearby.<br />
            Chat, Add To Story,<br />
            Follow &amp; Explore.
          </p>
        </div>
      </div>

      {/* Loading indicator */}
      {/* {!imagesLoaded && (
        <div className="absolute inset-0 z-20 flex items-center justify-center bg-neutral-950">
          <div className="text-center">
            <div className="w-8 h-8 border-2 border-white/20 border-t-white rounded-full animate-spin mx-auto mb-4"></div>
            <p className="text-white/80">Loading...</p>
          </div>
        </div>
      )} */}

      {/* Bottom store buttons (centered, equal heights, matching accent color) */}
      <div className="pointer-events-none absolute inset-x-0 bottom-8 z-10 flex justify-center">
        <div className="pointer-events-auto flex items-center justify-center gap-4 sm:gap-5">
          <StoreButton
            href="#"
            accent={accent}
            smallTop="Get it on"
            bigBottom="App Store"
            icon={
              <svg viewBox="0 0 24 24" className="h-6 w-6" aria-hidden="true">
                <path
                  fill="currentColor"
                  d="M16.6 12.8c0-2.3 1.9-3.3 2-3.4-1.1-1.6-2.8-1.8-3.4-1.8-1.4-.1-2.8.8-3.6.8-.8 0-1.9-.8-3.1-.8-1.6 0-3 .9-3.8 2.3-1.6 2.8-.4 6.9 1.1 9.1.8 1.1 1.8 2.3 3.1 2.2 1.2 0 1.7-.7 3.2-.7 1.5 0 1.9.7 3.2.7 1.4 0 2.2-1.1 3-2.2.9-1.3 1.3-2.5 1.3-2.6-.1 0-2.5-1-2.9-3.6ZM14.6 5.7c.6-.7 1.1-1.7 1-2.7-1 .1-2 .6-2.6 1.3-.6.7-1.1 1.7-1 2.7 1-.1 2-.6 2.6-1.3Z"
                />
              </svg>
            }
          />

          <StoreButton
            href="#"
            accent={accent}
            smallTop="Get it on"
            bigBottom="Google Play"
            icon={
              <svg viewBox="0 0 24 24" className="h-6 w-6" aria-hidden="true">
                <path fill="currentColor" d="M4 3l14 9L4 21V3z" />
              </svg>
            }
          />
        </div>
      </div>
    </section>
  );
}

/** Reusable store button with consistent size + alignment */
function StoreButton({
  href,
  accent,
  smallTop,
  bigBottom,
  icon,
}: {
  href: string;
  accent: string;
  smallTop: string;
  bigBottom: string;
  icon: React.ReactNode;
}) {
  return (
    <a
      href={href}
      style={{ borderColor: accent, color: accent }}
      className="inline-flex h-12 sm:h-14 min-w-[160px] items-center justify-center gap-3
                 rounded-xl border-2 bg-black/35 px-4 sm:px-5 backdrop-blur
                 hover:bg-black/45 transition"
      aria-label={`${smallTop} ${bigBottom}`}
    >
      <span className="shrink-0">{icon}</span>
      <span className="flex flex-col leading-tight text-left">
        <span className="text-[10px] sm:text-xs uppercase tracking-widest" style={{ color: accent }}>
          {smallTop}
        </span>
        <span className="text-sm sm:text-base font-semibold" style={{ color: accent }}>
          {bigBottom}
        </span>
      </span>
    </a>
  );
}
