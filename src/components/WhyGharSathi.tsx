"use client";

import { CheckCircle2, ShieldCheck, Clock, Layers, Users, Sparkles } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export function WhyGharSathi() {
  const { ref: sectionRef, isVisible } = useScrollReveal();

  const features = [
    {
      title: "One Simple Form",
      description: "Fill out your requirements once instead of repeating yourself to dozens of brokers.",
      icon: Layers,
      featured: true,
    },
    {
      title: "Save Hours Of Searching",
      description: "Skip browsing outdated listings or dealing with inactive rental posts.",
      icon: Clock,
      featured: false,
    },
    {
      title: "Verified Brokers",
      description: "Our partner network consists exclusively of verified, top-tier local experts.",
      icon: ShieldCheck,
      featured: false,
    },
    {
      title: "Personalized Property Search",
      description: "Get matching property options tailored to your budget and family/tenant type.",
      icon: Sparkles,
      featured: false,
    },
    {
      title: "Trusted Network",
      description: "Direct connection with reliable real estate professionals in your target locality.",
      icon: Users,
      featured: false,
    },
    {
      title: "Hassle-Free Experience",
      description: "No public profiles, no unwanted spam calls, and no unnecessary registration.",
      icon: CheckCircle2,
      featured: false,
    },
  ];

  return (
    <section id="why-gharsathi" className="py-24 md:py-32 bg-slate-50/70 border-t border-slate-200/80 transition-colors duration-300 relative overflow-hidden">
      {/* Soft Glow */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-blue-500/[0.025] rounded-full blur-3xl pointer-events-none" />

      <div
        ref={sectionRef}
        className={`max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Heading & Messaging */}
          <div className="lg:col-span-5 flex flex-col items-start">
            <span className="text-xs font-bold tracking-widest text-blue-600 uppercase mb-2">
              The GharSathi Advantage
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight mb-6">
              Why choose <br className="hidden sm:inline" />
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">GharSathi?</span>
            </h2>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal mb-8">
              Traditional rental platforms force you to wade through ghost listings, expired posts, and overwhelming spam.
            </p>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal mb-8">
              GharSathi flips the script. You state what you need, and our verified expert network brings the right homes straight to you.
            </p>

            {/* Zero Commission Banner */}
            <div className="p-6 bg-white border border-slate-200/90 rounded-2xl w-full shadow-card relative overflow-hidden group transition-transform duration-200 hover:scale-[1.01]">
              <div className="absolute top-0 left-0 bottom-0 w-1 bg-emerald-500" />
              <div className="flex items-center gap-3 mb-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-sm font-bold text-slate-900">Zero Commission to GharSathi</span>
              </div>
              <p className="text-xs text-slate-500 leading-relaxed">
                Our matching platform is 100% free for tenant seekers. You only deal with verified local brokers directly.
              </p>
            </div>
          </div>

          {/* Right Column: 6 Feature Cards Grid */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  style={{ transitionDelay: `${index * 80}ms` }}
                  className={`group relative rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-saas ${
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                  } ${
                    feature.featured
                      ? "bg-gradient-to-br from-blue-50/90 via-white to-indigo-50/50 border-2 border-blue-500/60 shadow-md"
                      : "bg-white border border-slate-200/90 hover:border-blue-500/40"
                  }`}
                >
                  {feature.featured && (
                    <span className="absolute top-4 right-4 px-2.5 py-0.5 rounded-full bg-blue-600 text-white text-[10px] font-bold uppercase tracking-wider">
                      Featured
                    </span>
                  )}

                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-9 h-9 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-200">
                      <Icon className="w-4 h-4 stroke-[2]" />
                    </div>
                    <h3 className="text-base font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                      {feature.title}
                    </h3>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
