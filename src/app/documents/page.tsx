"use client";

import { useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function DocumentsPage() {
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

  const documents = [
    {
      title: "Partnership Agreement",
      description: "Official partnership agreement document outlining terms and conditions",
      type: "PDF",
      size: "2.5 MB",
      icon: "M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
    },
    {
      title: "Vendor Guidelines",
      description: "Comprehensive guidelines for vendors on platform usage and best practices",
      type: "PDF",
      size: "1.8 MB",
      icon: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
    },
    {
      title: "Branding Guidelines",
      description: "Brand guidelines and logo usage policies for partners",
      type: "PDF",
      size: "3.2 MB",
      icon: "M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
    },
    {
      title: "API Documentation",
      description: "Technical documentation for API integration and development",
      type: "PDF",
      size: "4.1 MB",
      icon: "M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
    },
  ];

  return (
    <main className="min-h-screen">
      <Navbar />
      
      <section className="section interactive-section" style={{ paddingTop: "6rem" }}>
        <div className="container">
          <h1 className="section-title animate-on-scroll">
            Documents & <span className="gradient-text">Resources</span>
          </h1>
          <p className="section-subtitle animate-on-scroll">
            Access important documents and resources for partners
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {documents.map((doc, index) => (
              <div key={index} className="card document-card animate-on-scroll" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="document-icon">
                  <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={doc.icon} />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2" style={{ color: "#111827" }}>{doc.title}</h3>
                <p className="text-gray-600 mb-4" style={{ color: "#4b5563" }}>{doc.description}</p>
                <div className="document-meta">
                  <span className="document-type">{doc.type}</span>
                  <span className="document-size">{doc.size}</span>
                </div>
                <button className="btn btn-primary mt-4 w-full">
                  Download
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  );
}

