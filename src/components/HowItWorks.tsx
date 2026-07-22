"use client";

import { FileText, Users, Home, ArrowRight } from "lucide-react";

export function HowItWorks() {
  const steps = [
    {
      step: "01",
      icon: FileText,
      title: "Share Your Requirements",
      description: "Fill one simple form with your budget, preferred area, flat type, and move-in date.",
    },
    {
      step: "02",
      icon: Users,
      title: "We Match You",
      description: "Our dedicated team reviews your enquiry and forwards it immediately to trusted area brokers.",
    },
    {
      step: "03",
      icon: Home,
      title: "Move Into Your Home",
      description: "Verified brokers contact you directly with tailored options so you can finalize your home effortlessly.",
    },
  ];

  return (
    <section id="how-it-works" className="py-24 md:py-32 bg-white transition-colors duration-300 relative overflow-hidden">
      {/* Background Soft Ambient Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/[0.03] rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <span className="text-xs font-bold tracking-widest text-blue-600 uppercase mb-2 block">
            Simple 3-Step Process
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
            How GharSathi Works
          </h2>
          <p className="text-base sm:text-lg text-slate-600 font-normal">
            No endless scrolling, no fake listings, and no calling dozens of unverified contacts.
          </p>
        </div>

        {/* 3 Step Cards Grid with Connecting Flow Lines */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {/* Connecting Line Accent on Desktop */}
          <div className="hidden md:block absolute top-1/2 left-[15%] right-[15%] h-0.5 bg-gradient-to-r from-blue-500/20 via-indigo-500/40 to-blue-500/20 -translate-y-8 z-0" />

          {steps.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="group relative z-10 bg-white border border-slate-200/90 rounded-2xl p-8 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-card hover:border-blue-500/40 flex flex-col justify-between"
              >
                <div>
                  {/* Step Number Tag & Icon */}
                  <div className="flex items-center justify-between mb-8">
                    <div className="w-14 h-14 rounded-2xl bg-slate-50 border border-slate-200/80 text-slate-900 flex items-center justify-center group-hover:bg-blue-600 group-hover:border-blue-600 group-hover:text-white transition-all duration-300 shadow-xs">
                      <Icon className="w-7 h-7 stroke-[1.8]" />
                    </div>
                    <span className="text-4xl font-black text-slate-200 group-hover:text-blue-500/30 transition-colors font-mono tracking-tighter">
                      {item.step}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 mb-3 tracking-tight group-hover:text-blue-600 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed font-normal">
                    {item.description}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-slate-100 flex items-center gap-1.5 text-xs font-bold text-blue-600">
                  <span>Step {item.step}</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
