"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { rentalRequirementSchema, type RentalRequirementInput } from "@/lib/validations";
import { SuccessView } from "./SuccessView";
import { Send, Loader2, ShieldCheck, MapPin, IndianRupee, Home, User, Phone, Mail, Calendar, Sparkles } from "lucide-react";

export function RequirementForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [submittedName, setSubmittedName] = useState<string>("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<RentalRequirementInput>({
    resolver: zodResolver(rentalRequirementSchema),
    defaultValues: {
      flatType: "2BHK",
      tenantType: "Working Professional",
      additionalRequirements: "",
    },
  });

  const onSubmit = async (data: RentalRequirementInput) => {
    setIsSubmitting(true);
    setErrorMessage(null);

    try {
      const response = await fetch("/api/requirements", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(result.error || "Failed to submit requirement. Please try again.");
      }

      setSubmittedName(data.name);
      setIsSubmitted(true);
      reset();
    } catch (err: any) {
      setErrorMessage(err.message || "An unexpected error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setSubmittedName("");
  };

  return (
    <section id="requirement-form" className="py-20 md:py-28 bg-white relative">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-xs font-bold text-blue-700 uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Instant Matching Form</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tight mb-4">
            Share Your Rental Requirement
          </h2>
          <p className="text-base sm:text-lg text-gray-600 font-normal">
            Fill out this quick form. Our verified property experts will match you with ideal rental options.
          </p>
        </div>

        {/* Conditional Rendering: Success View vs Form */}
        {isSubmitted ? (
          <SuccessView onReset={handleReset} customerName={submittedName} />
        ) : (
          <div className="max-w-3xl mx-auto bg-white border border-gray-200/90 rounded-2xl p-6 sm:p-10 lg:p-12 shadow-card">
            {/* Form Error Banner */}
            {errorMessage && (
              <div className="mb-8 p-4 bg-red-50 border border-red-200 rounded-xl text-sm font-medium text-red-700">
                {errorMessage}
              </div>
            )}

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              {/* Personal Information Group */}
              <div>
                <h3 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-4 pb-2 border-b border-gray-100 flex items-center gap-2">
                  <User className="w-3.5 h-3.5" />
                  <span>1. Contact Details</span>
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                  {/* Full Name */}
                  <div className="sm:col-span-1">
                    <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1.5">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <input
                        {...register("name")}
                        type="text"
                        placeholder="e.g. Rahul Sharma"
                        className={`w-full px-3.5 py-2.5 text-sm bg-slate-50/50 border ${
                          errors.name ? "border-red-500 focus:ring-red-500" : "border-gray-200 focus:border-blue-600 focus:ring-blue-600"
                        } rounded-xl focus:outline-none focus:ring-2 focus:ring-opacity-20 transition-all text-gray-900 placeholder-gray-400`}
                      />
                    </div>
                    {errors.name && (
                      <p className="mt-1 text-xs text-red-600 font-medium">{errors.name.message}</p>
                    )}
                  </div>

                  {/* Phone Number */}
                  <div className="sm:col-span-1">
                    <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1.5">
                      Phone Number <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <input
                        {...register("phone")}
                        type="tel"
                        placeholder="e.g. 9876543210"
                        className={`w-full px-3.5 py-2.5 text-sm bg-slate-50/50 border ${
                          errors.phone ? "border-red-500 focus:ring-red-500" : "border-gray-200 focus:border-blue-600 focus:ring-blue-600"
                        } rounded-xl focus:outline-none focus:ring-2 focus:ring-opacity-20 transition-all text-gray-900 placeholder-gray-400`}
                      />
                    </div>
                    {errors.phone && (
                      <p className="mt-1 text-xs text-red-600 font-medium">{errors.phone.message}</p>
                    )}
                  </div>

                  {/* Email Address */}
                  <div className="sm:col-span-1">
                    <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1.5">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <input
                        {...register("email")}
                        type="email"
                        placeholder="e.g. rahul@example.com"
                        className={`w-full px-3.5 py-2.5 text-sm bg-slate-50/50 border ${
                          errors.email ? "border-red-500 focus:ring-red-500" : "border-gray-200 focus:border-blue-600 focus:ring-blue-600"
                        } rounded-xl focus:outline-none focus:ring-2 focus:ring-opacity-20 transition-all text-gray-900 placeholder-gray-400`}
                      />
                    </div>
                    {errors.email && (
                      <p className="mt-1 text-xs text-red-600 font-medium">{errors.email.message}</p>
                    )}
                  </div>
                </div>
              </div>

              {/* Property & Location Preferences */}
              <div>
                <h3 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-4 pb-2 border-b border-gray-100 flex items-center gap-2">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>2. Location &amp; Budget</span>
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                  {/* City */}
                  <div className="sm:col-span-1">
                    <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1.5">
                      City <span className="text-red-500">*</span>
                    </label>
                    <input
                      {...register("city")}
                      type="text"
                      placeholder="e.g. Mumbai / Bangalore / Pune"
                      className={`w-full px-3.5 py-2.5 text-sm bg-slate-50/50 border ${
                        errors.city ? "border-red-500 focus:ring-red-500" : "border-gray-200 focus:border-blue-600 focus:ring-blue-600"
                      } rounded-xl focus:outline-none focus:ring-2 focus:ring-opacity-20 transition-all text-gray-900 placeholder-gray-400`}
                    />
                    {errors.city && (
                      <p className="mt-1 text-xs text-red-600 font-medium">{errors.city.message}</p>
                    )}
                  </div>

                  {/* Preferred Area */}
                  <div className="sm:col-span-1">
                    <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1.5">
                      Preferred Area <span className="text-red-500">*</span>
                    </label>
                    <input
                      {...register("preferredArea")}
                      type="text"
                      placeholder="e.g. Andheri West / Indiranagar"
                      className={`w-full px-3.5 py-2.5 text-sm bg-slate-50/50 border ${
                        errors.preferredArea ? "border-red-500 focus:ring-red-500" : "border-gray-200 focus:border-blue-600 focus:ring-blue-600"
                      } rounded-xl focus:outline-none focus:ring-2 focus:ring-opacity-20 transition-all text-gray-900 placeholder-gray-400`}
                    />
                    {errors.preferredArea && (
                      <p className="mt-1 text-xs text-red-600 font-medium">{errors.preferredArea.message}</p>
                    )}
                  </div>

                  {/* Budget */}
                  <div className="sm:col-span-1">
                    <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1.5">
                      Monthly Budget (₹) <span className="text-red-500">*</span>
                    </label>
                    <input
                      {...register("budget")}
                      type="text"
                      placeholder="e.g. 25,000"
                      className={`w-full px-3.5 py-2.5 text-sm bg-slate-50/50 border ${
                        errors.budget ? "border-red-500 focus:ring-red-500" : "border-gray-200 focus:border-blue-600 focus:ring-blue-600"
                      } rounded-xl focus:outline-none focus:ring-2 focus:ring-opacity-20 transition-all text-gray-900 placeholder-gray-400`}
                    />
                    {errors.budget && (
                      <p className="mt-1 text-xs text-red-600 font-medium">{errors.budget.message}</p>
                    )}
                  </div>
                </div>
              </div>

              {/* Requirement Specifications */}
              <div>
                <h3 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-4 pb-2 border-b border-gray-100 flex items-center gap-2">
                  <Home className="w-3.5 h-3.5" />
                  <span>3. Home Specifications</span>
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                  {/* Flat Type Dropdown */}
                  <div className="sm:col-span-1">
                    <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1.5">
                      Flat Type <span className="text-red-500">*</span>
                    </label>
                    <select
                      {...register("flatType")}
                      className={`w-full px-3.5 py-2.5 text-sm bg-slate-50/50 border ${
                        errors.flatType ? "border-red-500 focus:ring-red-500" : "border-gray-200 focus:border-blue-600 focus:ring-blue-600"
                      } rounded-xl focus:outline-none focus:ring-2 focus:ring-opacity-20 transition-all text-gray-900`}
                    >
                      <option value="1RK">1RK</option>
                      <option value="1BHK">1BHK</option>
                      <option value="2BHK">2BHK</option>
                      <option value="3BHK">3BHK</option>
                    </select>
                    {errors.flatType && (
                      <p className="mt-1 text-xs text-red-600 font-medium">{errors.flatType.message}</p>
                    )}
                  </div>

                  {/* Tenant Type Dropdown */}
                  <div className="sm:col-span-1">
                    <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1.5">
                      Tenant Type <span className="text-red-500">*</span>
                    </label>
                    <select
                      {...register("tenantType")}
                      className={`w-full px-3.5 py-2.5 text-sm bg-slate-50/50 border ${
                        errors.tenantType ? "border-red-500 focus:ring-red-500" : "border-gray-200 focus:border-blue-600 focus:ring-blue-600"
                      } rounded-xl focus:outline-none focus:ring-2 focus:ring-opacity-20 transition-all text-gray-900`}
                    >
                      <option value="Working Professional">Working Professional</option>
                      <option value="Family">Family</option>
                      <option value="Couple">Couple</option>
                      <option value="Student (Boys)">Student (Boys)</option>
                      <option value="Student (Girls)">Student (Girls)</option>
                    </select>
                    {errors.tenantType && (
                      <p className="mt-1 text-xs text-red-600 font-medium">{errors.tenantType.message}</p>
                    )}
                  </div>

                  {/* Move-in Date */}
                  <div className="sm:col-span-1">
                    <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1.5">
                      Move-in Date <span className="text-red-500">*</span>
                    </label>
                    <input
                      {...register("moveInDate")}
                      type="date"
                      className={`w-full px-3.5 py-2.5 text-sm bg-slate-50/50 border ${
                        errors.moveInDate ? "border-red-500 focus:ring-red-500" : "border-gray-200 focus:border-blue-600 focus:ring-blue-600"
                      } rounded-xl focus:outline-none focus:ring-2 focus:ring-opacity-20 transition-all text-gray-900`}
                    />
                    {errors.moveInDate && (
                      <p className="mt-1 text-xs text-red-600 font-medium">{errors.moveInDate.message}</p>
                    )}
                  </div>
                </div>
              </div>

              {/* Additional Requirements Textarea */}
              <div>
                <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1.5">
                  Additional Requirements (Optional)
                </label>
                <textarea
                  {...register("additionalRequirements")}
                  rows={3}
                  placeholder="e.g. Furnished/Unfurnished, Balkony needed, Parking space, Pet-friendly..."
                  className="w-full px-3.5 py-2.5 text-sm bg-slate-50/50 border border-gray-200 rounded-xl focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-600 focus:ring-opacity-20 transition-all text-gray-900 placeholder-gray-400 resize-none"
                />
              </div>

              {/* Submit Button */}
              <div className="pt-4">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center gap-2 px-8 py-4 text-base font-bold text-white bg-blue-600 hover:bg-blue-700 active:bg-blue-800 rounded-xl transition-all shadow-soft hover:shadow-md disabled:opacity-70 disabled:cursor-not-allowed group"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      <span>Submitting Requirement...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                      <span>Submit My Requirement</span>
                    </>
                  )}
                </button>
              </div>

              {/* Privacy Footer Disclaimer */}
              <div className="text-center pt-2">
                <p className="text-xs text-gray-400 font-normal flex items-center justify-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  <span>Your information is protected and strictly shared with verified brokers only.</span>
                </p>
              </div>
            </form>
          </div>
        )}
      </div>
    </section>
  );
}
