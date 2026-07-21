"use client";

import { ArrowRight, ShieldCheck, Clock, CheckCircle2 } from "lucide-react";

export function HeroSection() {
  const scrollToForm = () => {
    const formElement = document.getElementById("requirement-form");
    if (formElement) {
      formElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToHowItWorks = () => {
    const element = document.getElementById("how-it-works");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-white overflow-hidden">
      {/* Background architectural grid pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#111827_1px,transparent_1px)] [background-size:24px_24px]" />

      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Headline, Copy & CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start">
            {/* Pill Tagline Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 border border-slate-200/80 text-xs font-semibold text-gray-700 mb-6">
              <span className="inline-block w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
              <span>Smart Rental Matchmaker</span>
              <span className="text-gray-300">•</span>
              <span className="text-gray-500 font-normal">Zero Search Hassle</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-[1.1] tracking-tight mb-6">
              Stop Searching. <br />
              <span className="text-blue-600">Start Living.</span>
            </h1>

            {/* Subheading */}
            <p className="text-lg sm:text-xl text-gray-600 leading-relaxed font-normal max-w-2xl mb-8">
              Finding a rental shouldn&apos;t feel like a full-time job. Tell us your requirements once. Our trusted property experts will find the right rental home based on your needs.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto mb-10">
              <button
                onClick={scrollToForm}
                className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 text-base font-semibold text-white bg-blue-600 hover:bg-blue-700 active:bg-blue-800 rounded-xl transition-all shadow-soft hover:shadow-md group"
              >
                <span>Find My Home</span>
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </button>
              <button
                onClick={scrollToHowItWorks}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-base font-semibold text-gray-700 hover:text-gray-900 bg-slate-50 hover:bg-slate-100 border border-gray-200 rounded-xl transition-colors"
              >
                Learn More
              </button>
            </div>

            {/* Trust Micro Highlights */}
            <div className="grid grid-cols-3 gap-6 pt-6 border-t border-gray-100 w-full max-w-xl">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <span className="text-xs font-medium text-gray-600">100% Free Service</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-blue-600 flex-shrink-0" />
                <span className="text-xs font-medium text-gray-600">30 Min Match</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <span className="text-xs font-medium text-gray-600">Verified Brokers</span>
              </div>
            </div>
          </div>

          {/* Right Column: Custom Handcrafted Architectural Vector Illustration */}
          <div className="lg:col-span-5 flex items-center justify-center">
            <div className="relative w-full max-w-md lg:max-w-none">
              {/* Premium Vector Artwork Box */}
              <div className="bg-slate-50 border border-gray-200/90 rounded-2xl p-6 lg:p-8 shadow-card relative">
                
                {/* SVG Vector Graphic */}
                <svg
                  viewBox="0 0 480 380"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-full h-auto drop-shadow-sm"
                >
                  {/* Background Grid Accent */}
                  <rect x="20" y="20" width="440" height="340" rx="16" fill="#FFFFFF" stroke="#E5E7EB" strokeWidth="1.5" strokeDasharray="4 4" />
                  
                  {/* Modern Architectural Blueprint / House Outline */}
                  <path
                    d="M120 280V175L240 90L360 175V280C360 285.523 355.523 290 350 290H130C124.477 290 120 285.523 120 280Z"
                    fill="#F8FAFC"
                    stroke="#111827"
                    strokeWidth="2.5"
                    strokeLinejoin="round"
                  />
                  
                  {/* Roof Ridge Line */}
                  <path d="M100 185L240 85L380 185" stroke="#2563EB" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />

                  {/* Window Line Design (Apple/Linear Style Clean Rectangles) */}
                  <rect x="155" y="180" width="55" height="55" rx="6" fill="#FFFFFF" stroke="#64748B" strokeWidth="1.8" />
                  <line x1="182.5" y1="180" x2="182.5" y2="235" stroke="#94A3B8" strokeWidth="1.2" />
                  <line x1="155" y1="207.5" x2="210" y2="207.5" stroke="#94A3B8" strokeWidth="1.2" />

                  <rect x="270" y="180" width="55" height="55" rx="6" fill="#FFFFFF" stroke="#64748B" strokeWidth="1.8" />
                  <line x1="297.5" y1="180" x2="297.5" y2="235" stroke="#94A3B8" strokeWidth="1.2" />
                  <line x1="270" y1="207.5" x2="325" y2="207.5" stroke="#94A3B8" strokeWidth="1.2" />

                  {/* Doorway */}
                  <rect x="215" y="225" width="50" height="65" rx="4" fill="#2563EB" fillOpacity="0.08" stroke="#2563EB" strokeWidth="2" />
                  <circle cx="256" cy="258" r="3" fill="#2563EB" />

                  {/* Key & Lock / Match Vector Symbol Floating */}
                  <g transform="translate(310, 100)">
                    <rect x="0" y="0" width="110" height="48" rx="24" fill="#FFFFFF" stroke="#16A34A" strokeWidth="2" />
                    <circle cx="24" cy="24" r="12" fill="#16A34A" fillOpacity="0.15" />
                    <path d="M20 24L23 27L29 21" stroke="#16A34A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <text x="44" y="29" fill="#111827" fontSize="11" fontWeight="700" fontFamily="sans-serif">
                      Matched
                    </text>
                  </g>

                  {/* Requirement Box Vector */}
                  <g transform="translate(60, 220)">
                    <rect x="0" y="0" width="105" height="54" rx="10" fill="#FFFFFF" stroke="#E5E7EB" strokeWidth="1.5" />
                    <rect x="12" y="14" width="45" height="6" rx="3" fill="#2563EB" />
                    <rect x="12" y="26" width="75" height="5" rx="2.5" fill="#94A3B8" />
                    <rect x="12" y="36" width="60" height="5" rx="2.5" fill="#CBD5E1" />
                  </g>
                </svg>

                {/* Subtext Card beneath Graphic */}
                <div className="mt-4 pt-4 border-t border-gray-200/80 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-600 inline-block" />
                    <span className="text-xs font-semibold text-gray-800">1 Requirement Form</span>
                  </div>
                  <span className="text-xs text-gray-500 font-medium">→ Handled by Experts</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
