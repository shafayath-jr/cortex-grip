import FAQSection from "@/components/pages/Home/FAQSection";
import HeroSection from "@/components/pages/Home/HeroSection";
import PricingSection from "@/components/pages/Home/PricingSection";
import StatsMergeSection from "@/components/pages/Home/StatsMergeSection";
import WhatYouCanDo from "@/components/pages/Home/WhatYouCanDo";

export default function Home() {
  return (
    <div className="block min-h-screen">
      <HeroSection />
      <StatsMergeSection />
      <WhatYouCanDo />
      <PricingSection />
      <FAQSection />
    </div>
  );
}
