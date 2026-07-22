"use client";

import { useEffect } from "react";
import { X, ShieldCheck, FileText, Handshake } from "lucide-react";

export type LegalModalType = "privacy" | "terms" | "guidelines" | null;

interface LegalModalProps {
  type: LegalModalType;
  onClose: () => void;
}

export function LegalModal({ type, onClose }: LegalModalProps) {
  // Prevent scrolling when modal is open
  useEffect(() => {
    if (type) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [type]);

  if (!type) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200">
      {/* Modal Container */}
      <div
        className="bg-white rounded-2xl border border-gray-200 shadow-2xl w-full max-w-3xl max-h-[85vh] flex flex-col overflow-hidden animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-gray-100 bg-slate-50/50">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
              {type === "privacy" && <ShieldCheck className="w-5 h-5 stroke-[2]" />}
              {type === "terms" && <FileText className="w-5 h-5 stroke-[2]" />}
              {type === "guidelines" && <Handshake className="w-5 h-5 stroke-[2]" />}
            </div>
            <div>
              <h3 className="text-lg font-bold text-gray-900 leading-none mb-1">
                {type === "privacy" && "Privacy Policy"}
                {type === "terms" && "Terms & Conditions"}
                {type === "guidelines" && "Broker Partner Guidelines"}
              </h3>
              <p className="text-xs text-gray-500 font-normal">
                GharSathi Trust &amp; Legal Standard • Last Updated July 2026
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-lg text-gray-400 hover:text-gray-700 hover:bg-gray-100 transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6 text-sm text-gray-600 leading-relaxed font-normal">
          {type === "privacy" && (
            <>
              <section>
                <h4 className="text-base font-bold text-gray-900 mb-2">1. Information We Collect</h4>
                <p>
                  At GharSathi, we prioritize your privacy. We only collect essential details required to fulfill your rental search request:
                </p>
                <ul className="list-disc pl-5 mt-2 space-y-1 text-gray-600">
                  <li>Full Name</li>
                  <li>Contact Phone / WhatsApp Number</li>
                  <li>Email Address</li>
                  <li>Target City &amp; Preferred Locality</li>
                  <li>Monthly Rental Budget &amp; Preferred Flat Type (1RK, 1BHK, 2BHK, 3BHK)</li>
                  <li>Tenant Category (Working Professional, Family, Students, etc.)</li>
                  <li>Expected Move-in Date and custom requirements.</li>
                </ul>
              </section>

              <section>
                <h4 className="text-base font-bold text-gray-900 mb-2">2. How We Use Your Information</h4>
                <p>
                  Your information is exclusively used to match your enquiry with verified property experts operating in your requested locality. Our team reviews your requirement and forwards it to trusted partner brokers who can assist you directly.
                </p>
              </section>

              <section>
                <h4 className="text-base font-bold text-gray-900 mb-2">3. Data Sharing &amp; Anti-Spam Guarantee</h4>
                <p>
                  We strictly <strong>NEVER sell, rent, or trade</strong> your personal information to third-party ad networks, telemarketers, or public databases. Your details are only shared with background-verified real estate brokers matching your specific criteria.
                </p>
              </section>

              <section>
                <h4 className="text-base font-bold text-gray-900 mb-2">4. Data Security</h4>
                <p>
                  All submitted rental enquiries are encrypted and safely stored in secure database infrastructure. Access is restricted to authorized GharSathi personnel and verified broker partners.
                </p>
              </section>

              <section>
                <h4 className="text-base font-bold text-gray-900 mb-2">5. Contact &amp; Grievances</h4>
                <p>
                  For any privacy inquiries or request to remove your data, please contact our privacy compliance team at{" "}
                  <a href="mailto:supportgharsathi@gmail.com" className="text-blue-600 font-semibold underline">
                    supportgharsathi@gmail.com
                  </a>.
                </p>
              </section>
            </>
          )}

          {type === "terms" && (
            <>
              <section>
                <h4 className="text-base font-bold text-gray-900 mb-2">1. Scope of Service</h4>
                <p>
                  GharSathi operates as a smart rental matchmaking platform connecting prospective tenants with verified local property brokers. GharSathi does not own, manage, or directly lease properties, nor do we act as a property landlord.
                </p>
              </section>

              <section>
                <h4 className="text-base font-bold text-gray-900 mb-2">2. User Responsibilities</h4>
                <p>
                  Users agree to provide true, accurate, and current information when submitting a rental requirement. Submitting fraudulent, misleading, or spam enquiries is strictly prohibited.
                </p>
              </section>

              <section>
                <h4 className="text-base font-bold text-gray-900 mb-2">3. Zero Tenant Platform Fee</h4>
                <p>
                  Submitting a rental requirement on GharSathi is <strong>100% free</strong> for tenant seekers. GharSathi charges zero platform fees or hidden convenience charges to tenants.
                </p>
              </section>

              <section>
                <h4 className="text-base font-bold text-gray-900 mb-2">4. Broker Interactions &amp; Agreements</h4>
                <p>
                  Property transactions, lease agreements, security deposits, and property inspections are finalized directly between the tenant and the respective property owner or verified broker. Users are advised to inspect properties personally before making any financial commitments.
                </p>
              </section>

              <section>
                <h4 className="text-base font-bold text-gray-900 mb-2">5. Limitation of Liability</h4>
                <p>
                  While GharSathi thoroughly verifies partner brokers, GharSathi is not liable for disputes arising from lease terms between property owners, brokers, and tenants.
                </p>
              </section>
            </>
          )}

          {type === "guidelines" && (
            <>
              <section>
                <h4 className="text-base font-bold text-gray-900 mb-2">1. Partner Verification Standards</h4>
                <p>
                  Every property broker associated with GharSathi undergoes background verification, local market performance check, and adherence to professional real estate ethics.
                </p>
              </section>

              <section>
                <h4 className="text-base font-bold text-gray-900 mb-2">2. Strict Anti-Spam &amp; Privacy Rule</h4>
                <p>
                  Partner brokers are bound by strict contractual guidelines:
                </p>
                <ul className="list-disc pl-5 mt-2 space-y-1 text-gray-600">
                  <li>Brokers must ONLY contact the user regarding properties matching their submitted requirements.</li>
                  <li>Brokers must NOT share or resell customer phone numbers to external marketing lists.</li>
                  <li>Brokers must maintain courteous, transparent, and prompt communication.</li>
                </ul>
              </section>

              <section>
                <h4 className="text-base font-bold text-gray-900 mb-2">3. Fast Response Expectation</h4>
                <p>
                  Verified brokers are expected to review assigned enquiries and reach out to the customer with suitable, genuine property options within <strong>30 minutes</strong> of assignment.
                </p>
              </section>

              <section>
                <h4 className="text-base font-bold text-gray-900 mb-2">4. Quality Assurance &amp; Blacklisting</h4>
                <p>
                  GharSathi continuously monitors customer feedback. Any broker found engaging in misrepresentation, charging unapproved fees, or spamming tenants will be immediately removed from our network.
                </p>
              </section>
            </>
          )}
        </div>

        {/* Footer Actions */}
        <div className="p-4 sm:p-6 border-t border-gray-100 bg-slate-50/50 flex justify-end">
          <button
            onClick={onClose}
            className="px-6 py-2.5 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-xl transition-colors shadow-soft cursor-pointer"
          >
            I Understand
          </button>
        </div>
      </div>
    </div>
  );
}
