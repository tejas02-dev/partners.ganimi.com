"use client";

import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function ContactPage() {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px"
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    }, observerOptions);

    // Small delay to ensure DOM is ready
    setTimeout(() => {
      const elements = document.querySelectorAll(".animate-on-scroll");
      elements.forEach((el) => {
        // Check if element is already in viewport
        const rect = el.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight && rect.bottom > 0;
        if (isVisible) {
          el.classList.add("visible");
        } else {
          observer.observe(el);
        }
      });
    }, 100);

    return () => {
      const elements = document.querySelectorAll(".animate-on-scroll");
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);
  const [formData, setFormData] = useState({
    vendorName: "",
    vendorCategory: "",
    contactPerson: "",
    phoneNumber: "",
    emailAddress: "",
    businessAddress: "",
    programsOffered: "",
    targetAgeGroup: "",
    websiteSocialMedia: "",
    yearsOfExperience: "",
    preferredEventParticipation: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate API call
    const response = await fetch('https://ganimi.app/api/waitlist/vendor-interest', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
    if (response.status === 200) {
      setIsSubmitted(true);
      setFormData({
        vendorName: "",
        vendorCategory: "",
        contactPerson: "",
        phoneNumber: "",
        emailAddress: "",
        businessAddress: "",
        programsOffered: "",
        targetAgeGroup: "",
        websiteSocialMedia: "",
        yearsOfExperience: "",
        preferredEventParticipation: "",
      });
    }
    setIsLoading(false);
  };

  return (
    <main className="min-h-screen flex flex-col" style={{ paddingTop: "80px" }}>
      <Navbar />

      {/* Hero Section */}
      <section className="section flex items-center justify-center">
        <div className="container max-w-4xl">
          <div className="text-center mb-12 animate-on-scroll">
            <h1 className="section-title">
              Become a <span className="gradient-text">Vendor Partner</span>
            </h1>
            <p className="section-subtitle">
              Fill out the form below to join our partner network and start growing your business
            </p>
          </div>

          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="card p-8 md:p-12 animate-on-scroll">
              <div className="grid md:grid-cols-2 gap-6">
                {/* Vendor Name */}
                <div className="md:col-span-2">
                  <label htmlFor="vendorName" className="block text-sm font-semibold mb-2 text-[var(--gray-800)]">
                    Vendor Name <span className="text-[var(--primary-blue)]">*</span>
                  </label>
                  <input
                    type="text"
                    id="vendorName"
                    name="vendorName"
                    value={formData.vendorName}
                    onChange={handleChange}
                    required
                    className="w-full px-5 py-4 rounded-xl text-base border border-[var(--gray-300)] focus:border-[var(--primary-blue)] focus:outline-none focus:ring-2 focus:ring-[var(--primary-blue)]/20 transition-colors"
                    placeholder="Enter your vendor/business name"
                  />
                </div>

                {/* Vendor Category */}
                <div>
                  <label htmlFor="vendorCategory" className="block text-sm font-semibold mb-2 text-[var(--gray-800)]">
                    Vendor Category <span className="text-[var(--primary-blue)]">*</span>
                  </label>
                  <select
                    id="vendorCategory"
                    name="vendorCategory"
                    value={formData.vendorCategory}
                    onChange={handleChange}
                    required
                    className="w-full px-5 py-4 rounded-xl text-base border border-[var(--gray-300)] focus:border-[var(--primary-blue)] focus:outline-none focus:ring-2 focus:ring-[var(--primary-blue)]/20 transition-colors"
                  >
                    <option value="">Select category</option>
                    <option value="computer-skills">Computer Skills</option>
                    <option value="adventure">Adventure</option>
                    <option value="academics">Academics</option>
                    <option value="performing-arts">Performing Arts</option>
                    <option value="sports">Sports</option>
                    <option value="necessary-life-skills">Necessary Life Skills</option>
                  </select>
                </div>

                {/* Contact Person */}
                <div>
                  <label htmlFor="contactPerson" className="block text-sm font-semibold mb-2 text-[var(--gray-800)]">
                    Contact Person <span className="text-[var(--primary-blue)]">*</span>
                  </label>
                  <input
                    type="text"
                    id="contactPerson"
                    name="contactPerson"
                    value={formData.contactPerson}
                    onChange={handleChange}
                    required
                    className="w-full px-5 py-4 rounded-xl text-base border border-[var(--gray-300)] focus:border-[var(--primary-blue)] focus:outline-none focus:ring-2 focus:ring-[var(--primary-blue)]/20 transition-colors"
                    placeholder="Full name"
                  />
                </div>

                {/* Phone Number */}
                <div>
                  <label htmlFor="phoneNumber" className="block text-sm font-semibold mb-2 text-[var(--gray-800)]">
                    Phone Number <span className="text-[var(--primary-blue)]">*</span>
                  </label>
                  <input
                    type="number"
                    id="phoneNumber"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    required
                    className="w-full px-5 py-4 rounded-xl text-base border border-[var(--gray-300)] focus:border-[var(--primary-blue)] focus:outline-none focus:ring-2 focus:ring-[var(--primary-blue)]/20 transition-colors"
                    placeholder="+91 1234567890"
                  />
                </div>

                {/* Email Address */}
                <div>
                  <label htmlFor="emailAddress" className="block text-sm font-semibold mb-2 text-[var(--gray-800)]">
                    Email Address <span className="text-[var(--primary-blue)]">*</span>
                  </label>
                  <input
                    type="email"
                    id="emailAddress"
                    name="emailAddress"
                    value={formData.emailAddress}
                    onChange={handleChange}
                    required
                    className="w-full px-5 py-4 rounded-xl text-base border border-[var(--gray-300)] focus:border-[var(--primary-blue)] focus:outline-none focus:ring-2 focus:ring-[var(--primary-blue)]/20 transition-colors"
                    placeholder="your@email.com"
                  />
                </div>

                {/* Business Address */}
                <div className="md:col-span-2">
                  <label htmlFor="businessAddress" className="block text-sm font-semibold mb-2 text-[var(--gray-800)]">
                    Business Address <span className="text-[var(--primary-blue)]">*</span>
                  </label>
                  <textarea
                    id="businessAddress"
                    name="businessAddress"
                    value={formData.businessAddress}
                    onChange={handleChange}
                    required
                    rows={3}
                    className="w-full px-5 py-4 rounded-xl text-base resize-none border border-[var(--gray-300)] focus:border-[var(--primary-blue)] focus:outline-none focus:ring-2 focus:ring-[var(--primary-blue)]/20 transition-colors"
                    placeholder="Enter your complete business address"
                  />
                </div>

                {/* Programs Offered */}
                <div className="md:col-span-2">
                  <label htmlFor="programsOffered" className="block text-sm font-semibold mb-2 text-[var(--gray-800)]">
                    Programs Offered <span className="text-[var(--primary-blue)]">*</span>
                  </label>
                  <textarea
                    id="programsOffered"
                    name="programsOffered"
                    value={formData.programsOffered}
                    onChange={handleChange}
                    required
                    rows={3}
                    className="w-full px-5 py-4 rounded-xl text-base resize-none border border-[var(--gray-300)] focus:border-[var(--primary-blue)] focus:outline-none focus:ring-2 focus:ring-[var(--primary-blue)]/20 transition-colors"
                    placeholder="List all programs, courses, or services you offer"
                  />
                </div>

                {/* Target Age Group */}
                <div>
                  <label htmlFor="targetAgeGroup" className="block text-sm font-semibold mb-2 text-[var(--gray-800)]">
                    Target Age Group <span className="text-[var(--primary-blue)]">*</span>
                  </label>
                  <select
                    id="targetAgeGroup"
                    name="targetAgeGroup"
                    value={formData.targetAgeGroup}
                    onChange={handleChange}
                    required
                    className="w-full px-5 py-4 rounded-xl text-base border border-[var(--gray-300)] focus:border-[var(--primary-blue)] focus:outline-none focus:ring-2 focus:ring-[var(--primary-blue)]/20 transition-colors"
                  >
                    <option value="">Select age group</option>
                    <option value="3-6">3-6 years (Preschool)</option>
                    <option value="6-10">6-10 years (Primary)</option>
                    <option value="10-14">10-14 years (Middle School)</option>
                    <option value="14-18">14-18 years (High School)</option>
                    <option value="all">All Ages</option>
                  </select>
                </div>

                {/* Website / Social Media */}
                <div>
                  <label htmlFor="websiteSocialMedia" className="block text-sm font-semibold mb-2 text-[var(--gray-800)]">
                    Website / Social Media
                  </label>
                  <input
                    type="url"
                    id="websiteSocialMedia"
                    name="websiteSocialMedia"
                    value={formData.websiteSocialMedia}
                    onChange={handleChange}
                    className="w-full px-5 py-4 rounded-xl text-base border border-[var(--gray-300)] focus:border-[var(--primary-blue)] focus:outline-none focus:ring-2 focus:ring-[var(--primary-blue)]/20 transition-colors"
                    placeholder="https://yourwebsite.com or social media links"
                  />
                </div>

                {/* Years of Experience */}
                <div>
                  <label htmlFor="yearsOfExperience" className="block text-sm font-semibold mb-2 text-[var(--gray-800)]">
                    Years of Experience <span className="text-[var(--primary-blue)]">*</span>
                  </label>
                  <input
                    type="number"
                    id="yearsOfExperience"
                    name="yearsOfExperience"
                    value={formData.yearsOfExperience}
                    onChange={handleChange}
                    required
                    min="0"
                    className="w-full px-5 py-4 rounded-xl text-base border border-[var(--gray-300)] focus:border-[var(--primary-blue)] focus:outline-none focus:ring-2 focus:ring-[var(--primary-blue)]/20 transition-colors"
                    placeholder="e.g., 5"
                  />
                </div>

                {/* Preferred Event Participation */}
                <div>
                  <label htmlFor="preferredEventParticipation" className="block text-sm font-semibold mb-2 text-[var(--gray-800)]">
                    Preferred Event Participation
                  </label>
                  <select
                    id="preferredEventParticipation"
                    name="preferredEventParticipation"
                    value={formData.preferredEventParticipation}
                    onChange={handleChange}
                    className="w-full px-5 py-4 rounded-xl text-base border border-[var(--gray-300)] focus:border-[var(--primary-blue)] focus:outline-none focus:ring-2 focus:ring-[var(--primary-blue)]/20 transition-colors"
                  >
                    <option value="">Select preference</option>
                    <option value="exhibitions">Student Exhibitions</option>
                    <option value="conferences">Parenting Conferences</option>
                    <option value="workshops">Workshops & Seminars</option>
                    <option value="competitions">Competitions</option>
                    <option value="all">All Events</option>
                    <option value="none">Not Interested</option>
                  </select>
                </div>
              </div>

              <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-end">
                <button
                  type="submit"
                  disabled={isLoading}
                  className="btn btn-primary px-8 py-4 rounded-xl text-base font-semibold whitespace-nowrap disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isLoading ? (
                    <span className="flex items-center gap-2">
                      <svg className="animate-spin w-5 h-5" viewBox="0 0 24 24">
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                          fill="none"
                        />
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        />
                      </svg>
                      Submitting...
                    </span>
                  ) : (
                    "Submit Application"
                  )}
                </button>
              </div>
            </form>
          ) : (
            <div className="card p-8 md:p-12 text-center animate-on-scroll">
              <div className="w-16 h-16 rounded-full bg-[var(--primary-blue)]/20 flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-[var(--primary-blue)]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Application Submitted!</h2>
              <p className="text-lg text-[var(--gray-600)] mb-6">
                Thank you for your interest in becoming a Ganimi Vendor Partner. Our team will review your application and contact you soon.
              </p>
              <button
                onClick={() => setIsSubmitted(false)}
                className="btn btn-primary px-6 py-3 rounded-xl text-base font-semibold"
              >
                Submit Another Application
              </button>
            </div>
          )}

          {/* Contact Information */}
          <div className="max-w-4xl mx-auto mt-12 animate-on-scroll">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-[var(--gray-800)] mb-2">Get in Touch</h2>
              <p className="text-[var(--gray-600)]">You can also reach us directly through</p>
            </div>
            
            <div className="flex justify-center max-w-3xl mx-auto">
              {/* Email */}
              <div className="card p-6 flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-[var(--primary-blue)]/10 flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-[var(--primary-blue)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-[var(--gray-600)] mb-1">Email Address</p>
                  <a href="mailto:sales@ganimi.com" className="text-lg font-semibold text-[var(--primary-blue)] hover:underline">
                    sales@ganimi.com
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
