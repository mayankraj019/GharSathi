"use client";

import { useState } from "react";
import Image from "next/image";
import { Mail, ArrowUp } from "lucide-react";
import { LegalModal, type LegalModalType } from "./legal/LegalModal";

export function Footer() {
  const [activeLegalModal, setActiveLegalModal] = useState<LegalModalType>(null);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <footer id="contact" className="bg-white dark:bg-slate-950 border-t border-gray-200/90 dark:border-slate-800 pt-16 pb-12 transition-colors duration-300">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-gray-100 dark:border-slate-800/80">
            {/* Brand Column */}
            <div className="md:col-span-5 flex flex-col items-start">
              <div className="relative h-12 w-48 mb-4">
                <Image
                  src="/logo.png"
                  alt="GharSathi Logo"
                  fill
                  className="object-contain object-left dark:brightness-110"
                />
              </div>
              <p className="text-sm text-gray-600 dark:text-slate-400 font-normal leading-relaxed max-w-sm mb-6">
                Your Trusted Partner in Finding the Perfect Home. We connect rental seekers directly with verified property experts.
              </p>
              <div className="flex items-center gap-2 text-xs text-gray-500 dark:text-slate-400 font-medium">
                <Mail className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                <span>
                  Contact:{" "}
                  <a
                    href="mailto:supportgharsathi@gmail.com"
                    className="text-gray-700 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-400 font-semibold transition-colors"
                  >
                    supportgharsathi@gmail.com
                  </a>
                </span>
              </div>
            </div>

            {/* Quick Links Column */}
            <div className="md:col-span-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-gray-900 dark:text-white mb-4">
                Quick Links
              </h4>
              <ul className="space-y-2.5 text-sm text-gray-600 dark:text-slate-400">
                <li>
                  <a href="#how-it-works" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                    How It Works
                  </a>
                </li>
                <li>
                  <a href="#why-gharsathi" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                    Why GharSathi
                  </a>
                </li>
                <li>
                  <a href="#requirement-form" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                    Submit Requirement
                  </a>
                </li>
              </ul>
            </div>

            {/* Legal Column */}
            <div className="md:col-span-4">
              <h4 className="text-xs font-bold uppercase tracking-wider text-gray-900 dark:text-white mb-4">
                Legal &amp; Trust
              </h4>
              <ul className="space-y-2.5 text-sm text-gray-600 dark:text-slate-400">
                <li>
                  <button
                    onClick={() => setActiveLegalModal("privacy")}
                    className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-left font-medium cursor-pointer"
                  >
                    Privacy Policy
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setActiveLegalModal("terms")}
                    className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-left font-medium cursor-pointer"
                  >
                    Terms &amp; Conditions
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setActiveLegalModal("guidelines")}
                    className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-left font-medium cursor-pointer"
                  >
                    Broker Partner Guidelines
                  </button>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs text-gray-500 dark:text-slate-500 font-normal">
              © {new Date().getFullYear()} GharSathi. All rights reserved. Built for fast, trusted rental discovery.
            </p>

            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-gray-500 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors cursor-pointer"
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
