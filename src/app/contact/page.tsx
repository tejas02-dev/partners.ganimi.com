"use client";

import { useState } from "react";
import Link from "next/link";

export default function ContactPage() {
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
    await new Promise((resolve) => setTimeout(resolve, 1000));

    setIsSubmitted(true);
    setIsLoading(false);
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
  };

  return (
    <main className="min-h-screen flex flex-col">
      {/* Navigation */}
      <nav className="w-full px-6 py-6 animate-fade-in">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link href="/home" className="flex items-center gap-3">
            <span className="text-xl font-semibold tracking-tight">
              Ganimi <span className="text-[var(--muted)]">Partners</span>
            </span>
          </Link>
          <div className="flex items-center gap-6">
            <Link
              href="/home"
              className="text-sm font-medium text-[var(--muted)] hover:text-[var(--aqua)] transition-colors"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="text-sm font-medium text-[var(--muted)] hover:text-[var(--aqua)] transition-colors"
            >
              About Us
            </Link>
            <Link
              href="/contact"
              className="text-sm font-medium text-[var(--foreground)] hover:text-[var(--aqua)] transition-colors"
            >
              Contact
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="flex-1 flex items-center justify-center px-6 py-12 md:py-16">
        <div className="max-w-4xl mx-auto w-full">
          <div className="text-center mb-12 opacity-0 animate-fade-in-up">
            <h1
              className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4"
              style={{ fontFamily: "var(--font-bricolage)" }}
            >
              Become a <span className="text-gradient">Vendor Partner</span>
            </h1>
            <p className="text-lg text-[var(--muted)] max-w-2xl mx-auto">
              Fill out the form below to join our partner network and start growing your business
            </p>
          </div>

          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="glow-card rounded-3xl p-8 md:p-12 opacity-0 animate-fade-in-up delay-100">
              <div className="grid md:grid-cols-2 gap-6">
                {/* Vendor Name */}
                <div className="md:col-span-2">
                  <label htmlFor="vendorName" className="block text-sm font-semibold mb-2 text-[var(--foreground)]">
                    Vendor Name <span className="text-[var(--aqua)]">*</span>
                  </label>
                  <input
                    type="text"
                    id="vendorName"
                    name="vendorName"
                    value={formData.vendorName}
                    onChange={handleChange}
                    required
                    className="input-aqua w-full px-5 py-4 rounded-xl text-base"
                    placeholder="Enter your vendor/business name"
                  />
                </div>

                {/* Vendor Category */}
                <div>
                  <label htmlFor="vendorCategory" className="block text-sm font-semibold mb-2 text-[var(--foreground)]">
                    Vendor Category <span className="text-[var(--aqua)]">*</span>
                  </label>
                  <select
                    id="vendorCategory"
                    name="vendorCategory"
                    value={formData.vendorCategory}
                    onChange={handleChange}
                    required
                    className="input-aqua w-full px-5 py-4 rounded-xl text-base"
                  >
                    <option value="">Select category</option>
                    <option value="academics">Academics</option>
                    <option value="sports">Sports</option>
                    <option value="arts">Arts & Music</option>
                    <option value="dance">Dance</option>
                    <option value="technology">Technology & Coding</option>
                    <option value="language">Language Learning</option>
                    <option value="life-skills">Life Skills</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                {/* Contact Person */}
                <div>
                  <label htmlFor="contactPerson" className="block text-sm font-semibold mb-2 text-[var(--foreground)]">
                    Contact Person <span className="text-[var(--aqua)]">*</span>
                  </label>
                  <input
                    type="text"
                    id="contactPerson"
                    name="contactPerson"
                    value={formData.contactPerson}
                    onChange={handleChange}
                    required
                    className="input-aqua w-full px-5 py-4 rounded-xl text-base"
                    placeholder="Full name"
                  />
                </div>

                {/* Phone Number */}
                <div>
                  <label htmlFor="phoneNumber" className="block text-sm font-semibold mb-2 text-[var(--foreground)]">
                    Phone Number <span className="text-[var(--aqua)]">*</span>
                  </label>
                  <input
                    type="tel"
                    id="phoneNumber"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    required
                    className="input-aqua w-full px-5 py-4 rounded-xl text-base"
                    placeholder="+91 1234567890"
                  />
                </div>

                {/* Email Address */}
                <div>
                  <label htmlFor="emailAddress" className="block text-sm font-semibold mb-2 text-[var(--foreground)]">
                    Email Address <span className="text-[var(--aqua)]">*</span>
                  </label>
                  <input
                    type="email"
                    id="emailAddress"
                    name="emailAddress"
                    value={formData.emailAddress}
                    onChange={handleChange}
                    required
                    className="input-aqua w-full px-5 py-4 rounded-xl text-base"
                    placeholder="your@email.com"
                  />
                </div>

                {/* Business Address */}
                <div className="md:col-span-2">
                  <label htmlFor="businessAddress" className="block text-sm font-semibold mb-2 text-[var(--foreground)]">
                    Business Address <span className="text-[var(--aqua)]">*</span>
                  </label>
                  <textarea
                    id="businessAddress"
                    name="businessAddress"
                    value={formData.businessAddress}
                    onChange={handleChange}
                    required
                    rows={3}
                    className="input-aqua w-full px-5 py-4 rounded-xl text-base resize-none"
                    placeholder="Enter your complete business address"
                  />
                </div>

                {/* Programs Offered */}
                <div className="md:col-span-2">
                  <label htmlFor="programsOffered" className="block text-sm font-semibold mb-2 text-[var(--foreground)]">
                    Programs Offered <span className="text-[var(--aqua)]">*</span>
                  </label>
                  <textarea
                    id="programsOffered"
                    name="programsOffered"
                    value={formData.programsOffered}
                    onChange={handleChange}
                    required
                    rows={3}
                    className="input-aqua w-full px-5 py-4 rounded-xl text-base resize-none"
                    placeholder="List all programs, courses, or services you offer"
                  />
                </div>

                {/* Target Age Group */}
                <div>
                  <label htmlFor="targetAgeGroup" className="block text-sm font-semibold mb-2 text-[var(--foreground)]">
                    Target Age Group <span className="text-[var(--aqua)]">*</span>
                  </label>
                  <select
                    id="targetAgeGroup"
                    name="targetAgeGroup"
                    value={formData.targetAgeGroup}
                    onChange={handleChange}
                    required
                    className="input-aqua w-full px-5 py-4 rounded-xl text-base"
                  >
                    <option value="">Select age group</option>
                    <option value="3-6">3-6 years (Preschool)</option>
                    <option value="6-10">6-10 years (Primary)</option>
                    <option value="10-14">10-14 years (Middle School)</option>
                    <option value="14-18">14-18 years (High School)</option>
                    <option value="all">All Ages</option>
                    <option value="custom">Custom Range</option>
                  </select>
                </div>

                {/* Website / Social Media */}
                <div>
                  <label htmlFor="websiteSocialMedia" className="block text-sm font-semibold mb-2 text-[var(--foreground)]">
                    Website / Social Media
                  </label>
                  <input
                    type="url"
                    id="websiteSocialMedia"
                    name="websiteSocialMedia"
                    value={formData.websiteSocialMedia}
                    onChange={handleChange}
                    className="input-aqua w-full px-5 py-4 rounded-xl text-base"
                    placeholder="https://yourwebsite.com or social media links"
                  />
                </div>

                {/* Years of Experience */}
                <div>
                  <label htmlFor="yearsOfExperience" className="block text-sm font-semibold mb-2 text-[var(--foreground)]">
                    Years of Experience <span className="text-[var(--aqua)]">*</span>
                  </label>
                  <input
                    type="number"
                    id="yearsOfExperience"
                    name="yearsOfExperience"
                    value={formData.yearsOfExperience}
                    onChange={handleChange}
                    required
                    min="0"
                    className="input-aqua w-full px-5 py-4 rounded-xl text-base"
                    placeholder="e.g., 5"
                  />
                </div>

                {/* Preferred Event Participation */}
                <div>
                  <label htmlFor="preferredEventParticipation" className="block text-sm font-semibold mb-2 text-[var(--foreground)]">
                    Preferred Event Participation
                  </label>
                  <select
                    id="preferredEventParticipation"
                    name="preferredEventParticipation"
                    value={formData.preferredEventParticipation}
                    onChange={handleChange}
                    className="input-aqua w-full px-5 py-4 rounded-xl text-base"
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
                  className="btn-aqua px-8 py-4 rounded-xl text-base font-semibold whitespace-nowrap disabled:opacity-70 disabled:cursor-not-allowed"
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
            <div className="glow-card rounded-3xl p-8 md:p-12 text-center opacity-0 animate-fade-in-up">
              <div className="w-16 h-16 rounded-full bg-[var(--aqua)]/20 flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-[var(--aqua)]"
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
              <p className="text-lg text-[var(--muted)] mb-6">
                Thank you for your interest in becoming a Ganimi Vendor Partner. Our team will review your application and contact you soon.
              </p>
              <button
                onClick={() => setIsSubmitted(false)}
                className="btn-aqua px-6 py-3 rounded-xl text-base font-semibold"
              >
                Submit Another Application
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 py-8 border-t border-[var(--aqua)]/10">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-[var(--muted)]">
          <p>© 2025 Ganimi Partners. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="/home" className="hover:text-[var(--aqua)] transition-colors">
              Home
            </Link>
            <Link href="/about" className="hover:text-[var(--aqua)] transition-colors">
              About Us
            </Link>
            <Link href="/contact" className="hover:text-[var(--aqua)] transition-colors">
              Contact
            </Link>
            <a href="#" className="hover:text-[var(--aqua)] transition-colors">
              Privacy
            </a>
            <a href="#" className="hover:text-[var(--aqua)] transition-colors">
              Terms
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
