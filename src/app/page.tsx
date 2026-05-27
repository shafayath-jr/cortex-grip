import HeroSection from "@/components/pages/Home/HeroSection";
import StatsMergeSection from "@/components/pages/Home/StatsMergeSection";

export default function Home() {
  return (
    <div className="block min-h-screen">
      <HeroSection />
      <StatsMergeSection />
      {/* dummy div */}
      <div className="h-screen w-full bg-brand-primary-500"></div>
    </div>
  );
}
