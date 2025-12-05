"use client";

import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="min-h-screen flex flex-col">
      {/* Navigation */}
      <nav className="w-full px-6 py-6 animate-fade-in">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link href="/home" className="flex items-center gap-3">
            <span className="text-xl font-semibold tracking-tight">
              Ganimi <span className="text-[var(--muted)]">Partners</span>
            </span>
          </Link>
          <div className="flex items-center gap-6">
            <Link
              href="/home"
              className="text-sm font-medium text-[var(--muted)] hover:text-[var(--aqua)] transition-colors"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="text-sm font-medium text-[var(--foreground)] hover:text-[var(--aqua)] transition-colors"
            >
              About Us
            </Link>
            <Link
              href="/contact"
              className="text-sm font-medium text-[var(--muted)] hover:text-[var(--aqua)] transition-colors"
            >
              Contact
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="flex-1 flex items-center justify-center px-6 py-8 md:py-12">
        <div className="max-w-5xl mx-auto text-center">
          <h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.2] mb-4 opacity-0 animate-fade-in-up"
            style={{ fontFamily: "var(--font-bricolage)" }}
          >
            About <span className="text-gradient">Us</span>
          </h1>

          <p className="text-lg sm:text-xl text-[var(--muted)] max-w-3xl mx-auto mb-8 opacity-0 animate-fade-in-up delay-100">
            Building the future of education through innovation, technology, and meaningful connections.
          </p>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section className="px-6 py-8 md:py-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {/* Vision */}
            <div className="text-center opacity-0 animate-fade-in-up">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-[var(--aqua)] to-[var(--aqua-dark)] mb-4">
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                  />
                </svg>
              </div>
              <h2
                className="text-2xl md:text-3xl font-bold mb-4"
                style={{ fontFamily: "var(--font-bricolage)" }}
              >
                Our <span className="text-gradient">Vision</span>
              </h2>
              <p className="text-lg text-[var(--muted)] leading-relaxed">
                To build dynamic teaching-learning platform connecting individual talent-interest-passion for successful educational and career development.
              </p>
            </div>

            {/* Mission */}
            <div className="text-center opacity-0 animate-fade-in-up delay-200">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-[var(--aqua)] to-[var(--aqua-dark)] mb-4">
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h2
                className="text-2xl md:text-3xl font-bold mb-4"
                style={{ fontFamily: "var(--font-bricolage)" }}
              >
                Our <span className="text-gradient">Mission</span>
              </h2>
              <p className="text-lg text-[var(--muted)] leading-relaxed">
                To Integrate local and global resources with latest technology for quality education to all.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values We Offer Section */}
      <section className="px-6 py-8 md:py-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 opacity-0 animate-fade-in-up">
            <h2
              className="text-3xl md:text-4xl font-bold mb-4"
              style={{ fontFamily: "var(--font-bricolage)" }}
            >
              Values We <span className="text-gradient">Offer</span>
            </h2>
            <p className="text-[var(--muted)] max-w-2xl mx-auto">
              Core principles that shape the Ganimi learning experience
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="glow-card rounded-2xl p-8 text-center opacity-0 animate-fade-in-up delay-300">
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[var(--aqua)] to-[var(--aqua-dark)] flex items-center justify-center mx-auto mb-6">
                <svg
                  className="w-10 h-10 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4" style={{ fontFamily: "var(--font-bricolage)" }}>
                Freedom
              </h3>
              <p className="text-[var(--muted)] leading-relaxed">
                Learn anytime, anywhere, and at your own pace — Ganimi gives every learner the freedom to explore beyond classroom boundaries.
              </p>
            </div>

            <div className="glow-card rounded-2xl p-8 text-center opacity-0 animate-fade-in-up delay-400">
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[var(--aqua)] to-[var(--aqua-dark)] flex items-center justify-center mx-auto mb-6">
                <svg
                  className="w-10 h-10 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4" style={{ fontFamily: "var(--font-bricolage)" }}>
                Choice
              </h3>
              <p className="text-[var(--muted)] leading-relaxed">
                A platform that offers complete flexibility — choose what, when, and how you want to learn.
              </p>
            </div>

            <div className="glow-card rounded-2xl p-8 text-center opacity-0 animate-fade-in-up delay-500">
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[var(--aqua)] to-[var(--aqua-dark)] flex items-center justify-center mx-auto mb-6">
                <svg
                  className="w-10 h-10 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4" style={{ fontFamily: "var(--font-bricolage)" }}>
                Joy
              </h3>
              <p className="text-[var(--muted)] leading-relaxed">
                Experience the true joy of learning through engaging content, instant feedback, and real progress.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 py-8 md:py-12 bg-gradient-to-b from-transparent to-[var(--surface-light)]/50">
        <div className="max-w-4xl mx-auto text-center">
          <div className="glow-card rounded-3xl p-8 md:p-12 opacity-0 animate-fade-in-up">
            <h2
              className="text-2xl md:text-3xl font-bold mb-4"
              style={{ fontFamily: "var(--font-bricolage)" }}
            >
              Ready to <span className="text-gradient">Partner</span> with Us?
            </h2>
            <p className="text-lg text-[var(--muted)] mb-8 max-w-2xl mx-auto">
              Join our network and unlock opportunities for growth, promotion, and sustainable business development.
            </p>
            <Link
              href="/home"
              className="btn-aqua inline-block px-8 py-4 rounded-xl text-base font-semibold"
            >
              Explore Our Offers
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 py-8 border-t border-[var(--aqua)]/10">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-[var(--muted)]">
          <p>© 2025 Ganimi Partners. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="/home" className="hover:text-[var(--aqua)] transition-colors">
              Home
            </Link>
            <Link href="/about" className="hover:text-[var(--aqua)] transition-colors">
              About Us
            </Link>
            <Link href="/contact" className="hover:text-[var(--aqua)] transition-colors">
              Contact
            </Link>
            <a href="#" className="hover:text-[var(--aqua)] transition-colors">
              Privacy
            </a>
            <a href="#" className="hover:text-[var(--aqua)] transition-colors">
              Terms
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}

