"use client";

import { useEffect, useState } from "react";
import {
  ArrowRight,
  ShieldCheck,
  Clock,
  CheckCircle2,
  MapPin,
  Star,
  Check,
  Sparkles,
  Building2,
  UserCheck,
  Search,
} from "lucide-react";

export function HeroSection() {
  const [step, setStep] = useState<number>(0);
  const [progress, setProgress] = useState<number>(15);

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

  // Interactive Match Showcase Animation Cycle
  useEffect(() => {
    const timer = setInterval(() => {
      setStep((prev) => {
        const nextStep = (prev + 1) % 4;
        if (nextStep === 0) setProgress(20);
        else if (nextStep === 1) setProgress(55);
        else if (nextStep === 2) setProgress(85);
        else if (nextStep === 3) setProgress(100);
        return nextStep;
      });
    }, 2200);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 lg:pt-44 lg:pb-32 bg-white overflow-hidden">
      {/* Background Radial Gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(70%_70%_at_50%_0%,_#FFFFFF_0%,_#F7F9FC_100%)] pointer-events-none" />

      {/* Light Blue Subtle Ambient Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-blue-500/[0.035] rounded-full blur-3xl pointer-events-none" />

      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.025] pointer-events-none bg-[radial-gradient(#0f172a_1px,transparent_1px)] [background-size:24px_24px]" />

      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-12 items-center">
          
          {/* LEFT SIDE: Headline, Copy, Trust Pills & CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Top SaaS Badge */}
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-slate-100/90 border border-slate-200/80 text-xs font-semibold text-slate-800 mb-8 backdrop-blur-md shadow-xs">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600" />
              </span>
              <span>We find your perfect rental so you don&apos;t have to search.</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-[1.08] tracking-tight mb-8">
              Stop Searching. <br />
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                Start Living.
              </span>
            </h1>

            {/* Subheading Copy */}
            <div className="space-y-4 text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mb-8 font-normal">
              <p className="text-slate-900 font-medium text-lg sm:text-xl">
                Finding a rental shouldn&apos;t feel like a full-time job.
              </p>
              <p>
                Share your requirements once and our verified local experts will handpick the best rental homes for you.
              </p>
              <div className="pt-2 flex flex-col sm:flex-row gap-3 sm:gap-6 text-sm font-semibold text-slate-700">
                <span className="inline-flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />
                  No endless scrolling.
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />
                  No fake listings.
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />
                  No spam calls.
                </span>
              </div>
            </div>

            {/* Trust Pills */}
            <div className="flex flex-wrap items-center gap-2.5 mb-10">
              <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200/80 text-xs font-semibold text-emerald-800">
                <Check className="w-3.5 h-3.5 text-emerald-600" />
                <span>100% Free</span>
              </div>
              <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-slate-100 border border-slate-200/80 text-xs font-semibold text-slate-700">
                <ShieldCheck className="w-3.5 h-3.5 text-blue-600" />
                <span>Verified Brokers</span>
              </div>
              <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-slate-100 border border-slate-200/80 text-xs font-semibold text-slate-700">
                <Clock className="w-3.5 h-3.5 text-blue-600" />
                <span>Match within 30 Minutes</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto">
              <button
                onClick={scrollToForm}
                className="group relative inline-flex items-center justify-center gap-2.5 px-8 py-4 text-base font-semibold text-white bg-blue-600 hover:bg-blue-700 active:bg-blue-800 rounded-2xl transition-all duration-200 shadow-lg shadow-blue-600/20 hover:shadow-xl hover:shadow-blue-600/30 hover:-translate-y-0.5 cursor-pointer"
              >
                <span>Find My Home</span>
                <ArrowRight className="w-5 h-5 transition-transform duration-200 group-hover:translate-x-1" />
              </button>
              <button
                onClick={scrollToHowItWorks}
                className="inline-flex items-center justify-center gap-2 px-7 py-4 text-base font-semibold text-slate-700 hover:text-slate-900 bg-slate-50 hover:bg-slate-100 border border-slate-200 rounded-2xl transition-all duration-200 hover:-translate-y-0.5 cursor-pointer"
              >
                Learn More
              </button>
            </div>

          </div>

          {/* RIGHT SIDE: Glassmorphism Interactive Showcase */}
          <div className="lg:col-span-5 flex items-center justify-center">
            <div className="relative w-full max-w-md lg:max-w-none animate-float-slow">
              
              {/* Soft Outer Glow */}
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600/10 to-indigo-600/10 rounded-[32px] blur-xl opacity-70 pointer-events-none" />

              {/* Glassmorphism Card */}
              <div className="relative backdrop-blur-xl bg-white/85 border border-slate-200/80 rounded-[28px] p-6 sm:p-7 shadow-[0_20px_50px_rgba(15,23,42,0.08)]">
                
                {/* Header: Rental Request Meta */}
                <div className="flex items-center justify-between pb-4 border-b border-slate-100 mb-5">
                  <div className="flex items-center gap-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-blue-600" />
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                      Rental Request
                    </span>
                  </div>
                  <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-blue-50 text-[11px] font-semibold text-blue-700">
                    <Sparkles className="w-3 h-3" />
                    Live Match
                  </span>
                </div>

                {/* Requirements Chips */}
                <div className="grid grid-cols-2 gap-2 mb-6">
                  <div className="flex items-center gap-2 px-3 py-2 rounded-xl bg-slate-50 border border-slate-100 text-xs font-medium text-slate-700">
                    <MapPin className="w-3.5 h-3.5 text-blue-600" />
                    <span>📍 Pune</span>
                  </div>
                  <div className="flex items-center gap-2 px-3 py-2 rounded-xl bg-slate-50 border border-slate-100 text-xs font-medium text-slate-700">
                    <span className="font-semibold text-blue-600">₹</span>
                    <span>₹20,000 / mo</span>
                  </div>
                  <div className="flex items-center gap-2 px-3 py-2 rounded-xl bg-slate-50 border border-slate-100 text-xs font-medium text-slate-700">
                    <Building2 className="w-3.5 h-3.5 text-slate-500" />
                    <span>2BHK Apartment</span>
                  </div>
                  <div className="flex items-center gap-2 px-3 py-2 rounded-xl bg-slate-50 border border-slate-100 text-xs font-medium text-slate-700">
                    <UserCheck className="w-3.5 h-3.5 text-slate-500" />
                    <span>Working Professional</span>
                  </div>
                </div>

                {/* Status & Progress Bar */}
                <div className="mb-6 bg-slate-50/80 rounded-2xl p-4 border border-slate-100">
                  <div className="flex items-center justify-between text-xs font-semibold text-slate-700 mb-2">
                    <span className="flex items-center gap-2">
                      <Search className="w-3.5 h-3.5 text-blue-600 animate-spin" />
                      {step === 0 && "Searching..."}
                      {step === 1 && "Matching with verified brokers..."}
                      {step === 2 && "Filtering best rental homes..."}
                      {step === 3 && "Broker Assigned!"}
                    </span>
                    <span className="text-blue-600 font-mono">{progress}%</span>
                  </div>

                  {/* Progress Bar Container */}
                  <div className="h-2 w-full bg-slate-200/80 rounded-full overflow-hidden">
                    <div
                      style={{ width: `${progress}%` }}
                      className="h-full bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full transition-all duration-700 ease-out"
                    />
                  </div>
                </div>

                {/* Milestone Pills */}
                <div className="space-y-2.5 mb-6">
                  {/* Milestone 1 */}
                  <div
                    className={`flex items-center justify-between p-3 rounded-xl border text-xs font-medium transition-all duration-500 ${
                      step >= 1
                        ? "bg-emerald-50/80 border-emerald-200/70 text-emerald-900 opacity-100 translate-y-0"
                        : "bg-slate-50/50 border-slate-100 text-slate-400 opacity-40 translate-y-1"
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className={`w-4 h-4 ${step >= 1 ? "text-emerald-600" : "text-slate-300"}`} />
                      <span>Matching with verified brokers...</span>
                    </div>
                    {step >= 1 && (
                      <span className="px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 font-semibold text-[11px]">
                        ✓ 42 Verified Brokers
                      </span>
                    )}
                  </div>

                  {/* Milestone 2 */}
                  <div
                    className={`flex items-center justify-between p-3 rounded-xl border text-xs font-medium transition-all duration-500 ${
                      step >= 2
                        ? "bg-blue-50/80 border-blue-200/70 text-blue-900 opacity-100 translate-y-0"
                        : "bg-slate-50/50 border-slate-100 text-slate-400 opacity-40 translate-y-1"
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className={`w-4 h-4 ${step >= 2 ? "text-blue-600" : "text-slate-300"}`} />
                      <span>Handpicking verified listings...</span>
                    </div>
                    {step >= 2 && (
                      <span className="px-2 py-0.5 rounded-full bg-blue-100 text-blue-800 font-semibold text-[11px]">
                        ✓ 8 Matching Homes
                      </span>
                    )}
                  </div>
                </div>

                {/* Broker Assigned Card & Success Badge */}
                <div
                  className={`transition-all duration-500 ${
                    step >= 3 ? "opacity-100 scale-100" : "opacity-30 scale-95 pointer-events-none"
                  }`}
                >
                  <div className="p-4 rounded-2xl bg-gradient-to-br from-slate-900 to-slate-800 text-white shadow-md relative overflow-hidden">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-[11px] font-semibold tracking-wider text-slate-400 uppercase">
                        Broker Assigned
                      </span>
                      <span className="inline-flex items-center gap-1 text-[11px] font-medium text-emerald-400 bg-emerald-950/60 border border-emerald-500/30 px-2 py-0.5 rounded-full">
                        <Clock className="w-3 h-3" />
                        Response in 18 Min
                      </span>
                    </div>

                    <div className="flex items-center gap-3">
                      {/* Avatar */}
                      <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-blue-500 to-indigo-500 flex items-center justify-center text-white font-bold text-sm shadow-inner">
                        AS
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-white">Ankit Sharma</h4>
                        <div className="flex items-center gap-1 mt-0.5">
                          <div className="flex text-amber-400">
                            <Star className="w-3 h-3 fill-amber-400" />
                            <Star className="w-3 h-3 fill-amber-400" />
                            <Star className="w-3 h-3 fill-amber-400" />
                            <Star className="w-3 h-3 fill-amber-400" />
                            <Star className="w-3 h-3 fill-amber-400" />
                          </div>
                          <span className="text-[11px] text-slate-300 font-medium">5.0 (Verified Partner)</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Success Badge Banner */}
                  {step >= 3 && (
                    <div className="mt-3 flex items-center justify-center gap-2 p-2.5 rounded-xl bg-emerald-600 text-white text-xs font-bold shadow-md">
                      <Sparkles className="w-4 h-4" />
                      <span>Perfect Match Found</span>
                    </div>
                  )}
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
