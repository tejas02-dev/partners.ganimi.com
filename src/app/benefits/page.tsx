"use client";

import { useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function BenefitsPage() {
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
      
      {/* What Do Vendor Partners Get Section */}
      <section id="vendor-benefits" className="section interactive-section" style={{ paddingTop: "6rem" }}>
        <div className="container">
          <h1 className="section-title animate-on-scroll">
            What Do Vendor <span className="gradient-text">Partners Get</span>
          </h1>
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
      
      <Footer />
    </main>
  );
}
