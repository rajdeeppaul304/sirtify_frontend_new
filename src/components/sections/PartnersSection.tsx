import { RotatingGlobe } from '../ui/RotatingGlobe';
import { ACADEMIC_PARTNERS } from '../../constants/data';

export const PartnersSection = () => {
  return (
    <section className="relative w-full bg-white py-20 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col justify-center items-center gap-20">
                           {/* Left Side - Large Wireframe Globe */}
                 <div className="flex-1 flex justify-center">
                   <div className="absolute left-[-10%] transform-3d top-[-30%] w-[700px] h-[700px]">
                     <RotatingGlobe />
                   </div>
                 </div>
          
          {/* Right Side - Partner Categories */}
          <div className="flex flex-col justify-center items-center space-y-16">
                               {/* Main Heading */}
                   <div className="text-center" style={{ display: 'flex', justifyContent: 'center' }}>
                     <h2 className="text-5xl font-bold text-gray-900 mb-16 w-[80%]">
                       Trusted By Leading Organisations..
                     </h2>
                   </div>

                               {/* ACADEMIC PARTNERS */}
                   <div className="text-left">
                     <h3 className="text-2xl text-center font-bold text-gray-900 uppercase tracking-wider mb-12">
                       ACADEMIC PARTNERS
                     </h3>
                     <div className="flex gap-16">
                       {ACADEMIC_PARTNERS.map((partner) => (
                         <div key={partner.id} className="flex flex-col items-center">
                           <div className="w-32 h-20 flex items-center justify-center mb-3">
                             <img 
                               src={partner.logo} 
                               alt={partner.name}
                               className="h-16 w-auto object-contain"
                               onError={(e) => {
                                 const target = e.target as HTMLImageElement;
                                 target.style.display = 'none';
                                 const fallback = target.nextElementSibling as HTMLElement;
                                 if (fallback) fallback.style.display = 'block';
                               }}
                             />
                           </div>
                           {/* AWS has orange swoosh */}
                           {partner.id === 'aws-academic' && (
                             <div className="w-16 h-1.5 bg-orange-500 rounded-full"></div>
                           )}
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
