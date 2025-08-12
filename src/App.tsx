import { useState, useEffect } from "react";
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
import { LearnersPage } from "./pages/LearnersPage";
import { CertificationsPage } from "./pages/CertificationsPage";
import { SirtifyInternationalPage } from "./pages/SirtifyInternationalPage";

export default function App() {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname);
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigateTo = (path: string) => {
    window.history.pushState({}, '', path);
    setCurrentPath(path);
  };

  // Expose navigateTo globally for Header component
  useEffect(() => {
    (window as any).navigateTo = navigateTo;
  }, []);

  if (currentPath === '/about') {
    return <AboutUs />;
  }
  
          if (currentPath === '/learners') {
          return <LearnersPage />;
        }

        if (currentPath === '/certifications') {
          return <CertificationsPage />;
        }

        if (currentPath === '/sirtify-international') {
          return <SirtifyInternationalPage />;
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
