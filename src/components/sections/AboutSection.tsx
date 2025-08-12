import { Share2 } from 'lucide-react';
import { USERS, STEPS } from '../../constants/data';

export const AboutSection = () => {
  return (
    <section className="w-full bg-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          {/* Left Side - About Content */}
          <div className="space-y-10">
            {/* Header */}
            <div>
              <p className="text-orange-500 text-sm font-semibold uppercase tracking-wider mb-3">About Sirtifai</p>
              <h2 className="text-4xl font-bold text-gray-900 mb-3">Sirtifai Is India's Only</h2>
              <h3 className="text-6xl font-bold text-gray-900 leading-tight">
                Skill <span className="text-orange-500">•</span> Practice <span className="text-orange-500">•</span> Progress Platform
              </h3>
            </div>

            {/* Call to Action Button */}
            <button className="px-8 py-4 bg-orange-500 text-white rounded-xl text-lg font-semibold flex items-center gap-3 hover:bg-orange-600 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105">
              <Share2 size={20} />
              Transform Your Career With Sirtifai
            </button>

            {/* User Testimonials */}
            <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-lg">
              <div className="flex items-center gap-6">
                {USERS.map((user) => (
                  <div key={user.id} className="flex items-center gap-3">
                    <img 
                      src={user.image} 
                      alt={user.name} 
                      className={`w-16 h-16 rounded-full object-cover border-2 ${user.borderColor} shadow-lg`}
                    />
                    <div>
                      <p className="font-bold text-gray-900">{user.name}</p>
                      <p className="text-teal-600 text-sm">{user.role}</p>
                      <p className="text-gray-500 text-xs italic">{user.company}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Side - Three Step Process */}
          <div className="space-y-10">
            {STEPS.map((step) => {
              const IconComponent = step.icon;
              return (
                <div key={step.id} className="flex items-start gap-5">
                  <div className="flex-shrink-0">
                    <div className="w-14 h-14 bg-gray-200 rounded-full flex items-center justify-center">
                      <IconComponent className="text-gray-600" size={28} />
                    </div>
                  </div>
                  <div>
                    <p className="text-orange-500 text-sm font-semibold uppercase tracking-wider mb-2">Step {step.id}</p>
                    <h4 className="text-2xl font-bold text-gray-900 mb-3">{step.title}</h4>
                    <p className="text-gray-600 leading-relaxed text-base">
                      {step.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
