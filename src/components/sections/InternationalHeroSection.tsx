import { Download, Star } from 'lucide-react';

export const InternationalHeroSection = () => {
  return (
    <section className="w-full py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - Text Content and CTA */}
          <div>
            {/* Headline with Star Icon */}
            <div className="mb-8">
              <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-6 tracking-tight leading-tight">
                Your Global Career In Just 18 Months
                <span className="inline-block ml-3">
                  <div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center">
                    <Star size={16} className="text-white fill-current" />
                  </div>
                </span>
              </h1>
              
              <p className="text-xl text-gray-700 leading-relaxed font-normal">
                A comprehensive roadmap to international opportunities with complete visa support and placement assistance.
              </p>
            </div>

            {/* Call-to-Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              {/* Start Your Global Career Button */}
              <button className="px-8 py-4 bg-gray-800 text-white rounded-lg font-semibold text-lg hover:bg-gray-900 transition-colors shadow-md hover:shadow-lg">
                Start Your Global Career
              </button>

              {/* Download Brochure Button */}
              <button className="px-8 py-4 bg-orange-500 text-white rounded-lg font-semibold text-lg hover:bg-orange-600 transition-colors shadow-md hover:shadow-lg flex items-center gap-2">
                <Download size={20} />
                Download Brochure
              </button>
            </div>
          </div>

          {/* Right Side - Combined/Overlapping Images */}
          <div className="relative">
            {/* Main Large Image */}
            <div className="relative">
              <img
                src="/assets/international/int1.png"
                alt="International Career Opportunities"
                className="w-full h-auto rounded-lg shadow-lg"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                  const fallback = target.nextElementSibling as HTMLElement;
                  if (fallback) fallback.style.display = 'block';
                }}
              />
              {/* Fallback if image fails to load */}
              <div className="hidden w-full h-64 bg-gray-200 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gray-400 rounded-full mx-auto mb-4"></div>
                  <p className="text-gray-600">International Career Image</p>
                </div>
              </div>
            </div>

            {/* Smaller Second Image - Overlapping the bottom */}
            <div className="absolute bottom-0 right-0 w-3/4 transform translate-y-1/4">
              <img
                src="/assets/international/int2.png"
                alt="Global Opportunities"
                className="w-full h-auto rounded-lg shadow-lg border-4 border-white"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                  const fallback = target.nextElementSibling as HTMLElement;
                  if (fallback) fallback.style.display = 'block';
                }}
              />
              {/* Fallback if image fails to load */}
              <div className="hidden w-full h-32 bg-gray-200 rounded-lg flex items-center justify-center border-4 border-white">
                <div className="text-center">
                  <div className="w-12 h-12 bg-gray-400 rounded-full mx-auto mb-2"></div>
                  <p className="text-gray-600 text-sm">Global Opportunities</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
