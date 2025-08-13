import { CERTIFICATIONS } from '../../constants/data';
import { ACADEMIC_PARTNERS } from '../../constants/data';
import { MEMBERSHIP_RECOGNITION } from '../../constants/data';

export const PartnersRecognitionSection = () => {
  return (
    <section className="w-full bg-white pt-0 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        {/* CORPORATE PARTNERS Section */}
        <div className="text-center mb-6">
          <h3 className="text-2xl font-bold text-gray-900 uppercase tracking-wider mb-6">
            CORPORATE PARTNERS
          </h3>
          <div className="flex justify-center gap-8 w-full">
            {CERTIFICATIONS.map((cert) => (
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

        {/* MEMBERSHIP & RECOGNITION Section */}
        <div className="text-center">
          <h3 className="text-2xl font-bold text-gray-900 uppercase tracking-wider mb-6">
            MEMBERSHIP & RECOGNITION
          </h3>
          <div className="flex justify-center gap-8 w-full">
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
