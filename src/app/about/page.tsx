"use client";

import { useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function AboutPage() {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px"
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    }, observerOptions);

    // Small delay to ensure DOM is ready
    setTimeout(() => {
      const elements = document.querySelectorAll(".animate-on-scroll");
      elements.forEach((el) => {
        // Check if element is already in viewport
        const rect = el.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight && rect.bottom > 0;
        if (isVisible) {
          el.classList.add("visible");
        } else {
          observer.observe(el);
        }
      });
    }, 100);

    return () => {
      const elements = document.querySelectorAll(".animate-on-scroll");
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <main className="min-h-screen flex flex-col" style={{ paddingTop: "80px" }}>
      <Navbar />

      {/* Hero Section */}
      <section className="section flex items-center justify-center">
        <div className="container text-center">
          <h1 className="section-title animate-on-scroll">
            About <span className="gradient-text">Us</span>
          </h1>
          <p className="section-subtitle animate-on-scroll">
            Building the future of education through innovation, technology, and meaningful connections.
          </p>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section className="section">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {/* Vision */}
            <div className="text-center animate-on-scroll">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-[var(--primary-blue)] to-[var(--primary-blue-dark)] mb-4">
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
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Our <span className="gradient-text">Vision</span>
              </h2>
              <p className="text-lg text-[var(--gray-600)] leading-relaxed">
                To build dynamic teaching-learning platform connecting individual talent-interest-passion for successful educational and career development.
              </p>
            </div>

            {/* Mission */}
            <div className="text-center animate-on-scroll">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-[var(--primary-blue)] to-[var(--primary-blue-dark)] mb-4">
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
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Our <span className="gradient-text">Mission</span>
              </h2>
              <p className="text-lg text-[var(--gray-600)] leading-relaxed">
                To Integrate local and global resources with latest technology for quality education to all.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values We Offer Section */}
      <section className="section" style={{ background: "var(--gray-50)" }}>
        <div className="container">
          <div className="text-center mb-12 animate-on-scroll">
            <h2 className="section-title">
              Values We <span className="gradient-text">Offer</span>
            </h2>
            <p className="section-subtitle">
              Core principles that shape the Ganimi learning experience
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="card text-center animate-on-scroll">
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[var(--primary-blue)] to-[var(--primary-blue-dark)] flex items-center justify-center mx-auto mb-6">
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
              <h3 className="text-2xl font-bold mb-4">Freedom</h3>
              <p className="text-[var(--gray-600)] leading-relaxed">
                Learn anytime, anywhere, and at your own pace — Ganimi gives every learner the freedom to explore beyond classroom boundaries.
              </p>
            </div>

            <div className="card text-center animate-on-scroll">
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[var(--primary-blue)] to-[var(--primary-blue-dark)] flex items-center justify-center mx-auto mb-6">
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
              <h3 className="text-2xl font-bold mb-4">Choice</h3>
              <p className="text-[var(--gray-600)] leading-relaxed">
                A platform that offers complete flexibility — choose what, when, and how you want to learn.
              </p>
            </div>

            <div className="card text-center animate-on-scroll">
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[var(--primary-blue)] to-[var(--primary-blue-dark)] flex items-center justify-center mx-auto mb-6">
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
              <h3 className="text-2xl font-bold mb-4">Joy</h3>
              <p className="text-[var(--gray-600)] leading-relaxed">
                Experience the true joy of learning through engaging content, instant feedback, and real progress.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section" style={{ background: "var(--gray-50)" }}>
        <div className="container text-center">
          <div className="card max-w-4xl mx-auto animate-on-scroll">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Ready to <span className="gradient-text">Partner</span> with Us?
            </h2>
            <p className="text-lg text-[var(--gray-600)] mb-8 max-w-2xl mx-auto">
              Join our network and unlock opportunities for growth, promotion, and sustainable business development.
            </p>
            <a
              href="/offers"
              className="btn btn-primary inline-block px-8 py-4 rounded-xl text-base font-semibold"
            >
              Explore Our Offers
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

