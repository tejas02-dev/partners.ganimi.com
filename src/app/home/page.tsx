"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [selectedTier, setSelectedTier] = useState<number>(0);

  const offersForVendor = [
    "Free Subscription for 3 years",
    "Business Growth 2x to 3x",
    "Your Brand Promotion",
    "Your Service / Product Promotion",
    "Sustainable Business for 10 years",
    "Cross Platform Promotion",
    "Networking with Same domain",
    "Networking with Useful Resources",
    "Tech Platform",
    "AI Tech Platform",
    "Marketing Event Access",
    "Trainings",
    "Competition District/State/National Level",
    "National Level exposure",
    "Membership (cards)",
    "Same Domain Celebrity",
    "State National Player On Board for Branding",
  ];

  const benefitsToVendor = [
    "Hi Tech AI Integrated Platform",
    "Data Management with ERP",
    "Ease of admin",
    "Stakeholder Connect",
  ];

  const businessToVendor = [
    "Growth of admission 2x to 3x",
    "Systematic Admin",
    "Reports",
    "Business growth",
    "Revenue Growth",
    "Sustainable Business",
  ];

  const faqs = [
    {
      question: "What is Ganimi Partners?",
      answer: "Ganimi Partners is a platform connecting vendors and service providers with students and families seeking quality education and career development services. We offer comprehensive tools and resources to help vendors grow their business while making a meaningful impact.",
    },
    {
      question: "How do I become a partner?",
      answer: "You can join our partner network by signing up through our platform. We offer free subscription for 3 years to get you started. Simply fill out the registration form and our team will guide you through the onboarding process.",
    },
    {
      question: "What benefits do I get as a vendor?",
      answer: "As a vendor partner, you get access to our AI-integrated platform, ERP data management, marketing support, networking opportunities, training programs, and much more. You'll also benefit from business growth opportunities, brand promotion, and sustainable business development.",
    },
    {
      question: "Is there a subscription fee?",
      answer: "We offer free subscription for the first 3 years to our partner vendors. This includes access to all platform features, tools, and resources. After the initial period, we have flexible pricing plans tailored to your business needs.",
    },
    {
      question: "What kind of support do you provide?",
      answer: "We provide comprehensive support including technical assistance, marketing support, training programs, networking opportunities, and access to competitions at district, state, and national levels. Our team is dedicated to helping you succeed.",
    },
    {
      question: "How does the AI platform work?",
      answer: "Our AI-integrated platform helps you manage your business efficiently with automated data management, ERP integration, and intelligent tools that streamline administrative tasks. This allows you to focus on what matters most - growing your business.",
    },
  ];

  return (
    <main className="min-h-screen flex flex-col">
      {/* Navigation */}
      <nav className="w-full px-6 py-6 animate-fade-in bg-white">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link href="/home" className="flex items-center gap-3">
            <span className="text-xl font-semibold tracking-tight">
              Ganimi <span className="text-[var(--muted)]">Partners</span>
            </span>
          </Link>
          <div className="flex items-center gap-6">
            <Link
              href="/home"
              className="text-sm font-medium text-[var(--foreground)] hover:text-[var(--aqua)] transition-colors"
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
              className="text-sm font-medium text-[var(--muted)] hover:text-[var(--aqua)] transition-colors"
            >
              Contact
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative flex-1 flex items-center justify-center px-6 py-8 md:py-16 overflow-hidden bg-gradient-to-b from-[var(--aqua-dark)] via-[var(--aqua)] to-[var(--aqua-light)]">
        {/* Background decorative elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Diagonal lines pattern */}
          <div className="absolute inset-0 opacity-10" style={{
            backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(255,255,255,0.1) 10px, rgba(255,255,255,0.1) 20px)`
          }} />
          {/* Light aqua speckles/streaks */}
          <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-white/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-white/15 rounded-full blur-3xl animate-pulse delay-700" />
          <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-white/10 rounded-full blur-2xl animate-pulse delay-300" />
        </div>

        <div className="max-w-6xl mx-auto text-center relative z-10">
          {/* Logo */}
          <div className="mb-6 opacity-0 animate-fade-in-up">
            <div className="w-28 h-28 md:w-36 md:h-36 mx-auto flex items-center justify-center mb-4">
              <Image
                src="/logo-white.png"
                alt="Ganimi Logo"
                width={200}
                height={200}
                className="w-full h-full object-contain"
              />
            </div>
          </div>

          {/* Tagline */}
          <h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] mb-6 opacity-0 animate-fade-in-up delay-100 text-white"
            style={{ fontFamily: "var(--font-bricolage)" }}
          >
            Life is all about success and satisfaction
          </h1>

          <p className="text-xl sm:text-2xl text-blue-50 max-w-3xl mx-auto mb-10 opacity-0 animate-fade-in-up delay-200 leading-relaxed">
            An innovative digital ecosystem connecting parents and students with high-quality activity providers.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 opacity-0 animate-fade-in-up delay-300">
            <Link
              href="/contact"
              className="bg-white text-[var(--aqua-dark)] hover:bg-gray-50 px-8 py-4 rounded-xl text-lg font-semibold whitespace-nowrap w-full sm:w-auto transition-all shadow-lg hover:shadow-xl"
            >
              Become a Partner
            </Link>
            <Link
              href="/about"
              className="px-8 py-4 rounded-xl text-lg font-semibold bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 transition-all w-full sm:w-auto border border-white/30"
            >
              Learn More
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto opacity-0 animate-fade-in-up delay-400">
            {[
              { value: "3 Years", label: "Free Access" },
              { value: "2-3x", label: "Business Growth" },
              { value: "100%", label: "AI Powered" },
              { value: "24/7", label: "Support" },
            ].map((stat, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-4 hover:scale-105 transition-transform hover:bg-white/15"
              >
                <div className="text-2xl md:text-3xl font-bold text-white mb-1" style={{ fontFamily: "var(--font-bricolage)" }}>
                  {stat.value}
                </div>
                <div className="text-sm text-blue-100">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Benefits Section */}
      <section className="px-6 py-16 md:py-24">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 opacity-0 animate-fade-in-up">
            <h2
              className="text-3xl md:text-4xl font-bold mb-4"
              style={{ fontFamily: "var(--font-bricolage)" }}
            >
              Why Partner with <span className="text-gradient">Ganimi?</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Massive Visibility", desc: "Reach thousands of searching parents" },
              { title: "Smart Discovery", desc: "Found by age, location, and category filters" },
              { title: "Verified Badge", desc: "Enhanced brand credibility and trust" },
              { title: "Analytics Dashboard", desc: "Track parent interest and engagement" },
              { title: "Network Access", desc: "Connect with schools and educators" },
              { title: "Cost-Effective", desc: "Grow without heavy marketing spend" },
            ].map((benefit, index) => (
              <div
                key={index}
                className="glow-card rounded-xl p-6 opacity-0 animate-fade-in-up hover:scale-105 transition-transform"
                style={{ animationDelay: `${200 + index * 50}ms` }}
              >
                <h3 className="font-semibold text-lg mb-2 text-[var(--foreground)]">{benefit.title}</h3>
                <p className="text-sm text-[var(--muted)]">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Offers for Vendor Section */}
      <section className="px-6 py-16 md:py-24 bg-gradient-to-b from-transparent to-[var(--surface-light)]/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 opacity-0 animate-fade-in-up">
            <h2
              className="text-3xl md:text-4xl font-bold mb-4"
              style={{ fontFamily: "var(--font-bricolage)" }}
            >
              Offers for <span className="text-gradient">Vendor</span>
            </h2>
            <p className="text-[var(--muted)] max-w-2xl mx-auto">
              Comprehensive benefits designed to help your business thrive
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {offersForVendor.map((offer, index) => (
              <div
                key={index}
                className="glow-card rounded-xl p-6 opacity-0 animate-fade-in-up"
                style={{ animationDelay: `${300 + index * 50}ms` }}
              >
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-lg bg-[var(--aqua)]/10 flex items-center justify-center flex-shrink-0 mt-1">
                    <svg
                      className="w-5 h-5 text-[var(--aqua)]"
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
                  <p className="font-medium text-[var(--foreground)]">{offer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Exclusive Partnership Benefits Section */}
      <section className="px-6 py-16 md:py-24">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 opacity-0 animate-fade-in-up">
            <h2
              className="text-3xl md:text-4xl font-bold mb-4"
              style={{ fontFamily: "var(--font-bricolage)" }}
            >
              Exclusive Partnership <span className="text-gradient">Benefits</span>
            </h2>
            <p className="text-[var(--muted)] max-w-2xl mx-auto">
              Special advantages reserved for our valued vendor partners
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "1 Year free access to the full vendor dashboard including leads & analytics",
              "3 Years free access for the first 10 vendors in each activity category",
              "Featured visibility on the platform's home and category pages",
              "Recognition and stage felicitation at the Parenting Conference",
              "Dedicated vendor profile including photos, videos, timings, and reviews",
              "Participation opportunities in student exhibitions and school outreach events",
              "Brand promotion through Ganimi social media, newsletters, and campaigns",
              "Access to demographic analytics, interest hotspots, and age-group trends",
              "Opportunity to collaborate in regional and national skill-development events",
            ].map((benefit, index) => (
              <div
                key={index}
                className="glow-card rounded-xl p-6 opacity-0 animate-fade-in-up"
                style={{ animationDelay: `${400 + index * 50}ms` }}
              >
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[var(--aqua)] to-[var(--aqua-dark)] flex items-center justify-center flex-shrink-0 mt-1">
                    <svg
                      className="w-5 h-5 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                      />
                    </svg>
                  </div>
                  <p className="font-medium text-[var(--foreground)]">{benefit}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Membership Program Section */}
      <section className="px-6 py-16 md:py-24 bg-gradient-to-b from-transparent to-[var(--surface-light)]/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 opacity-0 animate-fade-in-up">
            <h2
              className="text-3xl md:text-4xl font-bold mb-4"
              style={{ fontFamily: "var(--font-bricolage)" }}
            >
              Membership Card <span className="text-gradient">Program</span>
            </h2>
            <p className="text-[var(--muted)] max-w-2xl mx-auto">
              Exclusive recognition tiers with premium benefits
            </p>
          </div>

          {/* Tier Selector */}
          <div className="flex flex-wrap justify-center gap-4 mb-8 opacity-0 animate-fade-in-up delay-100">
            {[
              { name: "Platinum", color: "from-gray-400 to-gray-600" },
              { name: "Diamond", color: "from-blue-300 to-blue-500" },
              { name: "Gold", color: "from-yellow-400 to-yellow-600" },
              { name: "Silver", color: "from-gray-300 to-gray-500" },
            ].map((tier, index) => (
              <button
                key={index}
                onClick={() => setSelectedTier(index)}
                className={`px-6 py-3 rounded-xl font-semibold transition-all ${
                  selectedTier === index
                    ? "bg-gradient-to-r " + tier.color + " text-white shadow-lg scale-105"
                    : "bg-[var(--surface)] border border-[var(--aqua)]/20 text-[var(--foreground)] hover:border-[var(--aqua)]/40"
                }`}
              >
                {tier.name}
              </button>
            ))}
          </div>

          {/* Tier Details Display */}
          <div className="glow-card rounded-3xl p-8 md:p-12 opacity-0 animate-fade-in-up delay-200">
            {(() => {
              const tiers = [
                {
                  name: "Platinum",
                  visibility: "Maximum – priority search placement",
                  privileges: "Elite privileges, premium promo slots, spotlight features",
                  networking: "Exclusive leadership circles, direct school introductions",
                  events: "VIP + backstage + premium conference seating",
                  description: "Premium status with highest brand exposure, exclusive backstage event access, personal consultations, masterclass invitations, and unmatched promotional positioning.",
                },
                {
                  name: "Diamond",
                  visibility: "High – prioritized category visibility",
                  privileges: "Premium promotional support, highlighted vendor card",
                  networking: "Priority vendor networking sessions",
                  events: "VIP access to events & conferences",
                  description: "Strong visibility and advanced promotional opportunities, with access to priority networking and VIP privileges.",
                },
                {
                  name: "Gold",
                  visibility: "Medium – boosted visibility",
                  privileges: "Enhanced listing, scheduled highlight rotations",
                  networking: "General networking access",
                  events: "Full event entry",
                  description: "Ideal mid-tier position offering consistent visibility, scheduled spotlight rotations, and general networking benefits.",
                },
                {
                  name: "Silver",
                  visibility: "Basic – essential visibility",
                  privileges: "Standard listing & basic promotional support",
                  networking: "Limited networking circles",
                  events: "Basic access to community events",
                  description: "Entry-level tier offering essential exposure ideal for new or growing vendors.",
                },
              ];
              const tier = tiers[selectedTier];
              return (
                <div className="space-y-6">
                  <div className="text-center">
                    <h3 className="text-2xl md:text-3xl font-bold mb-2" style={{ fontFamily: "var(--font-bricolage)" }}>
                      {tier.name} Tier
                    </h3>
                    <p className="text-[var(--muted)]">{tier.description}</p>
                  </div>
                  <div className="grid md:grid-cols-2 gap-6 pt-6 border-t border-[var(--aqua)]/10">
                    <div>
                      <h4 className="font-semibold text-[var(--foreground)] mb-2 flex items-center gap-2">
                        <svg className="w-5 h-5 text-[var(--aqua)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                        </svg>
                        Brand Visibility
                      </h4>
                      <p className="text-[var(--muted)]">{tier.visibility}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-[var(--foreground)] mb-2 flex items-center gap-2">
                        <svg className="w-5 h-5 text-[var(--aqua)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                        </svg>
                        Privileges
                      </h4>
                      <p className="text-[var(--muted)]">{tier.privileges}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-[var(--foreground)] mb-2 flex items-center gap-2">
                        <svg className="w-5 h-5 text-[var(--aqua)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                        Networking
                      </h4>
                      <p className="text-[var(--muted)]">{tier.networking}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-[var(--foreground)] mb-2 flex items-center gap-2">
                        <svg className="w-5 h-5 text-[var(--aqua)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        Event Access
                      </h4>
                      <p className="text-[var(--muted)]">{tier.events}</p>
                    </div>
                  </div>
                </div>
              );
            })()}
          </div>
        </div>
      </section>

      {/* Platform Features Section */}
      <section className="px-6 py-16 md:py-24">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 opacity-0 animate-fade-in-up">
            <h2
              className="text-3xl md:text-4xl font-bold mb-4"
              style={{ fontFamily: "var(--font-bricolage)" }}
            >
              Powerful <span className="text-gradient">Platform Tools</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefitsToVendor.map((benefit, index) => (
              <div
                key={index}
                className="glow-card rounded-xl p-6 text-center opacity-0 animate-fade-in-up hover:scale-105 transition-transform"
                style={{ animationDelay: `${300 + index * 100}ms` }}
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[var(--aqua)] to-[var(--aqua-dark)] flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-7 h-7 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="font-semibold text-lg mb-2">{benefit}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 py-16 md:py-24 bg-gradient-to-b from-transparent to-[var(--surface-light)]/50">
        <div className="max-w-4xl mx-auto text-center">
          <div className="glow-card rounded-3xl p-8 md:p-12 opacity-0 animate-fade-in-up">
            <h2
              className="text-2xl md:text-3xl font-bold mb-4"
              style={{ fontFamily: "var(--font-bricolage)" }}
            >
              Ready to <span className="text-gradient">Partner</span> with Us?
            </h2>
            <p className="text-lg text-[var(--muted)] mb-8">
              Join the Ganimi Vendor Ecosystem and transform your business growth.
            </p>
            <Link
              href="/contact"
              className="btn-aqua inline-block px-8 py-4 rounded-xl text-base font-semibold"
            >
              Get Started
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="px-6 py-16 md:py-24 bg-gradient-to-b from-transparent to-[var(--surface-light)]/50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 opacity-0 animate-fade-in-up">
            <h2
              className="text-3xl md:text-4xl font-bold mb-4"
              style={{ fontFamily: "var(--font-bricolage)" }}
            >
              Frequently Asked <span className="text-gradient">Questions</span>
            </h2>
            <p className="text-[var(--muted)]">
              Everything you need to know about partnering with us
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="glow-card rounded-xl overflow-hidden opacity-0 animate-fade-in-up"
                style={{ animationDelay: `${600 + index * 100}ms` }}
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-[var(--surface-light)]/50 transition-colors"
                >
                  <span className="font-semibold text-lg pr-4">{faq.question}</span>
                  <svg
                    className={`w-6 h-6 text-[var(--aqua)] flex-shrink-0 transition-transform ${
                      openFaq === index ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
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
                  <div className="px-6 pb-5 animate-fade-in">
                    <p className="text-[var(--muted)] leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
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

