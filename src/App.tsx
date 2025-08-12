import { Header, HeroSection, AboutSection, ProgramTracksSection, SuccessStoriesSection, CertificationsSection, PartnersSection, PartnersRecognitionSection, ImpactNumbersSection, Footer } from './components';

export default function App() {
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
