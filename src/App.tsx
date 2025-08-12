import {
  Header,
  HeroSection,
  AboutSection,
  ProgramTracksSection,
  SuccessStoriesSection,
  CertificationsSection,
  PartnersSection,
  PartnersRecognitionSection,
  ImpactNumbersSection,
  Footer
} from "./components";
import { AboutUs } from "./pages/AboutUs";

export default function App() {
  // Simple routing logic for single page app
  const currentPath = window.location.pathname;
  
  if (currentPath === '/about') {
    return <AboutUs />;
  }
  
  // Default landing page
  return (
    <div className="bg-[#FEF7F1] font-sans min-h-screen overflow-x-hidden">
      <Header />
      <HeroSection />
      <AboutSection />
      <ProgramTracksSection />
      <SuccessStoriesSection />
      <CertificationsSection />
      <PartnersSection />
      <PartnersRecognitionSection />
      <ImpactNumbersSection />
      <Footer />
    </div>
  );
}
