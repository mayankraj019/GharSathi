"use client";

import { FileText, Users, Home } from "lucide-react";

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
    <section id="how-it-works" className="py-20 md:py-28 bg-white">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-xs font-bold tracking-widest text-blue-600 uppercase mb-2">
            Simple 3-Step Process
          </h2>
          <p className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight mb-4">
            How GharSathi Works
          </p>
          <p className="text-base sm:text-lg text-gray-600 font-normal">
            No endless scrolling, no fake listings, and no calling dozens of unverified contacts.
          </p>
        </div>

        {/* 3 Step Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="relative bg-white border border-gray-200/90 rounded-2xl p-8 transition-all duration-200 hover:border-blue-600/40 hover:shadow-card group"
              >
                {/* Step Number Tag */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-xl bg-slate-50 border border-gray-200 text-gray-900 flex items-center justify-center group-hover:bg-blue-50 group-hover:border-blue-200 group-hover:text-blue-600 transition-colors">
                    <Icon className="w-6 h-6 stroke-[1.8]" />
                  </div>
                  <span className="text-3xl font-black text-slate-200 group-hover:text-blue-200 transition-colors font-mono">
                    {item.step}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed font-normal">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
