import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import ComparisonTable from "@/components/sections/ComparisonTable";
import Pricing from "@/components/sections/Pricing";
import SocialProof from "@/components/sections/SocialProof";
import FAQ from "@/components/sections/FAQ";
import FinalCTA from "@/components/sections/FinalCTA";
import StatsSection from "@/components/sections/StatsSection";
import HowItWorks from "@/components/sections/HowItWorks";
import Services from "@/components/sections/Services";

export default function Page() {
  return (
    <main className="min-h-screen bg-gray-50 text-black">
      <Navbar />
      <Hero />
      <StatsSection />
      <Services />
      <HowItWorks />
      <Pricing />
      <ComparisonTable />
      <SocialProof />
      <FAQ />
      <FinalCTA />
      <Footer />
    </main>
  );
}
