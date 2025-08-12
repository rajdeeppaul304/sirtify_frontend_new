import React from 'react';

export default function UpcomingProjectsHero() {
  return (
    <div className="relative w-full bg-gray-100 min-h-96 overflow-hidden">
      {/* Background circle */}
      <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-96 h-96 bg-orange-200 rounded-full opacity-80" 
           style={{ left: '100px', width: '500px' , height: '500px'  }}></div>
      
      <div className="relative z-10 flex items-center justify-between px-8 py-12 max-w-6xl mx-auto">
        {/* Left content */}
        <div className="flex-1 max-w-md">
          <h1 className="text-4xl font-bold text-gray-900 mb-4 leading-tight">
            Upcoming<br />Projects
          </h1>
          <p className="text-gray-700 mb-8 leading-relaxed">
            Inclusive Support, Mentorship, and Resources for<br />
            Underrepresented Students
          </p>
          <div className="flex gap-4">
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-full font-medium transition-colors">
              Apply Now
            </button>
            <button className="border border-orange-300 text-orange-600 hover:bg-orange-50 px-6 py-3 rounded-full font-medium transition-colors">
              Contact
            </button>
          </div>
        </div>

        {/* Right images section */}
        <div className="flex-1 relative ml-8 h-80">
          {/* Top left image - students working together */}
          <div className="absolute top-0 left-8 w-56 h-36 bg-gray-300 rounded-lg overflow-hidden shadow-lg">
            <img 
                src="/assets/about1.jpg"
alt="Students working together"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Bottom right image - student at computer */}
          <div className="absolute top-24 right-0 w-56 h-40 bg-gray-300 rounded-lg overflow-hidden shadow-lg">
            <img 
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='224' height='160' viewBox='0 0 224 160'%3E%3Crect width='224' height='160' fill='%23e5e7eb'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' fill='%236b7280' font-family='Arial, sans-serif' font-size='12'%3EStudent at Computer%3C/text%3E%3C/svg%3E"
              alt="Student at computer"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Quote bubble - positioned below the left image */}
          <div className="absolute top-40 left-0 bg-white p-3 rounded-lg shadow-lg max-w-64">
            <p className="text-gray-600 text-xs leading-relaxed">
              All the help you can get in one place.<br />
              I feel supported by members and I<br />
              know that I can get any kind of help.
            </p>
            {/* Small white triangle pointer pointing up-right */}
            <div className="absolute -top-2 left-12">
              <div className="w-0 h-0 border-l-4 border-r-4 border-b-8 border-l-transparent border-r-transparent border-b-white"></div>
            </div>
          </div>

          {/* Decorative dots - positioned in the bottom right corner of the right image */}
          <div className="absolute bottom-8 right-4 flex gap-1">
            <div className="w-2 h-2 bg-white rounded-full opacity-80"></div>
            <div className="w-2 h-2 bg-white rounded-full opacity-60"></div>
            <div className="w-2 h-2 bg-white rounded-full opacity-40"></div>
          </div>
        </div>
      </div>
    </div>
  );
}