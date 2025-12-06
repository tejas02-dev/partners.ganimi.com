"use client";

import { useEffect } from "react";
import Image from "next/image";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function DownloadsPage() {
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
      
      <section className="section interactive-section" style={{ paddingTop: "6rem" }}>
        <div className="container">
          <h1 className="section-title animate-on-scroll">
            Downloads & <span className="gradient-text">Mobile App</span>
          </h1>
          <p className="section-subtitle animate-on-scroll">
            Download our mobile app and access partner resources
          </p>

          <div className="downloads-content">
            {/* Mobile App Section */}
            <div className="download-app-section animate-on-scroll">
              <div className="app-preview">
                <div className="phone-mockup">
                  <div className="phone-screen">
                    <div className="app-content">
                      <div className="app-logo">
                        <Image
                          src="/logo-white.png"
                          alt="Ganimi App"
                          width={80}
                          height={80}
                          className="app-logo-img"
                        />
                      </div>
                      <h2 className="app-title">Ganimi Partners</h2>
                      <p className="app-subtitle">Manage your business on the go</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="app-details">
                <h2 className="app-details-title">Download Android App</h2>
                <p className="app-details-description">
                  Access your vendor dashboard, manage listings, view analytics, and connect with parents 
                  all from your Android mobile device.
                </p>
                
                <div className="app-features">
                  <div className="app-feature">
                    <svg className="feature-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Real-time notifications</span>
                  </div>
                  <div className="app-feature">
                    <svg className="feature-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Analytics dashboard</span>
                  </div>
                  <div className="app-feature">
                    <svg className="feature-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Easy listing management</span>
                  </div>
                  <div className="app-feature">
                    <svg className="feature-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Direct parent communication</span>
                  </div>
                </div>

                <div className="download-buttons">
                  <a 
                    href="/Ganimi_App_V_1.0.apk"
                    download="Ganimi_App_V_1.0.apk"
                    className="btn btn-primary download-app-btn"
                    aria-label="Download Android App"
                  >
                    <svg className="download-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ width: "24px", height: "24px", marginRight: "0.5rem" }}>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                    </svg>
                    Download Android App
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  );
}

