"use client";

import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function MembershipPage() {
  const [selectedTier, setSelectedTier] = useState<number>(0);

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
      
      {/* Membership Tiers Section */}
      <section className="section interactive-section membership-section" style={{ paddingTop: "6rem" }}>
        <div className="container">
          <h1 className="section-title animate-on-scroll">
            Membership <span className="gradient-text">Tiers</span>
          </h1>
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
      
      <Footer />
    </main>
  );
}

