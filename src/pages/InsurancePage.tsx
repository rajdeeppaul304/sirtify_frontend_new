import React from 'react'
import { CoverageAtAGlanceSection, Footer, Header, HowToFileClaimSection, InsuranceCTASection, InsuranceHeroSection, InsuranceNetworkSection, InsuranceSupportFAQSection, PhaseByPhaseCoverageSection } from '../components'

const InsurancePage = () => {
  return (
    <div className="bg-[#FEF7F1] font-sans min-h-screen overflow-x-hidden">
      <Header />
      
      <InsuranceHeroSection />
      <CoverageAtAGlanceSection />
      <PhaseByPhaseCoverageSection />
      <InsuranceNetworkSection />
      <HowToFileClaimSection/>
      <InsuranceSupportFAQSection/>
      <InsuranceCTASection/>
      <Footer />
    </div>
  )
}

export default InsurancePage