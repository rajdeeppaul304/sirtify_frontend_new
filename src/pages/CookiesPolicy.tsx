import { Header } from "../components/layout/Header";
import { Footer } from "../components/layout/Footer";
import CancellationPolicy from "../components/policies/CookiesPolicy";

// This is the page component
const CancellationPolicyPage = () => {
  return (
    <div className="bg-[#FEF7F1] font-sans min-h-screen overflow-x-hidden">
      <Header />
      <CancellationPolicy />
      <Footer />
    </div>
  );
};

export default CancellationPolicyPage;
