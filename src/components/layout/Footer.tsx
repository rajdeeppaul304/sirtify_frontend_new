import { Facebook, Twitter, Youtube, Mail, Phone, MessageCircle, HelpCircle } from 'lucide-react';
import { useEffect } from 'react';

export const Footer = () => {
useEffect(() => {
    // Knock Knock widget loader
    const kkId = 'knock-knock-widget';
    if (!document.getElementById(kkId)) {
      (window as any).company_id = '6896e165537c28a8a9cbddb9';
      const script = document.createElement('script');
      script.id = kkId;
      script.src = 'https://api.knock-knockapp.com/widget/widget.js';
      script.async = true;
      document.head.appendChild(script);
    }
  }, []);

useEffect(() => {

  

  const scriptId = 'sj-widget';

  if (!document.getElementById(scriptId)) {
    const rC: string[] = [];
    const elements = document.querySelectorAll('[class*="stjr-"]');
    elements.forEach(el => {
      el.classList.forEach(cl => {
        if (/^stjr-/.test(cl)) {
          rC.push(cl);
        }
      });
    });

    const uRC = [...new Set(rC)];

    const js = document.createElement('script');
    js.id = scriptId;
    js.src =
      'https://www.sitejabber.com/js/v2/689457ff46956/widgets.js' +
      (uRC.length ? '?widget-classes=' + uRC.join('|') : '?widget-classes=stjr-base');

    js.onload = js.onreadystatechange = function () {
      if (!this.readyState || this.readyState === 'complete') {
        // Script loaded
      }
    };

    const t = document.getElementsByTagName('script')[0];
    if (t && t.parentNode) {
      t.parentNode.insertBefore(js, t);
    }
  }
}, []);



  return (
    <footer className="w-full bg-white sm:bg-[#FEF7F1] pt-16 pb-8">
      <div className="w-full relative ">
        {/* Orange separator line */}
        <div className="w-full h-0.5 bg-orange-500 mb-16"></div>

        <img className='absolute w-[150px] h-[150px] top-0 right-0' src="/assets/spring.png" alt="Spring" />

        {/* Main footer content */}
        <div className="max-w-7xl mx-auto px-6  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          {/* Left Section: Get in Touch with Sirtifai */}
          <div className="lg:col-span-2">
            {/* Logo and Heading */}
            <div className="flex items-center flex-col gap-3 sm:gap-0 sm:flex-row mb-6">
              <div className="sm:w-12 sm:h-12 w-20 h-20 bg-white rounded-lg flex items-center justify-center mr-4 sm:shadow-md overflow-hidden">
                <img 
                  src="/assets/logo.png" 
                  alt="Sirtifai Logo"
                  className="sm:w-8 sm:h-8  object-contain"
                  onError={(e) => {
                    // Fallback to text if image fails to load
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    const fallback = target.nextElementSibling as HTMLElement;
                    if (fallback) fallback.style.display = 'flex';
                  }}
                />
                {/* Fallback text */}
                {/* <div className="w-8 h-8 bg-orange-500 rounded-md flex items-center justify-center text-white font-bold text-sm hidden">
                  S
                </div> */}
              </div>
              <h3 className="text-sm sm:text-xl sm:font-bold text-gray-800">
                Get in Touch with Sirtifai
              </h3>
            </div>

{/* Mobile version (combined pill) */}
<div className="flex sm:hidden w-full max-w-lg mb-8">
  <div className="flex w-full rounded-full overflow-hidden border border-orange-200 shadow-sm">
    <input
      type="email"
      placeholder="Enter your email"
      className="flex-1 px-4 py-3 text-sm border-none focus:outline-none focus:ring-0"
    />
    <button className="bg-orange-500 rounded-full text-white px-6 py-3 text-sm font-semibold hover:bg-orange-600 transition-colors">
      Build Future
    </button>
    
  </div>
</div>

{/* Desktop version (separate input & button) */}
<div className="hidden sm:flex flex-row gap-4 mb-8">
  <input
    type="email"
    placeholder="Enter your email"
    className="flex-1 px-4 py-3 rounded-full border-0 shadow-md focus:outline-none focus:ring-2 focus:ring-orange-500"
  />
  <button className="bg-orange-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-orange-600 transition-colors shadow-md">
    Build Future
  </button>
</div>


            {/* Social Media Icons */}
            <div className="flex justify-center sm:justify-start gap-4 mb-8">
              <div className="sm:w-10 sm:h-10 w-12 h-12 bg-black rounded-full flex items-center justify-center text-white hover:bg-gray-800 transition-colors cursor-pointer">
                <Facebook size={21} />
              </div>
              <div className="sm:w-10 sm:h-10 w-12 h-12 bg-black rounded-full flex items-center justify-center text-white hover:bg-gray-800 transition-colors cursor-pointer">
                <Twitter size={21} />
              </div>
              <div className="sm:w-10 sm:h-10 w-12 h-12 bg-black rounded-full flex items-center justify-center text-white hover:bg-gray-800 transition-colors cursor-pointer">
                <Youtube size={21} />
              </div>
            </div>

            {/* Recognitions */}
            <div className="text-sm text-gray-500">
              Recognitions: FERPA Compliance. | ISO: 9001:2015 | GST Registered
            </div>
          </div>


<div className='w-full flex sm:gap-20 flex-col-reverse sm:flex-row sm:space-x-28'>

          {/* Legal Column */}
          <div>
            <h4 className="text-xl sm:text-lg font-semibold sm:font-bold text-gray-800 mb-3 sm:mb-6">Legal</h4>
            <div className="space-y-3 sm:w-[14vw] ">
              {/* <a href="#" className="block text-gray-600 hover:text-gray-800 transition-colors">
                Terms & Conditions
              </a> */}
              <a href="cancellation-policy" className="block text-gray-600 hover:text-gray-800 transition-colors">
                Cancellation Policy
              </a>
              <a href="cookies-policy" className="block text-gray-600 hover:text-gray-800 transition-colors">
                Cookies Policy
              </a>
              <a href="privacy-policy" className="block text-gray-600 hover:text-gray-800 transition-colors">
                Privacy Policy
              </a>
              <a href="refund-policy" className="block text-gray-600 hover:text-gray-800 transition-colors">
                Refunds
              </a>
            </div>
          </div>

          {/* Contact Column */}
          <div>
            <h4 className="text-xl sm:text-lg font-semibold sm:font-bold text-gray-800 mb-3 sm:mb-6">Contact</h4>
            <div className="space-y-3 mb-6 sm:mb-0">
              <a href="#" className="flex items-center text-gray-600 hover:text-gray-800 transition-colors">
                <Mail size={16} className="mr-2" />
                Emails
              </a>
              <a href="#" className="flex items-center text-gray-800 hover:text-gray-800 transition-colors">
                <Phone size={16} className="mr-2" />
                Phone
              </a>
              {/* <a href="#" className="flex items-center text-gray-600 hover:text-gray-800 transition-colors">
                <MessageCircle size={16} className="mr-2" />
                WhatsApp
              </a> */}
              <a href="#" className="flex items-center text-gray-600 hover:text-gray-800 transition-colors">
                <HelpCircle size={16} className="mr-2" />
                Help Center
              </a>
            </div>
          </div>

          {/* Quick Links Column */}
          <div>
            <h4 className="text-xl sm:text-lg sm:w-28 font-semibold sm:font-bold text-gray-800 mb-3 sm:mb-6">Quick Links</h4>
            <div className="space-y-3 mb-6 sm:mb-0">
              <a href="#" className="block text-gray-600 hover:text-gray-800 transition-colors">Home</a>
              <a href="#" className="block text-gray-600 hover:text-gray-800 transition-colors">About Us</a>
              <a href="#" className="block text-gray-600 hover:text-gray-800 transition-colors">Programs</a>
              <a href="#" className="block text-gray-600 hover:text-gray-800 transition-colors">Contact</a>
              <a href="#" className="block text-gray-600 hover:text-gray-800 transition-colors">Careers</a>
            </div>
          </div>
          </div>



        </div>
        <hr />
<div className="stjr-badge hidden sm:block"></div>

        {/* Copyright */}
        <div className=" text-center text-gray-500 pt-4 sm:pt-0 text-sm">
          ©Sirtifai 2025
        </div>
        <div className="self-stretch py-6 opacity-70 justify-center text-center text-slate-700 text-[10px] font-normal font-['Inter'] leading-none"> Recognitions: FERPA Compliance. | ISO : 9001:2015 | GST Registered</div>
      </div>

    </footer>
  );
};
