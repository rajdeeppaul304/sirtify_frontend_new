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
  Footer,
} from "./components";
import { AboutUs } from "./pages/AboutUs";
<<<<<<< Updated upstream
=======
import { MediaCampaign } from "./pages/MediaCampaign";

import CancellationPolicyPage from "./pages/CancellationPolicy";
import CookiesPolicyPage from "./pages/CookiesPolicy";
import PrivacyPolicyPage from "./pages/PrivacyPolicy";
import RefundPolicyPage from "./pages/RefundPolicy";

>>>>>>> Stashed changes
import { LearnersPage } from "./pages/LearnersPage";
import { CertificationsPage } from "./pages/CertificationsPage";
import { SirtifyInternationalPage } from "./pages/SirtifyInternationalPage";
import { ContactUsPage } from "./pages/ContactUsPage";
import Program from "./pages/Program";
// import Program from "./pages/Program";

export default function App() {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname);
    };

    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  const navigateTo = (path: string) => {
    window.history.pushState({}, "", path);
    setCurrentPath(path);
  };

  // Expose navigateTo globally for Header component
  useEffect(() => {
    (window as any).navigateTo = navigateTo;
  }, []);

  if (currentPath === "/about") {
    return <AboutUs />;
  }

  if (currentPath === "/learners") {
    return <LearnersPage />;
  }

<<<<<<< Updated upstream
  if (currentPath === "/program") {
    return <Program />;
=======
  if (currentPath.startsWith("/program")) {
    // Extract variant from the path
    const variant = currentPath.split("-")[1] || null;

    return <Program variant_url={variant} />;
>>>>>>> Stashed changes
  }

  if (currentPath === "/certifications") {
    return <CertificationsPage />;
  }

  if (currentPath === "/sirtify-international") {
    return <SirtifyInternationalPage />;
  }

  if (currentPath === "/spp") {
    return <Program />;
  }

  if (currentPath === "/contact") {
    return <ContactUsPage />;
  }

<<<<<<< Updated upstream
=======
  if (currentPath === "/cancellation-policy") {
    return <CancellationPolicyPage />;
  }

  if (currentPath === "/cookies-policy") {
    return <CookiesPolicyPage />;
  }

  if (currentPath === "/privacy-policy") {
    return <PrivacyPolicyPage />;
  }

  if (currentPath === "/refund-policy") {
    return <RefundPolicyPage />;
  }

  if (currentPath === "/media-and-campaign") {
    return <MediaCampaign />;
  }

>>>>>>> Stashed changes
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
