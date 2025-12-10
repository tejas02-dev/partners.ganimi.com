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
      title: "Ganimi MOU for Partners",
      description: "Official Memorandum of Understanding for Sustainable Business Partnership between Creepon Edutech Pvt. Ltd. (Brand: Ganimi) and Vendor/Service Providers",
      type: "PDF",
      file: "/Ganimi MOU for Partners.pdf",
      icon: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
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

          <div className="grid grid-cols-1 gap-6 max-w-2xl mx-auto">
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
                </div>
                <a 
                  href={doc.file} 
                  download="Ganimi MOU for Partners.pdf"
                  className="btn btn-primary mt-4 w-full"
                  style={{ display: "block", textAlign: "center", textDecoration: "none" }}
                >
                  Download
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  );
}

