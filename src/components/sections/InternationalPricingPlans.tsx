import { Check, X } from 'lucide-react';

interface PricingPlan {
  id: string;
  title: string;
  price: string;
  description: string;
  includedFeatures: string[];
  excludedFeatures?: string[];
  isPopular?: boolean;
  buttonText: string;
}

const PRICING_PLANS: PricingPlan[] = [
  {
    id: 'basic',
    title: 'Basic',
    price: '$59,000',
    description: 'Essential support for your international career journey',
    includedFeatures: [
      'Complete skill development program',
      'Practice phase with real projects',
      'NSQF certification',
      'Basic international resume preparation',
      'Job application guidance'
    ],
    excludedFeatures: [
      'Direct job sourcing',
      'Visa support'
    ],
    buttonText: 'Select Basic Plan'
  },
  {
    id: 'pro',
    title: 'Pro',
    price: '$1,18,000',
    description: 'Enhanced support with job sourcing and interview preparation',
    includedFeatures: [
      'Everything in Basic plan',
      'Advanced portfolio development',
      'Direct job sourcing with partners',
      'Interview preparation with industry experts',
      'Cultural training for target countries',
      'Basic visa application guidance'
    ],
    excludedFeatures: [
      'Complete visa support package'
    ],
    isPopular: true,
    buttonText: 'Select Pro Plan'
  },
  {
    id: 'elite',
    title: 'Elite',
    price: '$1,77,000',
    description: 'Comprehensive support from training to relocation',
    includedFeatures: [
      'Everything in Pro plan',
      'Premium job sourcing with direct employer connections',
      'Complete visa support package',
      'Legal documentation assistance',
      'Relocation support services',
      'Dedicated international placement manager',
      '6-month post-placement support'
    ],
    buttonText: 'Select Elite Plan'
  }
];

export const InternationalPricingPlans = () => {
  return (
    <section className="w-full bg-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Choose Your International Journey Plan
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Select the plan that best fits your global career aspirations and budget. All plans include our core 18-month roadmap.
          </p>
        </div>

        {/* Pricing Plans Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PRICING_PLANS.map((plan) => (
            <div key={plan.id} className={`relative bg-white rounded-2xl shadow-lg border-2 hover:shadow-xl transition-shadow ${
              plan.isPopular ? 'border-orange-500 scale-105' : 'border-gray-100'
            }`}>
              
              {/* Popular Badge */}
              {plan.isPopular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-orange-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                    Most Popular
                  </div>
                </div>
              )}

              {/* Plan Header */}
              <div className="p-8 text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.title}</h3>
                <div className="text-4xl font-bold text-gray-900 mb-2">{plan.price}</div>
                <p className="text-gray-600 text-sm">one-time</p>
                <p className="text-gray-700 mt-4 leading-relaxed">{plan.description}</p>
              </div>

              {/* Features List */}
              <div className="px-8 pb-8">
                <h4 className="font-semibold text-gray-900 mb-4">Included Features:</h4>
                <div className="space-y-3 mb-6">
                  {plan.includedFeatures.map((feature, index) => (
                    <div key={index} className="flex items-start">
                      <Check size={20} className="text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 text-sm leading-relaxed">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Excluded Features (if any) */}
                {plan.excludedFeatures && plan.excludedFeatures.length > 0 && (
                  <>
                    <h4 className="font-semibold text-gray-900 mb-4">Not Included:</h4>
                    <div className="space-y-3 mb-6">
                      {plan.excludedFeatures.map((feature, index) => (
                        <div key={index} className="flex items-start">
                          <X size={20} className="text-red-500 mr-3 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700 text-sm leading-relaxed">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </>
                )}

                {/* Call to Action Button */}
                <button className="w-full bg-orange-500 text-white py-3 px-6 rounded-lg font-semibold hover:bg-orange-600 transition-colors shadow-md hover:shadow-lg">
                  {plan.buttonText}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
