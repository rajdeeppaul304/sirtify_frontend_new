import { CERTIFICATIONS } from '../../constants/data';
import { ACADEMIC_PARTNERS } from '../../constants/data';
import { MEMBERSHIP_RECOGNITION } from '../../constants/data';

import corpLogo1 from "/assets/home/Logos/sonyLogo.svg";
import corpLogo2 from "/assets/home/Logos/hpLogo.webp";
import corpLogo3 from "/assets/home/Logos/adobeLogo.webp";
import corpLogo4 from "/assets/home/Logos/adobeLogo.webp";
import corpLogo5 from "/assets/home/Logos/amazonLogo.png";
import corpLogo6 from "/assets/home/Logos/dropbox.svg";
import corpLogo7 from "/assets/home/Logos/firefoxLogo.png";
import corpLogo8 from "/assets/home/Logos/intelLogo.png";
import corpLogo9 from "/assets/home/Logos/ytLogo.webp";
import corpLogo10 from "/assets/home/Logos/netFlixLogo.webp";
import corpLogo11 from "/assets/home/Logos/IBM.webp";
import corpLogo12 from "/assets/home/Logos/sapLogo.jpeg";
import corpLogo13 from "/assets/home/Logos/zoomLogo.png";
import corpLogo14 from "/assets/home/Logos/walmartLogo.png";
import corpLogo15 from "/assets/home/Logos/cocacola.png";
import corpLogo16 from "/assets/home/Logos/fedexLogo.png";
import corpLogo17 from "/assets/home/Logos/fbLogo.jpg";
import corpLogo18 from "/assets/home/Logos/oracleLogo.jpg";
import corpLogo19 from "/assets/home/Logos/xLogo.webp";
import corpLogo20 from "/assets/home/Logos/GoogleLogo.png";
import corpLogo21 from "/assets/home/Logos/mircrosoftLogo.jpg";
import corpLogo22 from "/assets/home/Logos/linkiedLogo.webp";
import { Morquee } from '../ui/Morquee';




export const PartnersRecognitionSection = () => {

  const corpLogos = [
    corpLogo1,
    corpLogo2,
    corpLogo3,
    corpLogo4,
    corpLogo5,
    corpLogo6,
    corpLogo7,
    corpLogo8,
    corpLogo9,
    corpLogo10,
    corpLogo11,
    corpLogo12,
    corpLogo13,
    corpLogo14,
    corpLogo15,
    corpLogo16,
    corpLogo17,
    corpLogo18,
    corpLogo19,
    corpLogo20,
    corpLogo21,
    corpLogo22,
  ];
  return (
    <section className="w-full bg-white pt-0 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        {/* CORPORATE PARTNERS Section */}
        <div className="text-center mb-6">
          <h3 className="text-2xl font-bold text-gray-900 uppercase tracking-wider mb-6">
            CORPORATE PARTNERS
          </h3>
          <div className="flex justify-center gap-8 sm:gap-30 w-full">
            <div className="relative py-8">
              <div className="">
                <Morquee logos={corpLogos} />
              </div>
            </div>
          </div>
        </div>

        {/* MEMBERSHIP & RECOGNITION Section */}
 
        <div className="text-center relative z-10">

          <div className="flex justify-center">
            <div className="bg-white rounded-4xl shadow-lg p-4 border border-gray-100 w-full max-w-4xl relative -mb-24">
              <h6 className="text-1xl font-bold text-gray-900 uppercase tracking-wider mb-6">
                MEMBERSHIP & RECOGNITION
              </h6>
              <div className="flex justify-center items-center gap-16">
                {MEMBERSHIP_RECOGNITION.map((cert) => (
                  <div key={cert.id} className="flex flex-col items-center text-center">
                    <div className="w-35 h-16 flex items-center justify-center mb-1">
                      <img
                        src={cert.logo}
                        alt={cert.name}
                        className="h-20 w-auto object-contain max-w-full"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.style.display = 'none';
                          const fallback = target.nextElementSibling as HTMLElement;
                          if (fallback) fallback.style.display = 'block';
                        }}
                      />
                      {/* Fallback text */}
                      <div className={`text-base font-bold ${cert.color} hidden`}>
                        {cert.name}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
