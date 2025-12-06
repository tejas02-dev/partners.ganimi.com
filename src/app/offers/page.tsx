"use client";

import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function OffersPage() {
  const [selectedOfferCategory, setSelectedOfferCategory] = useState<string>("all");

  const offerCategories = {
    all: {
      name: "All Offers",
      icon: "M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z",
    },
    growth: {
      name: "Growth & Access",
      icon: "M13 7h8m0 0v8m0-8l-8 8-4-4-6 6",
    },
    promotion: {
      name: "Promotion & Marketing",
      icon: "M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z",
    },
    technology: {
      name: "Technology",
      icon: "M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
    },
    networking: {
      name: "Networking",
      icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z",
    },
    events: {
      name: "Events & Training",
      icon: "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z",
    },
    recognition: {
      name: "Recognition",
      icon: "M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z",
    },
  };

  const allOffersForVendor = [
    { id: 1, text: "Free Subscription for 3 years", category: "growth", highlight: true },
    { id: 2, text: "Business Growth 2x to 3x", category: "growth", highlight: true },
    { id: 3, text: "Sustainable Business for 10 years", category: "growth" },
    { id: 4, text: "Your Brand Promotion", category: "promotion" },
    { id: 5, text: "Your Service / Product Promotion", category: "promotion" },
    { id: 6, text: "Cross Platform Promotion", category: "promotion" },
    { id: 7, text: "National Level exposure", category: "promotion", highlight: true },
    { id: 8, text: "Tech Platform", category: "technology" },
    { id: 9, text: "AI Tech Platform", category: "technology", highlight: true },
    { id: 10, text: "Networking with Same domain", category: "networking" },
    { id: 11, text: "Networking with Useful Resources", category: "networking" },
    { id: 12, text: "Marketing Event Access", category: "events" },
    { id: 13, text: "Trainings", category: "events" },
    { id: 14, text: "Competition District/State/National Level", category: "events", highlight: true },
    { id: 15, text: "Membership (cards)", category: "recognition" },
    { id: 16, text: "Same Domain Celebrity", category: "recognition" },
    { id: 17, text: "State National Player On Board for Branding", category: "recognition", highlight: true },
  ];

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
      
      {/* Offers for Vendor Section */}
      <section className="section interactive-section offers-section" style={{ background: "var(--gray-50)", paddingTop: "6rem" }}>
        <div className="container">
          <h1 className="section-title animate-on-scroll">
            Offers for <span className="gradient-text">Vendor</span>
          </h1>
          <p className="section-subtitle animate-on-scroll">
            Comprehensive benefits designed to help your business thrive
          </p>

          {/* Category Tabs */}
          <div className="offer-categories-tabs animate-on-scroll">
            {Object.entries(offerCategories)
              .filter(([key]) => {
                if (key === "all") return true;
                const hasOffers = allOffersForVendor.some(offer => offer.category === key);
                return hasOffers;
              })
              .map(([key, category]) => {
                const offerCount = key === "all" 
                  ? allOffersForVendor.length 
                  : allOffersForVendor.filter(offer => offer.category === key).length;
                
                return (
                  <button
                    key={key}
                    onClick={() => {
                      setSelectedOfferCategory(key);
                    }}
                    className={`offer-category-tab ${selectedOfferCategory === key ? "active" : ""}`}
                  >
                    <svg className="category-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={category.icon} />
                    </svg>
                    <span>{category.name}</span>
                    {offerCount > 0 && (
                      <span className="offer-count-badge">{offerCount}</span>
                    )}
                  </button>
                );
              })}
          </div>

          {/* Offers Grid */}
          <div className="offers-grid">
            {(() => {
              let filteredOffers = allOffersForVendor;
              
              if (selectedOfferCategory !== "all") {
                filteredOffers = allOffersForVendor.filter(
                  offer => offer.category === selectedOfferCategory
                );
              }
              
              const sortedOffers = [...filteredOffers].sort((a, b) => {
                if (a.highlight && !b.highlight) return -1;
                if (!a.highlight && b.highlight) return 1;
                return 0;
              });
              
              if (sortedOffers.length === 0) {
                return (
                  <div className="no-offers-message">
                    <p>No offers available in this category.</p>
                  </div>
                );
              }
              
              return sortedOffers.map((offer) => (
                <div
                  key={offer.id}
                  className={`offer-card-enhanced ${offer.highlight ? "highlighted" : ""}`}
                >
                  {offer.highlight && (
                    <div className="offer-featured-badge">
                      <svg className="featured-star-icon" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                      </svg>
                      <span>Featured</span>
                    </div>
                  )}
                  <div className="offer-card-content">
                    <div className="offer-card-icon-wrapper">
                      <svg className="offer-card-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div className="offer-card-text">
                      <p className="offer-text">{offer.text}</p>
                    </div>
                  </div>
                </div>
              ));
            })()}
          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  );
}

