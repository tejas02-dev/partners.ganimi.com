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
                <h2 className="app-details-title">Download Mobile App</h2>
                <p className="app-details-description">
                  Access your vendor dashboard, manage listings, view analytics, and connect with parents 
                  all from your mobile device. Available for both iOS and Android platforms.
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
                    href="#" 
                    className="download-btn download-btn-apple"
                    aria-label="Download on App Store"
                  >
                    <svg className="download-icon" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17.05 20.28c-.98.95-2.05.88-3.08.4-1.09-.5-2.08-.48-3.24 0-1.44.62-2.2.44-3.06-.4C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
                    </svg>
                    <div className="download-btn-text">
                      <span className="download-btn-label">Download on the</span>
                      <span className="download-btn-name">App Store</span>
                    </div>
                  </a>
                  
                  <a 
                    href="#" 
                    className="download-btn download-btn-google"
                    aria-label="Get it on Google Play"
                  >
                    <svg className="download-icon" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
                    </svg>
                    <div className="download-btn-text">
                      <span className="download-btn-label">Get it on</span>
                      <span className="download-btn-name">Google Play</span>
                    </div>
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

