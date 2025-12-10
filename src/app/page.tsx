"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default function HomePage() {
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

  return (
    <main className="min-h-screen">
      <Navbar />
      
      {/* Intro Section - Success and Satisfaction */}
      <section className="intro-hero-section">
        {/* Background Images */}
        <div className="intro-backdrop-images">
          <Image
            src="/success.png"
            alt="Success"
            width={600}
            height={800}
            className="intro-backdrop-image intro-backdrop-success"
          />
          <Image
            src="/satisfaction.png"
            alt="Satisfaction"
            width={600}
            height={800}
            className="intro-backdrop-image intro-backdrop-satisfaction"
          />
        </div>
        
        <div className="intro-hero-container">
          <div className="intro-hero-content">
            {/* Title */}
            <h1 className="intro-title">
              Life is all about <span className="intro-title-highlight">Success</span> and <span className="intro-title-highlight">Satisfaction</span>!
            </h1>
            
            {/* Large Company Logo */}
            <div className="intro-logo-wrapper">
              <Image
                src="/logo-white.png"
                alt="Ganimi Logo"
                width={300}
                height={300}
                className="intro-logo"
                priority
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-background">
          <div className="hero-overlay"></div>
          <div className="hero-pattern"></div>
        </div>
        
        <div className="hero-container">
          <div className="hero-content">
            <div className="hero-left">
              <div className="hero-text">
                {/* Event Badge */}
                <div className="event-badge">
                  <span>Vendor Partnership Program</span>
                </div>
                
                <h1 className="hero-title">
                  <span className="gradient-text">Business Opportunities</span>
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

      {/* Section 1: What Do Vendor Partners Get */}
      <section id="vendor-benefits" className="section interactive-section">
        <div className="container">
          <h2 className="section-title animate-on-scroll">
            What Do Vendor <span className="gradient-text">Partners Get</span>
          </h2>
          <p className="section-subtitle animate-on-scroll">
            Tangible Benefits & Growth - Our platform is designed to drive significant, measurable growth and streamline your operations, providing a long-term sustainable business model.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { 
                title: "2x–3x Admission and Business Growth", 
                desc: "Achieve substantial increases in your enrollment and overall revenue.",
                icon: "M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
              },
              { 
                title: "Long-Term Sustainable Business", 
                desc: "Partner with a 10-15 year business model designed for consistent success.",
                icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              },
              { 
                title: "AI-Integrated Tech Platform / App", 
                desc: "Access a state-of-the-art platform for superior service delivery and business management.",
                icon: "M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              },
              { 
                title: "Systematic & Easy Administration", 
                desc: "Utilize an ERP-Based Data Management system for easy, efficient, and precise administration.",
                icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
              },
              { 
                title: "Direct Stakeholder Connect", 
                desc: "Connect directly with students and parents (stakeholders) through the platform.",
                icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
              },
              { 
                title: "Detailed Reports & Insights", 
                desc: "Receive comprehensive reports on performance, engagement, and business metrics.",
                icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
              },
              { 
                title: "Access to Important Resources", 
                desc: "Gain access to specialized tools and resources to support your service/product delivery.",
                icon: "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
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

      {/* Section 2: Exclusive Offers for New Vendor Partners */}
      <section id="offers" className="section interactive-section offers-section" style={{ background: "var(--gray-50)" }}>
        <div className="container">
          <h2 className="section-title animate-on-scroll">
            Exclusive Offers for <span className="gradient-text">New Vendor Partners</span>
          </h2>
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
            {[
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
            ].map((tier, index) => {
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

      {/* Section 3: Why Partner With Us */}
      <section id="why-choose-us" className="section interactive-section">
        <div className="container">
          <h2 className="section-title animate-on-scroll">
            Why Partner <span className="gradient-text">With Us</span>
          </h2>
          <p className="section-subtitle animate-on-scroll">
            Choose us for a powerful combination of technology, unparalleled market reach, and community focus.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { 
                title: "AI-Integrated Tech Platform", 
                desc: "Our cutting-edge technology provides a unique competitive advantage in the market.",
                icon: "M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
                gradient: "from-blue-500 to-blue-600"
              },
              { 
                title: "Guaranteed Business Growth", 
                desc: "We commit to helping you achieve 2x–3x business growth.",
                icon: "M13 7h8m0 0v8m0-8l-8 8-4-4-6 6",
                gradient: "from-green-500 to-green-600"
              },
              { 
                title: "Brand Promotion Across the Platform", 
                desc: "We actively feature and promote your brand to our vast audience of students and parents.",
                icon: "M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z",
                gradient: "from-pink-500 to-pink-600"
              },
              { 
                title: "National-Level Exposure", 
                desc: "Gain visibility and exposure on a state and national level.",
                icon: "M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
                gradient: "from-purple-500 to-purple-600"
              },
              { 
                title: "Networking with Same-Domain Vendors", 
                desc: "Connect with other experts in your field for collaborative opportunities.",
                icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z",
                gradient: "from-teal-500 to-teal-600"
              },
            ].map((item, index) => (
              <div
                key={index}
                className="why-choose-card card animate-on-scroll"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <div className="why-choose-icon-wrapper">
                  <div className={`why-choose-icon bg-gradient-to-br ${item.gradient}`}>
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={item.icon} />
                    </svg>
                  </div>
                </div>
                <h3 className="why-choose-title">{item.title}</h3>
                <p className="why-choose-desc">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4: Collaborative and Promotional Activities */}
      <section id="collaboration" className="section interactive-section" style={{ background: "var(--gray-50)" }}>
        <div className="container">
          <h2 className="section-title animate-on-scroll">
            Collaborative and <span className="gradient-text">Promotional Activities</span>
          </h2>
          <p className="section-subtitle animate-on-scroll">
            We partner with you to educate the market, promote your services, and create high-value engagement.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { 
                title: "Cross-Platform Marketing Campaigns", 
                desc: "We will execute strategic Cross-Platform Marketing Campaigns to promote your services to the right audience.",
                icon: "M8 7h12m0 0l-4-4m4 4l-4 4m0 6h-12m0 0l4 4m-4-4l4-4",
                gradient: "from-orange-500 to-orange-600"
              },
              { 
                title: "Service / Product Promotion", 
                desc: "Dedicated promotion of your specific services and products across our channels.",
                icon: "M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12",
                gradient: "from-cyan-500 to-cyan-600"
              },
              { 
                title: "Collaboration with Multiple Stakeholders & Institutes", 
                desc: "Participate in joint ventures with educational institutes and other key organizations.",
                icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4",
                gradient: "from-indigo-500 to-indigo-600"
              },
              { 
                title: "Training Workshops", 
                desc: "Lead or attend specialized training workshops.",
                icon: "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253",
                gradient: "from-emerald-500 to-emerald-600"
              },
              { 
                title: "Domain-Based Connectivity with Experts", 
                desc: "Direct connection and engagement with leading experts in the sports and development domain.",
                icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z",
                gradient: "from-violet-500 to-violet-600"
              },
              { 
                title: "Participation in Competitions & Events", 
                desc: "Co-host and participate in District / State / National Competitions.",
                icon: "M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z",
                gradient: "from-rose-500 to-rose-600"
              },
              { 
                title: "Access to Marketing Events and National-Level Expos", 
                desc: "Direct student and parent interaction at marketing events and national-level expos.",
                icon: "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z",
                gradient: "from-yellow-500 to-yellow-600"
              },
              { 
                title: "Educating the Market", 
                desc: "Collaborative content creation and initiatives to educate the market on sports & development trends.",
                icon: "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253",
                gradient: "from-red-500 to-red-600"
              },
            ].map((item, index) => (
              <div
                key={index}
                className="collaboration-card card animate-on-scroll"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <div className="collaboration-card-header">
                  <div className={`collaboration-icon-wrapper bg-gradient-to-br ${item.gradient}`}>
                    <svg className="collaboration-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={item.icon} />
                    </svg>
                  </div>
                  <h3 className="collaboration-title">{item.title}</h3>
                </div>
                <p className="collaboration-desc">{item.desc}</p>
                <div className="collaboration-footer">
                  <svg className="collaboration-arrow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
