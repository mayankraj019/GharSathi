"use client";

import { CheckCircle2, Clock, Home } from "lucide-react";

interface SuccessViewProps {
  onReset: () => void;
  customerName?: string;
}

export function SuccessView({ onReset, customerName }: SuccessViewProps) {
  return (
    <div className="bg-white dark:bg-slate-900 border border-gray-200/90 dark:border-slate-800 rounded-2xl p-8 sm:p-12 text-center max-w-2xl mx-auto shadow-card animate-in fade-in zoom-in-95 duration-300">
      {/* Premium Success Badge Icon */}
      <div className="w-20 h-20 rounded-full bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mx-auto mb-6">
        <CheckCircle2 className="w-10 h-10 stroke-[2]" />
      </div>

      {/* Main Thank You Message */}
      <h3 className="text-3xl font-extrabold text-gray-900 dark:text-white tracking-tight mb-3">
        Thank You{customerName ? `, ${customerName}` : ""}!
      </h3>
      <p className="text-base sm:text-lg text-gray-600 dark:text-slate-400 font-normal leading-relaxed mb-8 max-w-lg mx-auto">
        Your rental requirement has been submitted successfully. Our expert team is now matching your details with trusted area brokers.
      </p>

      {/* Response Time Callout Card */}
      <div className="bg-slate-50 dark:bg-slate-800/60 border border-gray-200 dark:border-slate-700 rounded-xl p-5 mb-8 flex items-center justify-center gap-3">
        <Clock className="w-5 h-5 text-blue-600 dark:text-blue-400 flex-shrink-0" />
        <div className="text-left">
          <span className="block text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-slate-400">
            Expected Response Time
          </span>
          <span className="text-base font-bold text-gray-900 dark:text-white">
            Within 30 Minutes
          </span>
        </div>
      </div>

      {/* Next Steps List */}
      <div className="text-left bg-blue-50/50 dark:bg-blue-950/40 border border-blue-100 dark:border-blue-900/60 rounded-xl p-5 mb-8">
        <h4 className="text-sm font-bold text-blue-900 dark:text-blue-300 mb-2">What happens next?</h4>
        <ul className="text-xs sm:text-sm text-blue-950/80 dark:text-blue-200/90 space-y-2 font-normal">
          <li className="flex items-start gap-2">
            <span className="font-bold text-blue-600 dark:text-blue-400">•</span>
            <span>Our team reviews your requirement preferences &amp; budget.</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="font-bold text-blue-600 dark:text-blue-400">•</span>
            <span>We match you with top-rated local property experts in your target locality.</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="font-bold text-blue-600 dark:text-blue-400">•</span>
            <span>Verified brokers will reach out via WhatsApp/Phone with exact flat photos &amp; details.</span>
          </li>
        </ul>
      </div>

      {/* Action Button */}
      <button
        onClick={onReset}
        className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 active:bg-blue-800 rounded-xl transition-all shadow-soft cursor-pointer"
      >
        <Home className="w-4 h-4" />
        <span>Submit Another Requirement</span>
      </button>
    </div>
  );
}
