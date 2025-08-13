import { Phone, ArrowRight } from 'lucide-react';
import { SPP_OPTIONS } from '../../constants/data';
import heroImage from "/assets/home/girl.png";
import star from '/assets/star.png';

export const HeroSection = () => {
  return (
    <div className="w-full flex flex-col lg:flex-row justify-between items-start pt-[20px] lg:pt-[100px] overflow-hidden">
      
      {/* Text Content */}
      <div className="relative w-full lg:max-w-[700px] lg:mx-10 flex flex-col justify-start items-start gap-8 px-13 xl:px-0">
        
        <div className="w-full flex flex-col gap-10">
          <div className="relative w-full">
            <img
              className="absolute right-[10%] lg:right-[-1%] top-[12%] lg:top-[-8%] w-[24px] h-[24px] lg:w-[30px] lg:h-[30px]"
              src={star}
              alt="Star"
            />

            <h1 className="text-[2rem] sm:text-[2.5rem] lg:text-[4rem] leading-tight font-semibold pt-16 lg:pt-0 font-open-sans text-black">
              Unlock Your Potential <br /> Launch Your{" "}
              <span className="text-[#FE7642]">Career</span>
            </h1>
          </div>

          <div className="flex flex-col sm:flex-row justify-start gap-5 items-start sm:items-center">
            {/* Button */}
            <div className="bg-[#284050] text-white rounded-full text-sm sm:text-base font-semibold flex items-center justify-between gap-3 hover:bg-gray-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 w-[55vw] lg:w-full sm:w-[226px] h-[56px] sm:h-[64px] p-1">
              <button className="border border-gray-border rounded-full w-[55vw] lg:w-full h-full flex justify-between pl-4 pr-1 py-4 sm:pl-6 sm:py-5 items-center gap-2 font-open-sans">
                Book A Call
                <div className="rounded-full p-3 bg-[#bdbdbd] flex justify-center items-center">
                  <Phone size={18} />
                </div>
              </button>
            </div>

            {/* Paragraph */}
            <p className="text-[#b1ada9] font-inter font-normal text-[0.875rem] leading-[136%] sm:w-[60%] w-full">
              Accelerate Your Growth with Hands-on Projects and Personalised Career Support from Start to Success.
            </p>
          </div>
        </div>

        {/* Join SPP Now Section */}
        <div className="flex flex-col justify-start items-start gap-4 sm:gap-6 mt-6">
          <h2 className="text-[0.875rem] font-inter font-normal leading-[120%] text-[#191619]">
            Join SPP Now
          </h2>

          <div className="flex  flex-col sm:flex-row  pb-12 lg:pb-0 gap-3 sm:gap-4 w-full">
            {SPP_OPTIONS.map((option) => (
              <button
                key={option.id}
                className="px-4 py-4 sm:px-6 sm:py-[25px] bg-white text-gray-700 rounded-lg text-sm font-medium flex items-center justify-between gap-3 sm:min-w-[140px] hover:bg-gray-50 transition-all duration-300 hover:shadow-md group hover:scale-105"
              >
                <span className="text-[#FE7642]">{option.label}</span>
                <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform duration-300" />
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Right Side with Image */}
      <div className="relative flex justify-center items-center mt-10 lg:mt-0 h-auto lg:h-[500px] w-full lg:w-auto">
        <img
          className="object-contain max-w-[90%] sm:max-w-[600px] lg:flex"
          src={heroImage}
          alt="Woman Holding Book"
        />
      </div>
    </div>
  );
};
