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

      {/* Why to Choose Us Section */}
      <section className="section interactive-section">
        <div className="container">
          <div className="text-center mb-12 animate-on-scroll">
            <h2 className="section-title">
              Why to Choose <span className="gradient-text">Us</span>
            </h2>
            <p className="section-subtitle">
              Discover the comprehensive advantages of partnering with Ganimi
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "AI Integrated Tech Platform / App",
                icon: "M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
                gradient: "linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)"
              },
              {
                title: "2x–3x Business Growth",
                icon: "M13 7h8m0 0v8m0-8l-8 8-4-4-6 6",
                gradient: "linear-gradient(135deg, #10b981 0%, #059669 100%)"
              },
              {
                title: "10-15 Year Sustainable Business Model",
                icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z",
                gradient: "linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%)"
              },
              {
                title: "Brand Promotion Across the Platform",
                icon: "M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z",
                gradient: "linear-gradient(135deg, #ec4899 0%, #db2777 100%)"
              },
              {
                title: "Collaborations with Institutes",
                icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4",
                gradient: "linear-gradient(135deg, #6366f1 0%, #4f46e5 100%)"
              },
              {
                title: "Service / Product Promotion",
                icon: "M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12",
                gradient: "linear-gradient(135deg, #06b6d4 0%, #0891b2 100%)"
              },
              {
                title: "Cross-Platform Promotion",
                icon: "M8 7h12m0 0l-4-4m4 4l-4 4m0 6h-12m0 0l4 4m-4-4l4-4",
                gradient: "linear-gradient(135deg, #f97316 0%, #ea580c 100%)"
              },
              {
                title: "Networking With Same-Domain Vendors",
                icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z",
                gradient: "linear-gradient(135deg, #14b8a6 0%, #0d9488 100%)"
              },
              {
                title: "Access to Important Resources",
                icon: "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253",
                gradient: "linear-gradient(135deg, #ef4444 0%, #dc2626 100%)"
              },
              {
                title: "Access to Marketing Events",
                icon: "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z",
                gradient: "linear-gradient(135deg, #eab308 0%, #ca8a04 100%)"
              },
              {
                title: "Training Workshops",
                icon: "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253",
                gradient: "linear-gradient(135deg, #10b981 0%, #059669 100%)"
              },
              {
                title: "District / State / National Competitions",
                icon: "M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z",
                gradient: "linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%)"
              },
              {
                title: "National-Level Exposure",
                icon: "M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
                gradient: "linear-gradient(135deg, #f43f5e 0%, #e11d48 100%)"
              },
            ].map((item, index) => (
              <div
                key={index}
                className="why-choose-card card animate-on-scroll"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <div className="why-choose-icon-wrapper">
                  <div className="why-choose-icon" style={{ background: item.gradient }}>
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={item.icon} />
                    </svg>
                  </div>
                </div>
                <h3 className="why-choose-title">{item.title}</h3>
              </div>
            ))}
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

