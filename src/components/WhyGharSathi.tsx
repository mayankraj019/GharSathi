"use client";

import { CheckCircle2, ShieldCheck, Clock, Layers, Users, Sparkles } from "lucide-react";

export function WhyGharSathi() {
  const features = [
    {
      title: "One Simple Form",
      description: "Fill out your requirements once instead of repeating yourself to dozens of brokers.",
      icon: Layers,
    },
    {
      title: "Save Hours Of Searching",
      description: "Skip browsing outdated listings or dealing with inactive rental posts.",
      icon: Clock,
    },
    {
      title: "Verified Brokers",
      description: "Our partner network consists exclusively of verified, top-tier local experts.",
      icon: ShieldCheck,
    },
    {
      title: "Personalized Property Search",
      description: "Get matching property options tailored to your budget and family/tenant type.",
      icon: Sparkles,
    },
    {
      title: "Trusted Network",
      description: "Direct connection with reliable real estate professionals in your target locality.",
      icon: Users,
    },
    {
      title: "Hassle-Free Experience",
      description: "No public profiles, no unwanted spam calls, and no unnecessary registration.",
      icon: CheckCircle2,
    },
  ];

  return (
    <section id="why-gharsathi" className="py-20 md:py-28 bg-slate-50 dark:bg-slate-900/60 border-t border-gray-200/80 dark:border-slate-800 transition-colors duration-300">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Heading & Messaging */}
          <div className="lg:col-span-5 flex flex-col items-start">
            <span className="text-xs font-bold tracking-widest text-blue-600 dark:text-blue-400 uppercase mb-2">
              The GharSathi Advantage
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 dark:text-white tracking-tight leading-tight mb-6">
              Why choose <br className="hidden sm:inline" />
              <span className="text-blue-600 dark:text-blue-400">GharSathi?</span>
            </h2>
            <p className="text-base sm:text-lg text-gray-600 dark:text-slate-400 leading-relaxed font-normal mb-8">
              Traditional rental platforms force you to wade through ghost listings, expired posts, and overwhelming spam.
            </p>
            <p className="text-sm sm:text-base text-gray-600 dark:text-slate-400 leading-relaxed font-normal mb-8">
              GharSathi flips the script. You state what you need, and our verified expert network brings the right homes straight to you.
            </p>

            <div className="p-6 bg-white dark:bg-slate-900 border border-gray-200 dark:border-slate-800 rounded-2xl w-full shadow-soft">
              <div className="flex items-center gap-3 mb-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-600 dark:bg-emerald-400" />
                <span className="text-sm font-bold text-gray-900 dark:text-white">Zero Commission to GharSathi</span>
              </div>
              <p className="text-xs text-gray-500 dark:text-slate-400">
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
                  className="bg-white dark:bg-slate-900 border border-gray-200/90 dark:border-slate-800 rounded-xl p-6 transition-all duration-150 hover:border-blue-500/40 dark:hover:border-blue-400/40 hover:shadow-soft"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-8 h-8 rounded-lg bg-blue-50 dark:bg-blue-950/80 text-blue-600 dark:text-blue-400 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-4 h-4 stroke-[2]" />
                    </div>
                    <h3 className="text-base font-bold text-gray-900 dark:text-white">
                      {feature.title}
                    </h3>
                  </div>
                  <p className="text-xs sm:text-sm text-gray-600 dark:text-slate-400 leading-relaxed font-normal">
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
