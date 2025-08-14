import { CERTIFICATIONS } from '../../constants/data';
import { ACADEMIC_PARTNERS } from '../../constants/data';
import { MEMBERSHIP_RECOGNITION } from '../../constants/data';

import corpLogo1 from "../../../public/assets/home/Logos/sonyLogo.svg";
import corpLogo2 from "../../../public/assets/home/Logos/hpLogo.webp";
import corpLogo3 from "../../../public/assets/home/Logos/adobeLogo.webp";
import corpLogo4 from "../../../public/assets/home/Logos/adobeLogo.webp";
import corpLogo5 from "../../../public/assets/home/Logos/amazonLogo.png";
import corpLogo6 from "../../../public/assets/home/Logos/dropbox.svg";
import corpLogo7 from "../../../public/assets/home/Logos/firefoxLogo.png";
import corpLogo8 from "../../../public/assets/home/Logos/intelLogo.png";
import corpLogo9 from "../../../public/assets/home/Logos/ytLogo.webp";
import corpLogo10 from "../../../public/assets/home/Logos/netFlixLogo.webp";
import corpLogo11 from "../../../public/assets/home/Logos/IBM.webp";
import corpLogo12 from "../../../public/assets/home/Logos/sapLogo.jpeg";
import corpLogo13 from "../../../public/assets/home/Logos/zoomLogo.png";
import corpLogo14 from "../../../public/assets/home/Logos/walmartLogo.png";
import corpLogo15 from "../../../public/assets/home/Logos/cocacola.png";
import corpLogo16 from "../../../public/assets/home/Logos/fedexLogo.png";
import corpLogo17 from "../../../public/assets/home/Logos/fbLogo.jpg";
import corpLogo18 from "../../../public/assets/home/Logos/oracleLogo.jpg";
import corpLogo19 from "../../../public/assets/home/Logos/xLogo.webp";
import corpLogo20 from "../../../public/assets/home/Logos/GoogleLogo.png";
import corpLogo21 from "../../../public/assets/home/Logos/mircrosoftLogo.jpg";
import corpLogo22 from "../../../public/assets/home/Logos/linkiedLogo.webp"
 



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
                  <div className="flex animate-marquee space-x-24">
                    {corpLogos.map((src, i) => (
                      <div
                        key={i}
                        className="flex items-center justify-center flex-shrink-0 min-w-[120px]"
                      >
                        <img
                          src={src}
                          alt={`Partner ${i + 1}`}
                          className="h-16 w-auto opacity-80 object-contain"
                        />
                      </div>
                    ))}
                  </div>
              
                </div>
          </div>
        </div>

        {/* MEMBERSHIP & RECOGNITION Section */}
        <div className="text-center">
          <h3 className="text-2xl font-bold text-gray-900 uppercase tracking-wider mb-6">
            MEMBERSHIP & RECOGNITION
          </h3>
          <div className="flex justify-center gap-8 sm:gap-30 w-full">
            {MEMBERSHIP_RECOGNITION.map((cert) => (
              <div key={cert.id} className="flex flex-col items-center flex-1 max-w-48">
                <div className="w-40 h-24 flex items-center justify-center mb-3">
                  <img 
                    src={cert.logo} 
                    alt={cert.name}
                    className="h-20 w-auto object-contain"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      const fallback = target.nextElementSibling as HTMLElement;
                      if (fallback) fallback.style.display = 'block';
                    }}
                  />
                  {/* Fallback text */}
                  <div className={`text-xl font-bold ${cert.color} hidden`}>
                    {cert.name}
                  </div>
                </div>
                {/* AWS has orange swoosh */}
                {cert.id === 'aws' && (
                  <div className="w-16 h-1.5 bg-orange-500 rounded-full"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
