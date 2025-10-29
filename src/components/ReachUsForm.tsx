"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

export default function ReachUsForm() {
  const [loading, setLoading] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const closeBtnRef = useRef<HTMLButtonElement | null>(null);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    if (!form.checkValidity()) return;
    
    setLoading(true);
    
    try {
      const formData = new FormData(form);
      const data = {
        name: formData.get('name'),
        email: formData.get('email'),
        message: formData.get('message'),
      };

      const response = await fetch('http://31.97.128.31:5000/api/contact/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setModalOpen(true);
        form.reset();
      } else {
        throw new Error(result.message || 'Failed to send message');
      }
    } catch (error) {
      console.error('Error sending message:', error);
      alert('Failed to send message. Please try again or contact us directly.');
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setModalOpen(false);
    }
    if (modalOpen) window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [modalOpen]);

  useEffect(() => {
    if (modalOpen) closeBtnRef.current?.focus();
  }, [modalOpen]);

  return (
    <>
      {/* Form card — full width */}
      <div className="w-full">
        <div className="w-full bg-neutral-800/40 border border-white/10 rounded-2xl p-6 sm:p-8">
          <form onSubmit={onSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-200 mb-2">
                Name <span className="text-gray-400">(required)</span>
              </label>
              <input
                id="name"
                name="name"
                required
                autoComplete="name"
                className="w-full rounded-lg bg-neutral-700/50 border border-white/10 px-4 py-3 text-white placeholder:text-gray-400 outline-none focus:ring-2 focus:ring-white/20 focus:border-white/20"
                placeholder="Jane Doe"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-200 mb-2">
                Email <span className="text-gray-400">(required)</span>
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                autoComplete="email"
                className="w-full rounded-lg bg-neutral-700/50 border border-white/10 px-4 py-3 text-white placeholder:text-gray-400 outline-none focus:ring-2 focus:ring-white/20 focus:border-white/20"
                placeholder="you@email.com"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-200 mb-2">
                Message <span className="text-gray-400">(required)</span>
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={6}
                className="w-full rounded-lg bg-neutral-700/50 border border-white/10 px-4 py-3 text-white placeholder:text-gray-400 outline-none focus:ring-2 focus:ring-white/20 focus:border-white/20 resize-none"
                placeholder="Tell us what's on your mind…"
              />
            </div>

            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-4">
              <p className="text-sm text-gray-400">
                We typically reply within 48 hours. By sending, you agree to our{" "}
                <Link href="/legalstuff" className="underline underline-offset-2 hover:text-gray-300">
                  Privacy Policy
                </Link>
                .
              </p>

              <button
                type="submit"
                disabled={loading}
                className="w-full font-bold sm:w-auto inline-flex items-center justify-center rounded-lg bg-white text-black px-6 py-3 text-sm hover:bg-gray-100 transition-colors disabled:opacity-60"
              >
                {loading ? "Sending…" : "Submit."}
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Socials — full width */}
      <div className="mt-10 sm:mt-12 w-full">
        <p className="text-gray-400 mb-4 text-[20px]">You can also reach us on:</p>

        <div className="flex flex-wrap items-center gap-3">
          <SocialIcon
            label="Instagram"
            href="https://www.instagram.com/arroundu_app?igsh=ZTI5NHVmejU0cXg1&utm_source=qr"
          >
            <img src="/1.svg" alt="Instagram" className="h-12 w-12" />
          </SocialIcon>

          <SocialIcon
          
            label="Facebook"
            href="https://www.tiktok.com/@arroundu_app?_t=8lggChvLmKE&_r=1"
          >
            <img src="/2.svg" alt="Facebook" className="h-13 w-13" />
          </SocialIcon>

          <SocialIcon label="TikTok" href="https://www.facebook.com/profile.php?id=61557333922923&mibextid=LQQJ4d">
            <img src="/3.svg" alt="TikTok" className="h-12 w-12" />
          </SocialIcon>
        </div>
      </div>

      {/* Direct email — full width */}
      <div className="mt-8 w-full text-gray-400">
        Prefer email?{" "}
        <a className="underline underline-offset-2 hover:text-gray-300" href="mailto:hey@arroundu.com">
          hey@arroundu.com
        </a>
      </div>

      {/* Success Modal */}
      {modalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          aria-modal="true"
          role="dialog"
          onClick={() => setModalOpen(false)}
        >
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
          <div
            className="relative w-full max-w-md rounded-[28px] bg-gradient-to-b from-white/12 to-transparent p-[1px]"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="rounded-[27px] border border-white/10 bg-neutral-900/90 p-6 sm:p-8 shadow-2xl">
              <h3 className="text-2xl font-semibold text-white">Message Sent Successfully! ✅</h3>
              <p className="mt-2 text-neutral-300">
                Thank you for reaching out! Your message has been submitted successfully. Our team will get back to you within 48 hours.
              </p>
              <div className="mt-6 flex justify-end">
                <button
                  ref={closeBtnRef}
                  onClick={() => setModalOpen(false)}
                  className="rounded-full border border-white/15 bg-neutral-800/70 px-5 py-2 text-sm font-medium text-neutral-100 hover:border-white/25 hover:bg-neutral-800"
                >
                  Got it
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

function SocialIcon({
  label,
  href,
  children,
}: {
  label: string;
  href: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="group inline-flex items-center justify-center p-2 hover:opacity-80 transition-opacity"
      title={label}
    >
      {children}
    </a>
  );
}
