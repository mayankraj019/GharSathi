"use client";

import { CheckCircle2, Clock, Home } from "lucide-react";

interface SuccessViewProps {
  onReset: () => void;
  customerName?: string;
}

export function SuccessView({ onReset, customerName }: SuccessViewProps) {
  return (
    <div className="bg-white border border-slate-200/90 rounded-2xl p-8 sm:p-12 text-center max-w-2xl mx-auto shadow-card animate-in fade-in zoom-in-95 duration-300">
      {/* Premium Success Badge Icon */}
      <div className="w-20 h-20 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-600 flex items-center justify-center mx-auto mb-6">
        <CheckCircle2 className="w-10 h-10 stroke-[2]" />
      </div>

      {/* Main Thank You Message */}
      <h3 className="text-3xl font-extrabold text-slate-900 tracking-tight mb-3">
        Thank You{customerName ? `, ${customerName}` : ""}!
      </h3>
      <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed mb-8 max-w-lg mx-auto">
        Your rental requirement has been submitted successfully. Our expert team is now matching your details with trusted area brokers.
      </p>

      {/* Response Time Callout Card */}
      <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 mb-8 flex items-center justify-center gap-3">
        <Clock className="w-5 h-5 text-blue-600 flex-shrink-0" />
        <div className="text-left">
          <span className="block text-xs font-semibold uppercase tracking-wider text-slate-500">
            Expected Response Time
          </span>
          <span className="text-base font-bold text-slate-900">
            Within 30 Minutes
          </span>
        </div>
      </div>

      {/* Next Steps List */}
      <div className="text-left bg-blue-50/50 border border-blue-100 rounded-xl p-5 mb-8">
        <h4 className="text-sm font-bold text-blue-900 mb-2">What happens next?</h4>
        <ul className="text-xs sm:text-sm text-blue-950/80 space-y-2 font-normal">
          <li className="flex items-start gap-2">
            <span className="font-bold text-blue-600">•</span>
            <span>Our team reviews your requirement preferences &amp; budget.</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="font-bold text-blue-600">•</span>
            <span>We match you with top-rated local property experts in your target locality.</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="font-bold text-blue-600">•</span>
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
