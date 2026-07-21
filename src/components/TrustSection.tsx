"use client";

import { ShieldCheck, Zap, UserCheck, CheckCircle2 } from "lucide-react";

export function TrustSection() {
  const trustItems = [
    {
      icon: ShieldCheck,
      title: "Verified Property Brokers",
      description: "We work strictly with background-verified, local market experts you can trust.",
    },
    {
      icon: Zap,
      title: "Fast Response",
      description: "Receive curated rental matches directly from brokers within 30 minutes.",
    },
    {
      icon: UserCheck,
      title: "Personalized Assistance",
      description: "Options tailored specifically to your budget, flat type, and preferred locality.",
    },
    {
      icon: CheckCircle2,
      title: "Trusted Process",
      description: "Zero spam. Zero public listings. Your contact details remain safe and private.",
    },
  ];

  return (
    <section className="py-16 md:py-20 bg-slate-50 border-y border-gray-200/80">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-xs font-bold tracking-widest text-blue-600 uppercase mb-2">
            Why Renters Trust Us
          </h2>
          <p className="text-2xl sm:text-3xl font-bold text-gray-900 tracking-tight">
            Built on Trust, Transparency &amp; Speed
          </p>
        </div>

        {/* 4 Trust Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {trustItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="bg-white border border-gray-200/90 rounded-xl p-6 transition-all duration-200 hover:border-gray-300 hover:shadow-soft flex flex-col items-start"
              >
                <div className="w-10 h-10 rounded-lg bg-slate-100 text-gray-900 flex items-center justify-center mb-5">
                  <Icon className="w-5 h-5 stroke-[2]" />
                </div>
                <h3 className="text-base font-bold text-gray-900 mb-2">
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
