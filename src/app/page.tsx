"use client";

import { useState } from "react";
import Image from "next/image";

export default function Home() {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsLoading(true);
    // Simulate API call
    const response = await fetch('https://ganimi.app/api/v1/waitlist/vendor', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email: email })
    })
    if (response.status === 200) {
      setIsSubmitted(true);
      setEmail("");
    }
    setIsLoading(false);
  };

  return (
    <main className="min-h-screen flex flex-col">
      {/* Navigation */}
      <nav className="w-full px-6 py-6 animate-fade-in">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[var(--aqua)] to-[var(--aqua-dark)] flex items-center justify-center animate-pulse-glow p-2">
              <Image
                src="/logo-white.png"
                alt="Ganimi"
                width={32}
                height={32}
                className="w-full h-full object-contain"
              />
            </div>
            <span className="text-xl font-semibold tracking-tight">
              Ganimi <span className="text-[var(--muted)]">Partners</span>
            </span>
          </div>
          <div className="hidden sm:flex items-center gap-2 text-sm text-[var(--muted)]">
            <span className="aqua-dot" />
            <span>Coming Soon</span>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="flex-1 flex items-center justify-center px-6 py-12">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--surface)] border border-[var(--aqua)]/20 mb-8 opacity-0 animate-fade-in-up">
            <span className="w-2 h-2 rounded-full bg-[var(--aqua)] animate-pulse" />
            <span className="text-sm text-[var(--muted)]">For Service Providers & Career Experts</span>
          </div>

          {/* Main Headline */}
          <h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] mb-6 opacity-0 animate-fade-in-up delay-100"
            style={{ fontFamily: "var(--font-bricolage)" }}
          >
            Connect with students who{" "}
            <span className="text-gradient">know themselves.</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg sm:text-xl text-[var(--muted)] max-w-2xl mx-auto mb-8 opacity-0 animate-fade-in-up delay-200">
            List your services on Ganimi — the platform where students discover careers aligned with their
            talents, interests, and passions. Reach families who value meaningful guidance.
          </p>

          {/* Value Props */}
          <div className="grid sm:grid-cols-3 gap-4 mb-12 opacity-0 animate-fade-in-up delay-300">
            <div className="glow-card rounded-2xl p-6 text-left">
              <div className="w-12 h-12 rounded-xl bg-[var(--aqua)]/10 flex items-center justify-center mb-4">
                <svg
                  className="w-6 h-6 text-[var(--aqua)]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              <h3 className="font-semibold mb-2">Targeted Audience</h3>
              <p className="text-sm text-[var(--muted)]">
                Reach students who are self-aware and actively seeking aligned career paths.
              </p>
            </div>

            <div className="glow-card rounded-2xl p-6 text-left">
              <div className="w-12 h-12 rounded-xl bg-[var(--aqua)]/10 flex items-center justify-center mb-4">
                <svg
                  className="w-6 h-6 text-[var(--aqua)]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                  />
                </svg>
              </div>
              <h3 className="font-semibold mb-2">Track Progress</h3>
              <p className="text-sm text-[var(--muted)]">
                Built-in tools to monitor student development and measure your impact.
              </p>
            </div>

            <div className="glow-card rounded-2xl p-6 text-left">
              <div className="w-12 h-12 rounded-xl bg-[var(--aqua)]/10 flex items-center justify-center mb-4">
                <svg
                  className="w-6 h-6 text-[var(--aqua)]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h3 className="font-semibold mb-2">Seamless Connection</h3>
              <p className="text-sm text-[var(--muted)]">
                Students find you through our matching system — no cold outreach needed.
              </p>
            </div>
          </div>

          {/* Email Signup */}
          <div className="max-w-md mx-auto opacity-0 animate-fade-in-up delay-400">
            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="space-y-4">
                <p className="text-sm text-[var(--aqua)] mb-4 font-medium">
                  Be among the first partners to join our network
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="input-aqua flex-1 px-5 py-4 rounded-xl text-base"
                    required
                  />
                  <button
                    type="submit"
                    disabled={isLoading}
                    className="btn-aqua px-8 py-4 rounded-xl text-base whitespace-nowrap disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {isLoading ? (
                      <span className="flex items-center gap-2">
                        <svg className="animate-spin w-5 h-5" viewBox="0 0 24 24">
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                            fill="none"
                          />
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          />
                        </svg>
                        Joining...
                      </span>
                    ) : (
                      "Join Waitlist"
                    )}
                  </button>
                </div>
              </form>
            ) : (
              <div className="glow-card rounded-2xl p-8 animate-fade-in">
                <div className="w-16 h-16 rounded-full bg-[var(--aqua)]/20 flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-8 h-8 text-[var(--aqua)]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">You&apos;re on the list!</h3>
                <p className="text-[var(--muted)]">
                  We&apos;ll notify you as soon as the partner portal is ready.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Bottom Section */}
      <section className="px-6 py-12 opacity-0 animate-fade-in-up delay-500">
        <div className="max-w-4xl mx-auto">
          <div className="glow-card rounded-3xl p-8 sm:p-12 text-center">
            <p className="text-lg sm:text-xl text-[var(--muted)] mb-6 italic">
              &ldquo;Life is all about satisfaction. We help children lead successful and satisfied lives
              by connecting their talent, interest, and passion.&rdquo;
            </p>
            <div className="h-px w-24 mx-auto bg-gradient-to-r from-transparent via-[var(--aqua)] to-transparent mb-6" />
            <p className="text-sm text-[var(--muted)]">
              On Ganimi, students discover their natural abilities, motivations, and behavioral traits —
              <br className="hidden sm:block" />
              so they come to you already knowing who they are and what they&apos;re looking for.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 py-8 opacity-0 animate-fade-in delay-600">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-[var(--muted)]">
          <p>© 2025 Ganimi. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-[var(--aqua)] transition-colors">
              Privacy
            </a>
            <a href="#" className="hover:text-[var(--aqua)] transition-colors">
              Terms
            </a>
            <a href="#" className="hover:text-[var(--aqua)] transition-colors">
              Contact
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
