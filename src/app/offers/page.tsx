"use client";

import { useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function OffersPage() {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    }, observerOptions);

    const elements = document.querySelectorAll(".animate-on-scroll");
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <main className="min-h-screen">
      <Navbar />
      
      {/* Exclusive Offers for New Vendor Partners Section */}
      <section id="offers" className="section interactive-section offers-section" style={{ background: "var(--gray-50)", paddingTop: "6rem" }}>
        <div className="container">
          <h1 className="section-title animate-on-scroll">
            Exclusive Offers for <span className="gradient-text">New Vendor Partners</span>
          </h1>
          <p className="section-subtitle animate-on-scroll">
            To ensure a smooth and successful launch, we provide valuable introductory incentives.
          </p>

          <div className="exclusive-offers-grid">
            {[
              { 
                id: 1, 
                title: "Free Subscription",
                subtitle: "3 Years to the platform",
                description: "Get full access to all platform features and tools completely free for the first 3 years.",
                highlight: true,
                icon: "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z",
                gradient: "from-blue-500 to-cyan-500"
              },
              { 
                id: 2, 
                title: "Membership Cards",
                subtitle: "Exclusive Partner Benefits",
                description: "Access exclusive partner benefits with dedicated membership cards that showcase your partnership status.",
                highlight: true,
                icon: "M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4",
                gradient: "from-purple-500 to-pink-500"
              },
              { 
                id: 3, 
                title: "Celebrity & National Player Branding",
                subtitle: "Premium Brand Association",
                description: "Leverage the influence of celebrity and national player branding for your promotional materials and events.",
                highlight: true,
                icon: "M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z",
                gradient: "from-orange-500 to-red-500"
              },
            ].map((offer) => (
              <div
                key={offer.id}
                className="exclusive-offer-card animate-on-scroll"
                style={{ animationDelay: `${offer.id * 0.1}s` }}
              >
                <div className={`exclusive-offer-icon-wrapper bg-gradient-to-br ${offer.gradient}`}>
                  <svg className="exclusive-offer-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={offer.icon} />
                  </svg>
                </div>
                <div className="exclusive-offer-content">
                  <h3 className="exclusive-offer-title">{offer.title}</h3>
                  <p className="exclusive-offer-subtitle">{offer.subtitle}</p>
                  <p className="exclusive-offer-description">{offer.description}</p>
                </div>
                <div className="exclusive-offer-footer">
                  <svg className="exclusive-arrow-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  );
}
