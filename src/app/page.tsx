import HeroSection from "@/components/pages/Home/HeroSection";
import StatsMergeSection from "@/components/pages/Home/StatsMergeSection";
import PricingSection from "@/components/pages/Home/PricingSection";

export default function Home() {
  return (
    <div className="block min-h-screen">
      <HeroSection />
      <StatsMergeSection />
      <PricingSection />
    </div>
  );
}
