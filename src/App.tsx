import { useState } from "react";
import { ChevronDown, CheckCircle2, Phone, TrendingUp, ArrowRight, Handshake, Settings, BarChart3, Share2 } from "lucide-react";
import girlImage from "/assets/bg-girl.png";
import logoImage from "/assets/logo.png";
import about1Image from "/assets/about1.jpg";
import about2Image from "/assets/about2.jpg";

export default function App() {
  const [moreOpen, setMoreOpen] = useState(false);

  return (
    <div className="bg-[#FEF7F1] font-sans min-h-screen overflow-x-hidden">
      {/* Navbar */}
      <nav className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center border-b border-gray-100">
        <div className="flex items-center gap-3">
          <img src={logoImage} alt="Logo" className="w-10 h-10 drop-shadow-sm" />
          <span className="text-xl font-bold text-gray-800">SPP</span>
        </div>

        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-700">
          <a href="#" className="text-orange-500 font-semibold relative">
            Home
            <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-orange-500 rounded-full"></div>
          </a>
          <a href="#" className="hover:text-orange-500 transition-colors">About</a>
          <a href="#" className="hover:text-orange-500 transition-colors">Programs</a>
          <a href="#" className="hover:text-orange-500 transition-colors">Learners</a>
          <div
            className="relative"
            onMouseEnter={() => setMoreOpen(true)}
            onMouseLeave={() => setMoreOpen(false)}
          >
            <button className="flex items-center gap-1 hover:text-orange-500 transition-colors">
              More
              <ChevronDown size={14} className="transition-transform duration-200" />
            </button>
            {moreOpen && (
              <div className="absolute top-full mt-2 bg-white shadow-xl rounded-xl py-2 w-40 border border-gray-100 z-50">
                <a href="#" className="block px-4 py-2 hover:bg-orange-50 hover:text-orange-500 transition-colors">
                  Blog
                </a>
                <a href="#" className="block px-4 py-2 hover:bg-orange-50 hover:text-orange-500 transition-colors">
                  Careers
                </a>
              </div>
            )}
          </div>
        </div>

        <div className="flex items-center gap-3">
          <button className="px-5 py-2 border border-orange-500 text-orange-500 rounded-full text-sm font-medium hover:bg-orange-50 transition-colors">
            Login
          </button>
          <button className="px-5 py-2 bg-orange-500 text-white rounded-full text-sm font-medium hover:bg-orange-600 transition-colors shadow-lg hover:shadow-xl">
            Sign Up
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 lg:grid-cols-2 items-center gap-16 relative">
        {/* Text Content */}
        <div className="relative">
          {/* Orange star icon above headline */}
          <div className="absolute -top-8 left-0 w-6 h-6 bg-gradient-to-br from-orange-400 to-orange-500 rounded-full shadow-lg animate-pulse"></div>
          
          <h1 className="text-5xl font-bold leading-tight text-gray-900">
            Unlock Your Potential
            <br />
            Launch Your <span className="text-orange-500 bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">Career</span>
          </h1>
          
          <p className="mt-6 text-gray-600 text-lg leading-relaxed max-w-lg">
            Accelerate Your Growth with Hands-on Projects and Personalised Career Support from Start to Success.
          </p>

          <button className="mt-8 px-8 py-4 bg-[#374151] text-white rounded-xl text-base font-semibold flex items-center gap-3 hover:bg-gray-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105">
            <Phone size={20} />
            Book A Call
          </button>

          {/* Join SPP Now Section - Now on same screen */}
          <div className="mt-12">
            <h2 className="text-2xl font-bold text-gray-700 mb-4">Join SPP Now</h2>
            
            <div className="flex flex-row gap-4">
              <button className="px-6 py-3 bg-gray-100 text-gray-700 rounded-lg text-sm font-medium flex items-center justify-between gap-3 min-w-[140px] hover:bg-gray-200 transition-all duration-300 hover:shadow-md group hover:scale-105">
                <span>SPP Int</span>
                <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform duration-300" />
              </button>
              <button className="px-6 py-3 bg-gray-100 text-gray-700 rounded-lg text-sm font-medium flex items-center justify-between gap-3 min-w-[140px] hover:bg-gray-200 transition-all duration-300 hover:shadow-md group hover:scale-105">
                <span>SPP Freelance</span>
                <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform duration-300" />
              </button>
              <button className="px-6 py-3 bg-gray-100 text-gray-700 rounded-lg text-sm font-medium flex items-center justify-between gap-3 min-w-[140px] hover:bg-gray-200 transition-all duration-300 hover:shadow-md group hover:scale-105">
                <span>SPP Student</span>
                <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform duration-300" />
              </button>
            </div>
          </div>
        </div>

        {/* Right Side with Image and Abstract Shapes */}
        <div className="relative flex justify-center items-center h-[600px]">
          {/* Abstract organic shapes with wavy black lines */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative w-[600px] h-[600px]">
              {/* Large organic shape - more organic and flowing */}
              <div className="absolute top-0 right-0 w-[380px] h-[380px] bg-gradient-to-br from-[#f4d4c8] to-[#f8e4d9] rounded-[60%_40%_30%_70%/60%_30%_70%_40%] opacity-90 transform rotate-12 animate-pulse"></div>
              
              {/* Additional organic shapes for depth */}
              <div className="absolute top-20 right-20 w-32 h-32 bg-[#f4d4c8] rounded-[70%_30%_50%_50%/30%_70%_50%_50%] opacity-60 transform -rotate-12"></div>
              <div className="absolute bottom-20 left-20 w-24 h-24 bg-[#f4d4c8] rounded-[40%_60%_60%_40%/50%_50%_50%_50%] opacity-50"></div>
              
              {/* Wavy black lines - more organic and flowing */}
              <svg className="absolute inset-0 w-full h-full" viewBox="0 0 600 600">
                <path
                  d="M 50 100 Q 150 50 250 100 T 450 150 Q 400 200 350 250 T 250 300 Q 150 350 50 300 T 0 250 Q 50 200 100 150 T 150 100"
                  fill="none"
                  stroke="#111"
                  strokeWidth="4"
                  opacity="0.25"
                  strokeLinecap="round"
                />
                <path
                  d="M 100 50 Q 200 0 300 50 T 500 100 Q 450 150 400 200 T 300 250 Q 200 300 100 250 T 0 200 Q 50 150 100 100 T 150 50"
                  fill="none"
                  stroke="#111"
                  strokeWidth="3"
                  opacity="0.2"
                  strokeLinecap="round"
                />
                <path
                  d="M 150 150 Q 250 100 350 150 T 550 200 Q 500 250 450 300 T 350 350 Q 250 400 150 350 T 0 300 Q 50 250 100 200 T 150 150"
                  fill="none"
                  stroke="#111"
                  strokeWidth="2"
                  opacity="0.15"
                  strokeLinecap="round"
                />
              </svg>
            </div>
          </div>

          {/* Girl Image */}
          <img
            src={girlImage}
            alt="Young woman with book"
            className="relative z-10 w-[360px] h-auto drop-shadow-2xl"
          />

          {/* Total Income Card */}
          <div className="absolute top-16 left-12 bg-white shadow-2xl rounded-2xl p-5 w-[220px] border border-gray-100 hover:shadow-3xl transition-all duration-300">
            <div className="flex items-center justify-between mb-3">
              <p className="text-sm text-gray-500 font-medium">Total Income</p>
              <CheckCircle2 className="text-purple-600" size={18} />
            </div>
            <div className="flex items-center gap-3">
              <p className="text-xl font-bold text-gray-800">$245.00</p>
              <TrendingUp className="text-green-600" size={18} />
            </div>
          </div>

          {/* Location Tag */}
          <div className="absolute bottom-12 right-12 bg-gray-800 text-white px-4 py-2 rounded-xl text-sm font-medium shadow-lg hover:shadow-xl transition-all duration-300">
            From Guntur to Germany
          </div>
        </div>
      </div>

      {/* About Section */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          {/* Left Side - About Content */}
          <div className="space-y-10">
            {/* Header */}
            <div>
              <p className="text-orange-500 text-sm font-semibold uppercase tracking-wider mb-3">About Sirtifai</p>
              <h2 className="text-4xl font-bold text-gray-900 mb-3">Sirtifai Is India's Only</h2>
              <h3 className="text-6xl font-bold text-gray-900 leading-tight">
                Skill <span className="text-orange-500">•</span> Practice <span className="text-orange-500">•</span> Progress Platform
              </h3>
            </div>

            {/* Call to Action Button */}
            <button className="px-8 py-4 bg-orange-500 text-white rounded-xl text-lg font-semibold flex items-center gap-3 hover:bg-orange-600 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105">
              <Share2 size={20} />
              Transform Your Career With Sirtifai
            </button>

            {/* User Testimonials */}
            <div className="bg-gray-100 rounded-2xl p-6">
              <div className="flex items-center gap-6">
                {/* James Canon */}
                <div className="flex items-center gap-3">
                  <img 
                    src={about1Image} 
                    alt="James Canon" 
                    className="w-16 h-16 rounded-full object-cover border-2 border-blue-400 shadow-lg"
                  />
                  <div>
                    <p className="font-bold text-gray-900">James Canon</p>
                    <p className="text-teal-600 text-sm">React Developer</p>
                    <p className="text-gray-500 text-xs italic">'Worked at Microsoft'</p>
                  </div>
                </div>

                {/* Stacy Larin */}
                <div className="flex items-center gap-3">
                  <img 
                    src={about2Image} 
                    alt="Stacy Larin" 
                    className="w-16 h-16 rounded-full object-cover border-2 border-blue-400 shadow-lg"
                  />
                  <div>
                    <p className="font-bold text-gray-900">Stacy Larin</p>
                    <p className="text-teal-600 text-sm">UI/UX Designer</p>
                    <p className="text-gray-500 text-xs italic">'Worked at Targer'</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Three Step Process */}
          <div className="space-y-10">
            {/* Step 1 */}
            <div className="flex items-start gap-5">
              <div className="flex-shrink-0">
                <div className="w-14 h-14 bg-gray-200 rounded-full flex items-center justify-center">
                  <Handshake className="text-gray-600" size={28} />
                </div>
              </div>
              <div>
                <p className="text-orange-500 text-sm font-semibold uppercase tracking-wider mb-2">Step 1</p>
                <h4 className="text-2xl font-bold text-gray-900 mb-3">Skill Training</h4>
                <p className="text-gray-600 leading-relaxed text-base">
                  Plan, collaborate, and publishing your content that drives meaningful engagement and growth for your brand
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex items-start gap-5">
              <div className="flex-shrink-0">
                <div className="w-14 h-14 bg-gray-200 rounded-full flex items-center justify-center">
                  <Settings className="text-gray-600" size={28} />
                </div>
              </div>
              <div>
                <p className="text-orange-500 text-sm font-semibold uppercase tracking-wider mb-2">Step 2</p>
                <h4 className="text-2xl font-bold text-gray-900 mb-3">Paid Practice</h4>
                <p className="text-gray-600 leading-relaxed text-base">
                  Analyze your performance and create goegeous report
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex items-start gap-5">
              <div className="flex-shrink-0">
                <div className="w-14 h-14 bg-gray-200 rounded-full flex items-center justify-center">
                  <BarChart3 className="text-gray-600" size={28} />
                </div>
              </div>
              <div>
                <p className="text-orange-500 text-sm font-semibold uppercase tracking-wider mb-2">Step 3</p>
                <h4 className="text-2xl font-bold text-gray-900 mb-3">Lifetime Progress</h4>
                <p className="text-gray-600 leading-relaxed text-base">
                  Quiuckly navigate you anda engage with your adience
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
