import { useState } from "react";
import { ChevronDown, CheckCircle2 } from "lucide-react";
import girlImage from "/assets/bg-girl.png"; // Replace with your actual girl image
import logoImage from "/assets/logo.png"; // Replace with your orange bird logo

export default function App() {
  const [moreOpen, setMoreOpen] = useState(false);

  return (
    <div className="bg-[#fff] font-sans">
      {/* Navbar */}
      <nav className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <img src={logoImage} alt="Logo" className="w-10 h-10" />
          <span className="text-xl font-bold">SPP</span>
        </div>

        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-700">
          <a href="#">Home</a>
          <a href="#">Features</a>
          <a href="#">Pricing</a>
          <a href="#">About</a>
          <div
            className="relative"
            onMouseEnter={() => setMoreOpen(true)}
            onMouseLeave={() => setMoreOpen(false)}
          >
            <button className="flex items-center gap-1">
              More
              <ChevronDown size={14} />
            </button>
            {moreOpen && (
              <div className="absolute top-full mt-2 bg-white shadow-md rounded-md py-2 w-40">
                <a href="#" className="block px-4 py-2 hover:bg-gray-50">
                  Blog
                </a>
                <a href="#" className="block px-4 py-2 hover:bg-gray-50">
                  Careers
                </a>
              </div>
            )}
          </div>
        </div>

        <button className="px-5 py-2 bg-orange-500 text-white rounded-full text-sm font-medium">
          Join Now
        </button>
      </nav>

      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-2 items-center gap-12 relative">
        {/* Text Content */}
        <div>
          <h1 className="text-5xl font-bold leading-tight text-[#111]">
            Unlock Your <span className="text-orange-500">Potential</span>{" "}
            with SPP
          </h1>
          <p className="mt-4 text-gray-600 text-lg">
            Discover a world of opportunities. Our platform is designed to help
            you grow, learn, and achieve your dreams.
          </p>

          <p className="mt-6 text-sm font-semibold text-orange-500 uppercase tracking-wider">
            Join SPP Now
          </p>

          {/* Buttons */}
          <div className="mt-3 flex flex-wrap gap-3">
            <button className="px-6 py-3 bg-orange-500 text-white rounded-full text-sm font-medium">
              Get Started
            </button>
            <button className="px-6 py-3 border border-gray-300 rounded-full text-sm font-medium">
              Learn More
            </button>
            <button className="px-6 py-3 border border-gray-300 rounded-full text-sm font-medium">
              Contact Us
            </button>
          </div>
        </div>

        {/* Image + Card */}
        <div className="relative flex justify-center">
          {/* Orange Abstract Shape */}
          <div className="absolute -z-10 w-[420px] h-[420px] bg-orange-500 rounded-[100%] blur-2xl opacity-90 top-12"></div>

          {/* Girl Image */}
          <img
            src={girlImage}
            alt="Girl"
            className="relative z-10 w-[300px] h-auto"
          />

          {/* Total Income Card */}
          <div className="absolute bottom-8 left-0 bg-white shadow-lg rounded-xl p-4 flex items-center gap-3 w-[200px]">
            <CheckCircle2 className="text-purple-600" size={28} />
            <div>
              <p className="text-xs text-gray-500">Total Income</p>
              <p className="text-lg font-bold text-gray-800">$12,500</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
