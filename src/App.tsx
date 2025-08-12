import { Routes, Route } from "react-router-dom";
import {
  Header,
  HeroSection,
  AboutSection,
  ProgramTracksSection,
  SuccessStoriesSection,
} from "./components";
import { AboutUs } from "./pages/AboutUs";
import { Footer } from "./components/layout/Footer";

export default function App() {
  return (
    <div className="bg-[#FEF7F1] font-sans min-h-screen overflow-x-hidden">
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header />
              <HeroSection />
              <AboutSection />
              <ProgramTracksSection />
              <SuccessStoriesSection />
              <Footer />
            </>
          }
        />
        <Route path="/about" element={<AboutUs />} />
      </Routes>
    </div>
  );
}
