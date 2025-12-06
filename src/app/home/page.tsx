"use client";

import { useState, useEffect, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { BackgroundBeams } from "../components/BackgroundBeams";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function HomePage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [selectedTier, setSelectedTier] = useState<number>(0);

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

  // Define offers as a constant array
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

  const faqs = [
    {
      question: "What is Ganimi Partners?",
      answer: "Ganimi Partners is a vendor partnership program that connects activity providers with parents and students seeking quality extracurricular programs.",
    },
    {
      question: "How do I become a vendor partner?",
      answer: "Simply fill out our contact form with your business details, and our team will reach out to discuss partnership opportunities.",
    },
    {
      question: "What are the membership tiers?",
      answer: "We offer four membership tiers: Platinum (premium), Diamond (strong visibility), Gold (mid-tier), and Silver (entry-level).",
    },
    {
      question: "Is there a free trial?",
      answer: "Yes! We offer 1 year free access to the full vendor dashboard, and the first 10 vendors in each category get 3 years free.",
    },
  ];

  const membershipTiers = [
    {
      name: "Platinum",
      description: "Premium status with highest brand exposure, exclusive backstage event access, personal consultations, masterclass invitations, and unmatched promotional positioning.",
      features: [
        "Highest brand exposure",
        "Exclusive backstage access",
        "Personal consultations",
        "Masterclass invitations",
        "Unmatched promotional positioning",
        "Priority support"
      ],
      popular: true,
    },
    {
      name: "Diamond",
      description: "Strong visibility and advanced promotional opportunities, with access to priority networking and VIP privileges.",
      features: [
        "Strong visibility",
        "Advanced promotional opportunities",
        "Priority networking",
        "VIP privileges",
        "Enhanced analytics",
        "Dedicated support"
      ],
      popular: false,
    },
    {
      name: "Gold",
      description: "Ideal mid-tier position offering consistent visibility, scheduled spotlight rotations, and general networking benefits.",
      features: [
        "Consistent visibility",
        "Scheduled spotlight rotations",
        "General networking benefits",
        "Standard analytics",
        "Email support"
      ],
      popular: false,
    },
    {
      name: "Silver",
      description: "Entry-level tier offering essential exposure ideal for new or growing vendors.",
      features: [
        "Essential exposure",
        "Basic listing",
        "Community access",
        "Basic analytics",
        "Email support"
      ],
      popular: false,
    },
  ];

  return (
    <main className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-background">
          <div className="hero-overlay"></div>
          <div className="hero-pattern"></div>
          <BackgroundBeams />
        </div>
        
        <div className="hero-container">
          <div className="hero-content">
            {/* Left Side - Main Content */}
            <div className="hero-left">
              <div className="hero-text">
                {/* Logo */}
                <div className="logo-section">
                  <Image
                    src="/logo-white.png"
                    alt="Ganimi Logo"
                    width={120}
                    height={120}
                    className="hero-logo"
                    priority
                  />
                </div>

                {/* Event Badge */}
                <div className="event-badge">
                  <span>Vendor Partnership Program</span>
                </div>
                
                <h1 className="hero-title">
                  <span className="gradient-text">Life is all about success and satisfaction</span>
                </h1>
                
                <h2 className="hero-subtitle">
                  An innovative digital ecosystem connecting parents and students with high-quality activity providers
                </h2>
                
                <div className="hero-highlight">
                  <span>Gain unmatched visibility, branding opportunities, and access to an engaged audience</span>
                </div>
                
                <div className="hero-details">
                  <div className="detail-item detail-item-enhanced">
                    <div className="detail-icon-wrapper">
                      <svg className="detail-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div className="detail-content">
                      <span className="detail-label">3 Years</span>
                      <span className="detail-value">Free Access</span>
                    </div>
                  </div>
                  <div className="detail-item detail-item-enhanced">
                    <div className="detail-icon-wrapper">
                      <svg className="detail-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                      </svg>
                    </div>
                    <div className="detail-content">
                      <span className="detail-label">2-3x</span>
                      <span className="detail-value">Business Growth</span>
                    </div>
                  </div>
                  <div className="detail-item detail-item-enhanced">
                    <div className="detail-icon-wrapper">
                      <svg className="detail-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div className="detail-content">
                      <span className="detail-label">AI-Powered</span>
                      <span className="detail-value">Platform</span>
                    </div>
                  </div>
                </div>

                <div className="hero-actions">
                  <Link href="/contact" className="btn btn-green hero-btn primary-btn">
                    Become a Partner
                  </Link>
                  <Link href="/about" className="btn btn-secondary hero-btn secondary-btn">
                    Learn More
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Benefits Section */}
      <section id="benefits" className="section interactive-section">
        <div className="container">
          <h2 className="section-title animate-on-scroll">
            Why Partner with <span className="gradient-text">Ganimi?</span>
          </h2>
          <p className="section-subtitle animate-on-scroll">
            Comprehensive benefits designed to help your business thrive
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { 
                title: "Massive Visibility", 
                desc: "Reach thousands of searching parents",
                icon: "M15 12a3 3 0 11-6 0 3 3 0 016 0z M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
              },
              { 
                title: "Smart Discovery", 
                desc: "Found by age, location, and category filters",
                icon: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              },
              { 
                title: "Verified Badge", 
                desc: "Enhanced brand credibility and trust",
                icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
              },
              { 
                title: "Analytics Dashboard", 
                desc: "Track parent interest and engagement",
                icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
              },
              { 
                title: "Network Access", 
                desc: "Connect with schools and educators",
                icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
              },
              { 
                title: "Cost-Effective", 
                desc: "Grow without heavy marketing spend",
                icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              },
            ].map((benefit, index) => (
              <div key={index} className="card benefit-card animate-on-scroll" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="benefit-icon">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={benefit.icon} />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2" style={{ color: "#111827" }}>{benefit.title}</h3>
                <p style={{ color: "#4b5563" }}>{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Offers for Vendor Section */}
      <section id="offers" className="section interactive-section offers-section" style={{ background: "var(--gray-50)" }}>
        <div className="container">
          <h2 className="section-title animate-on-scroll">
            Offers for <span className="gradient-text">Vendor</span>
          </h2>
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
              // Simple direct filtering - no useMemo
              let filteredOffers = allOffersForVendor;
              
              if (selectedOfferCategory !== "all") {
                filteredOffers = allOffersForVendor.filter(
                  offer => offer.category === selectedOfferCategory
                );
              }
              
              // Sort featured first
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

      {/* Membership Tiers Section */}
      <section id="membership" className="section interactive-section membership-section">
        <div className="container">
          <h2 className="section-title animate-on-scroll">
            Membership <span className="gradient-text">Tiers</span>
          </h2>
          <p className="section-subtitle animate-on-scroll">
            Choose the membership level that best fits your business needs
          </p>

          <div className="membership-grid">
            {membershipTiers.map((tier, index) => {
              const tierColors = [
                { 
                  bg: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)", 
                  border: "#667eea", 
                  icon: "#764ba2",
                  light: "rgba(102, 126, 234, 0.1)"
                },
                { 
                  bg: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)", 
                  border: "#f5576c", 
                  icon: "#f5576c",
                  light: "rgba(245, 87, 108, 0.1)"
                },
                { 
                  bg: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)", 
                  border: "#00f2fe", 
                  icon: "#00f2fe",
                  light: "rgba(79, 172, 254, 0.1)"
                },
                { 
                  bg: "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)", 
                  border: "#38f9d7", 
                  icon: "#38f9d7",
                  light: "rgba(67, 233, 123, 0.1)"
                },
              ];
              const colors = tierColors[index];
              const isSelected = selectedTier === index;
              
              return (
                <div
                  key={index}
                  onClick={() => setSelectedTier(index)}
                  className={`membership-tier-card ${isSelected ? "selected" : ""} ${tier.popular ? "popular" : ""}`}
                  style={{
                    background: isSelected ? colors.bg : "#ffffff",
                    borderColor: isSelected ? colors.border : "#e5e7eb",
                    color: isSelected ? "#ffffff" : "#111827",
                  }}
                >
                  {tier.popular && (
                    <div className="popular-badge">
                      <span>Most Popular</span>
                    </div>
                  )}
                  
                  <div className="membership-tier-header">
                    <div 
                      className="membership-tier-icon"
                      style={{ 
                        background: isSelected ? "rgba(255, 255, 255, 0.2)" : colors.bg,
                        color: isSelected ? "#ffffff" : "#ffffff"
                      }}
                    >
                      {index === 0 && "👑"}
                      {index === 1 && "💎"}
                      {index === 2 && "⭐"}
                      {index === 3 && "✨"}
                    </div>
                    <div className="membership-tier-title">
                      <h3 className="membership-tier-name">{tier.name}</h3>
                      <p className="membership-tier-subtitle">Membership</p>
                    </div>
                  </div>
                  
                  <div className="membership-tier-content">
                    <p className="membership-tier-description" style={{ color: isSelected ? "rgba(255, 255, 255, 0.95)" : "#4b5563" }}>
                      {tier.description}
                    </p>
                    
                    <div className="membership-features">
                      <h4 className="features-title" style={{ color: isSelected ? "#ffffff" : "#111827" }}>
                        Key Features:
                      </h4>
                      <ul className="features-list">
                        {tier.features.map((feature, featureIndex) => (
                          <li 
                            key={featureIndex}
                            style={{ color: isSelected ? "rgba(255, 255, 255, 0.9)" : "#4b5563" }}
                          >
                            <svg className="feature-check-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ color: isSelected ? "#ffffff" : colors.border }}>
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  
                  {isSelected && (
                    <div className="membership-tier-badge">
                      <svg className="badge-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Selected</span>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section interactive-section" style={{ background: "var(--gray-50)" }}>
        <div className="container">
          <h2 className="section-title animate-on-scroll">Frequently Asked Questions</h2>
          <p className="section-subtitle animate-on-scroll">
            Everything you need to know about becoming a Ganimi Partner
          </p>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="card faq-card animate-on-scroll" style={{ animationDelay: `${index * 0.1}s` }}>
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full text-left flex justify-between items-center"
                  style={{ color: "#111827" }}
                >
                  <h3 className="font-semibold text-lg">{faq.question}</h3>
                  <svg
                    className={`w-5 h-5 transition-transform ${
                      openFaq === index ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    style={{ color: "#0086c3" }}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                {openFaq === index && (
                  <p className="mt-4" style={{ color: "#4b5563" }}>{faq.answer}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  );
}
