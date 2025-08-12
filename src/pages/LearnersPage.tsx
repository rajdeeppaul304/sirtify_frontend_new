import { Header } from "../components/layout/Header";
import { LearnersHeroSection } from "../components/sections/LearnersHeroSection";
import { WhoCanJoinSection } from "../components/sections/WhoCanJoinSection";
import { ToolsSection } from "../components/sections/ToolsSection";
import { PortfolioCertificationSection } from "../components/sections/PortfolioCertificationSection";
import { LearningJourneySection } from "../components/sections/LearningJourneySection";
import { TestimonialsSection } from "../components/sections/TestimonialsSection";
import { CTABannerSection } from "../components/sections/CTABannerSection";
import { Footer } from "../components";

export const LearnersPage = () => {
  return (
    <div className="bg-[#FEF7F1] font-sans min-h-screen overflow-x-hidden">
      <Header />
      <LearnersHeroSection />
      <WhoCanJoinSection />
      <ToolsSection />
      <PortfolioCertificationSection />
      <LearningJourneySection />
      <TestimonialsSection />
      <CTABannerSection />
      <Footer />
    </div>
  );
};
