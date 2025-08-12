import { Header, HeroSection, AboutSection, ProgramTracksSection, SuccessStoriesSection } from './components';

export default function App() {
  return (
    <div className="bg-[#FEF7F1] font-sans min-h-screen overflow-x-hidden">
      <Header />
      <HeroSection />
      <AboutSection />
      <ProgramTracksSection />
      <SuccessStoriesSection />
    </div>
  );
}
