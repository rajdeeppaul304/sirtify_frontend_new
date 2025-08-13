import { Header } from "../components/layout/Header";
import { Footer } from "../components/layout/Footer";
import  FeaturedLearnerStories from "../components/sections/FeaturedLearnerStories";
import  IncomeTrackerWall from "../components/sections/IncomeTrackerWall";


export const MediaCampaign = () => {
  return (
    <div className="bg-[#FEF7F1] font-sans min-h-screen overflow-x-hidden">
      <Header />
      <FeaturedLearnerStories />
      <IncomeTrackerWall />
      <Footer />
    </div>
  );
};
