"use client";

import { useState } from "react";
import Image from "next/image";
import { Mail, ArrowUp, Globe, Share2, MessageCircle, Check } from "lucide-react";
import { LegalModal, type LegalModalType } from "./legal/LegalModal";

export function Footer() {
  const [activeLegalModal, setActiveLegalModal] = useState<LegalModalType>(null);
  const [copied, setCopied] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleGlobeClick = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleShareClick = async (e: React.MouseEvent) => {
    e.preventDefault();
    if (typeof window === "undefined") return;
    const shareData = {
      title: "GharSathi | Stop Searching. Start Living.",
      text: "Tell us your rental requirements once. Our trusted property experts will find the right home based on your needs.",
      url: window.location.href,
    };

    if (navigator.share) {
      try {
        await navigator.share(shareData);
      } catch (err) {
        // User dismissed native share sheet
      }
    } else {
      try {
        await navigator.clipboard.writeText(window.location.href);
        setCopied(true);
        setTimeout(() => setCopied(false), 2500);
      } catch (err) {
        // Clipboard fallback
      }
    }
  };

  const handleMessageClick = (e: React.MouseEvent) => {
    e.preventDefault();
    window.location.href = "mailto:supportgharsathi@gmail.com?subject=Inquiry%20via%20GharSathi";
  };

  return (
    <>
      <footer id="contact" className="bg-gradient-to-b from-white to-slate-50 border-t border-slate-200/80 pt-20 pb-12 transition-colors duration-300 relative overflow-hidden">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-16 border-b border-slate-200/80">
            
            {/* Brand Column */}
            <div className="md:col-span-5 flex flex-col items-start">
              <div className="relative h-12 w-48 mb-4">
                <Image
                  src="/logo.png"
                  alt="GharSathi Logo"
                  fill
                  className="object-contain object-left"
                />
              </div>
              <p className="text-sm text-slate-600 font-normal leading-relaxed max-w-sm mb-6">
                Your Trusted Partner in Finding the Perfect Home. We connect rental seekers directly with verified property experts.
              </p>
              
              <div className="flex items-center gap-2 text-xs text-slate-500 font-medium mb-6">
                <Mail className="w-4 h-4 text-blue-600" />
                <span>
                  Contact:{" "}
                  <a
                    href="mailto:supportgharsathi@gmail.com"
                    className="text-slate-700 hover:text-blue-600 font-semibold transition-colors"
                  >
                    supportgharsathi@gmail.com
                  </a>
                </span>
              </div>

              {/* Functional Interactive Icon Buttons */}
              <div className="flex items-center gap-3 text-slate-400 relative">
                {/* 1. Website / Home Scroll */}
                <button
                  onClick={handleGlobeClick}
                  aria-label="Scroll to top of page"
                  title="Go to top"
                  className="p-2.5 rounded-xl bg-slate-100 hover:text-blue-600 hover:bg-slate-200 transition-all cursor-pointer active:scale-95"
                >
                  <Globe className="w-4 h-4" />
                </button>

                {/* 2. Web Share / Copy Link */}
                <button
                  onClick={handleShareClick}
                  aria-label="Share GharSathi"
                  title="Share Website"
                  className="p-2.5 rounded-xl bg-slate-100 hover:text-blue-600 hover:bg-slate-200 transition-all cursor-pointer relative active:scale-95"
                >
                  {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Share2 className="w-4 h-4" />}
                  {copied && (
                    <span className="absolute -top-9 left-1/2 -translate-x-1/2 px-2.5 py-1 bg-slate-900 text-white text-[10px] font-bold rounded-md shadow-md whitespace-nowrap animate-in fade-in">
                      Link Copied!
                    </span>
                  )}
                </button>

                {/* 3. Direct Email Message */}
                <button
                  onClick={handleMessageClick}
                  aria-label="Send Email Inquiry"
                  title="Send Email"
                  className="p-2.5 rounded-xl bg-slate-100 hover:text-blue-600 hover:bg-slate-200 transition-all cursor-pointer active:scale-95"
                >
                  <MessageCircle className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Quick Links Column */}
            <div className="md:col-span-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-4">
                Quick Links
              </h4>
              <ul className="space-y-3 text-sm text-slate-600 font-medium">
                <li>
                  <a href="#how-it-works" className="hover:text-blue-600 transition-colors">
                    How It Works
                  </a>
                </li>
                <li>
                  <a href="#why-gharsathi" className="hover:text-blue-600 transition-colors">
                    Why GharSathi
                  </a>
                </li>
                <li>
                  <a href="#requirement-form" className="hover:text-blue-600 transition-colors">
                    Submit Requirement
                  </a>
                </li>
              </ul>
            </div>

            {/* Legal Column */}
            <div className="md:col-span-4">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-4">
                Legal &amp; Trust
              </h4>
              <ul className="space-y-3 text-sm text-slate-600 font-medium">
                <li>
                  <button
                    onClick={() => setActiveLegalModal("privacy")}
                    className="hover:text-blue-600 transition-colors text-left font-medium cursor-pointer"
                  >
                    Privacy Policy
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setActiveLegalModal("terms")}
                    className="hover:text-blue-600 transition-colors text-left font-medium cursor-pointer"
                  >
                    Terms &amp; Conditions
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setActiveLegalModal("guidelines")}
                    className="hover:text-blue-600 transition-colors text-left font-medium cursor-pointer"
                  >
                    Broker Partner Guidelines
                  </button>
                </li>
              </ul>
            </div>

          </div>

          {/* Bottom Bar */}
          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs text-slate-500 font-normal">
              © {new Date().getFullYear()} GharSathi. All rights reserved. Built for fast, trusted rental discovery.
            </p>

            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-500 hover:text-blue-600 transition-colors cursor-pointer"
            >
              <span>Back to top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </footer>

      {/* Interactive Legal Modal */}
      <LegalModal
        type={activeLegalModal}
        onClose={() => setActiveLegalModal(null)}
      />
    </>
  );
}
