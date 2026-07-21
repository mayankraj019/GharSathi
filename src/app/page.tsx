import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { TrustSection } from "@/components/TrustSection";
import { HowItWorks } from "@/components/HowItWorks";
import { WhyGharSathi } from "@/components/WhyGharSathi";
import { RequirementForm } from "@/components/RequirementForm";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Sticky Top Navigation */}
      <Navbar />

      {/* Main Page Content */}
      <main className="flex-grow">
        <HeroSection />
        <TrustSection />
        <HowItWorks />
        <WhyGharSathi />
        <RequirementForm />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
