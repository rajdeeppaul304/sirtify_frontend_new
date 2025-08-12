import { Header } from "../components/layout/Header";
import { ContactSupportSection } from "../components/sections/ContactSupportSection";
import { ContactFeaturesBanner } from "../components/sections/ContactFeaturesBanner";
import { EmailSupportSection } from "../components/sections/EmailSupportSection";
import { PhoneSupportSection } from "../components/sections/PhoneSupportSection";
import { SupportServicesSection } from "../components/sections/SupportServicesSection";
import { Footer } from "../components";

export const ContactUsPage = () => {
  return (
    <div className="bg-[#FEF7F1] font-sans min-h-screen overflow-x-hidden">
      <Header />
      <ContactSupportSection />
      <ContactFeaturesBanner />
      <EmailSupportSection />
      <PhoneSupportSection />
      <SupportServicesSection />
      <Footer />
    </div>
  );
};
