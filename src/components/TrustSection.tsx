"use client";

import { ShieldCheck, Zap, UserCheck, CheckCircle2 } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export function TrustSection() {
  const { ref: sectionRef, isVisible } = useScrollReveal();

  const trustItems = [
    {
      icon: ShieldCheck,
      title: "Verified Property Brokers",
      description: "We work strictly with background-verified, local market experts you can trust.",
      accent: "from-blue-500/10 to-indigo-500/10",
      iconColor: "text-blue-600",
    },
    {
      icon: Zap,
      title: "Fast Response",
      description: "Receive curated rental matches directly from brokers within 30 minutes.",
      accent: "from-amber-500/10 to-orange-500/10",
      iconColor: "text-amber-600",
    },
    {
      icon: UserCheck,
      title: "Personalized Assistance",
      description: "Options tailored specifically to your budget, flat type, and preferred locality.",
      accent: "from-emerald-500/10 to-teal-500/10",
      iconColor: "text-emerald-600",
    },
    {
      icon: CheckCircle2,
      title: "Trusted Process",
      description: "Zero spam. Zero public listings. Your contact details remain safe and private.",
      accent: "from-indigo-500/10 to-purple-500/10",
      iconColor: "text-indigo-600",
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-slate-50/80 border-y border-slate-200/70 transition-colors duration-300 relative overflow-hidden">
      {/* Background Soft Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[300px] bg-blue-500/[0.025] rounded-full blur-3xl pointer-events-none" />

      <div
        ref={sectionRef}
        className={`max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-bold tracking-widest text-blue-600 uppercase mb-2 block">
            Why Renters Trust Us
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Built on Trust, Transparency &amp; Speed
          </h2>
        </div>

        {/* 4 Trust Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {trustItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                style={{ transitionDelay: `${index * 100}ms` }}
                className={`group relative bg-white border border-slate-200/80 rounded-2xl p-6 transition-all duration-300 hover:-translate-y-2 hover:shadow-saas hover:border-blue-500/40 flex flex-col items-start overflow-hidden ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                }`}
              >
                {/* Top Subtle Gradient Accents */}
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${item.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

                <div className={`w-12 h-12 rounded-xl bg-slate-50 border border-slate-200/60 ${item.iconColor} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-xs`}>
                  <Icon className="w-6 h-6 stroke-[2]" />
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-2 tracking-tight group-hover:text-blue-600 transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed font-normal">
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
