"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Menu, X, ArrowRight, Sparkles } from "lucide-react";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToForm = () => {
    setMobileMenuOpen(false);
    const formElement = document.getElementById("requirement-form");
    if (formElement) {
      formElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/80 backdrop-blur-xl border-b border-slate-200/70 shadow-soft py-3"
          : "bg-white/90 backdrop-blur-xl border-b border-slate-200/40 py-4"
      }`}
    >
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Official Brand Logo */}
          <a
            href="#"
            className="flex items-center group focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 rounded-xl p-1"
          >
            <div className="relative h-11 w-44 sm:h-12 sm:w-48 transition-transform duration-200 group-hover:scale-[1.02]">
              <Image
                src="/logo.png"
                alt="GharSathi Logo"
                fill
                priority
                className="object-contain object-left"
              />
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8">
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="relative text-sm font-semibold text-slate-700 hover:text-blue-600 transition-colors py-1 group cursor-pointer"
            >
              <span>Home</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-200 group-hover:w-full rounded-full" />
            </button>
            <button
              onClick={() => scrollToSection("how-it-works")}
              className="relative text-sm font-semibold text-slate-700 hover:text-blue-600 transition-colors py-1 group cursor-pointer"
            >
              <span>How It Works</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-200 group-hover:w-full rounded-full" />
            </button>
            <button
              onClick={() => scrollToSection("why-gharsathi")}
              className="relative text-sm font-semibold text-slate-700 hover:text-blue-600 transition-colors py-1 group cursor-pointer"
            >
              <span>Why GharSathi</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-200 group-hover:w-full rounded-full" />
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="relative text-sm font-semibold text-slate-700 hover:text-blue-600 transition-colors py-1 group cursor-pointer"
            >
              <span>Contact</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-200 group-hover:w-full rounded-full" />
            </button>
          </nav>

          {/* Action Group: Primary CTA Button */}
          <div className="hidden md:flex items-center gap-4">
            <button
              onClick={scrollToForm}
              className="group relative inline-flex items-center justify-center gap-2 px-6 py-2.5 text-sm font-semibold text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 rounded-xl transition-all duration-200 shadow-md shadow-blue-600/20 hover:shadow-lg hover:shadow-blue-600/35 hover:-translate-y-0.5 active:translate-y-0 cursor-pointer overflow-hidden"
            >
              <Sparkles className="w-4 h-4 text-blue-200 animate-pulse" />
              <span>Find My Home</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-colors"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-xl border-b border-slate-200 px-4 pt-3 pb-6 shadow-xl animate-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col space-y-4">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="text-left text-base font-semibold text-slate-800 hover:text-blue-600 py-1"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("how-it-works")}
              className="text-left text-base font-semibold text-slate-800 hover:text-blue-600 py-1"
            >
              How It Works
            </button>
            <button
              onClick={() => scrollToSection("why-gharsathi")}
              className="text-left text-base font-semibold text-slate-800 hover:text-blue-600 py-1"
            >
              Why GharSathi
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-left text-base font-semibold text-slate-800 hover:text-blue-600 py-1"
            >
              Contact
            </button>
            <div className="pt-2">
              <button
                onClick={scrollToForm}
                className="w-full flex items-center justify-center gap-2 px-5 py-3 text-base font-semibold text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 rounded-xl transition-all shadow-md"
              >
                <span>Find My Home</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
