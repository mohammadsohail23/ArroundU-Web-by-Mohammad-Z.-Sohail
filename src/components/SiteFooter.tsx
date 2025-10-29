"use client";

import { usePathname } from "next/navigation";

export default function Footer() {
  const pathname = usePathname();

  // Hide the footer on the home page only
  if (pathname === "/") return null;

  const year = new Date().getFullYear();

  return (
    <footer className="mt-16 bg-black">
      <div className="mx-auto w-full max-w-6xl px-6 py-6 flex items-center justify-between text-sm text-neutral-400">
        <p className="italic font-bold">
          Made with <span className="not-italic">❤️</span> in New York City 🗽 for the world.
        </p>
        <p className=" italic font-bold">© {year} ArroundU Inc. All rights reserved.</p>
      </div>
    </footer>
  );
}
