import { Phone, CheckCircle2, TrendingUp, ArrowRight } from 'lucide-react';
import { SPP_OPTIONS } from '../../constants/data';
import heroImage from "/assets/hero-image.png";
import star from '/assets/star.png';

export const HeroSection = () => {
  return (
    <div className='w-full flex justify-between items-start pt-[100px] overflow-hidden'>
      {/* Text Content */}
      <div className="relative w-full lg:max-w-[700px] lg:mx-10 flex flex-col justify-start items-start gap-10">
        
        <div className='relative'>
          <img className='absolute w-[50px] h-[50px]' src={star} alt="Star" />
        </div>

        <h1 className="text-[4rem] lg:text-[4.5rem] leading-[100%] font-semibold font-open-sans text-black">
          Unlock Your Potential Launch Your <span className='text-[#FE7642]'>Career</span>
        </h1>
        <div className='flex flex-col md:flex-row justify-start gap-[18px] items-center'>

          <div className="bg-[#284050] text-white rounded-full text-base font-semibold flex items-center justify-between gap-3 hover:bg-gray-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 w-[226px] h-[64px] p-1">
            <button className='border border-gray-border rounded-full w-full h-full flex justify-between pl-6 pr-1 py-5 items-center gap-2 font-open-sans'>
              Book A Call
              <div className='rounded-full p-3.5 bg-[#bdbdbd] flex justify-center items-center'>
                <Phone size={20} />
              </div>
            </button>
            
          </div>

          <p className="text-[#b1ada9] font-inter font-normal text-[.875rem] leading-[136%] w-[34%]">
            Accelerate Your Growth with Hands-on Projects and Personalised Career Support from Start to Success.
          </p>

        </div>

        {/* Join SPP Now Section */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-gray-700 mb-4">Join SPP Now</h2>
          
          <div className="flex flex-row gap-4">
            {SPP_OPTIONS.map((option) => (
              <button
                key={option.id}
                className="px-6 py-3 bg-gray-100 text-gray-700 rounded-lg text-sm font-medium flex items-center justify-between gap-3 min-w-[140px] hover:bg-gray-200 transition-all duration-300 hover:shadow-md group hover:scale-105"
              >
                <span>{option.label}</span>
                <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform duration-300" />
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Right Side with Image and Abstract Shapes */}
      <div className="relative flex justify-center items-center h-[600px]">
        <img className='hidden lg:flex object-cover' src={heroImage} alt="Woman Holding Book" />
        


        {/* Location Tag */}
        <div className="absolute bottom-12 right-12 bg-gray-800 text-white px-4 py-2 rounded-xl text-sm font-medium shadow-lg hover:shadow-xl transition-all duration-300">
          From Guntur to Germany
        </div>
      </div>
    </div>
  );
};
