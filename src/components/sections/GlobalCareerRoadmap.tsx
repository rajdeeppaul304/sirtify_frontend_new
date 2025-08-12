import { GraduationCap, Briefcase, Settings, FileText, Building, IndianRupee, Users, MessageSquare, Globe, FileCheck, Plane, Headphones, Check } from 'lucide-react';

interface Phase {
  id: number;
  title: string;
  months: string;
  activities: {
    icon: React.ComponentType<{ size?: number; className?: string }>;
    text: string;
  }[];
  milestones: string[];
  additionalOutcomes?: string[];
}

const ROADMAP_PHASES: Phase[] = [
  {
    id: 1,
    title: "Skill Development",
    months: "Months 1-9",
    activities: [
      { icon: GraduationCap, text: "Industry-focused skill training with global standards" },
      { icon: Briefcase, text: "Portfolio development with international projects" },
      { icon: Settings, text: "NSQF certification and global skill assessment" },
      { icon: FileText, text: "International resume preparation" }
    ],
    milestones: [
      "Complete skill certification",
      "Build international portfolio",
      "Global resume preparation"
    ],
    additionalOutcomes: [
      "Real client project experience",
      "Earn while you prepare",
      "Mock interviews with global companies"
    ]
  },
  {
    id: 2,
    title: "Practice Phase",
    months: "Months 10-15",
    activities: [
      { icon: Building, text: "Real client projects with international exposure" },
      { icon: IndianRupee, text: "Earn ₹15K-35K/month while preparing for global roles" },
      { icon: Users, text: "Global interview preparation and mock sessions" },
      { icon: MessageSquare, text: "Cultural and language preparation for target countries" }
    ],
    milestones: []
  },
  {
    id: 3,
    title: "Progress to Global Placement",
    months: "Months 16-18",
    activities: [
      { icon: Globe, text: "Direct placement with international employers" },
      { icon: FileCheck, text: "Complete visa application support" },
      { icon: Plane, text: "Relocation assistance and guidance" },
      { icon: Headphones, text: "Continuous support during initial months abroad" }
    ],
    milestones: [
      "International job offer",
      "Successful visa application",
      "Smooth relocation process"
    ]
  }
];

export const GlobalCareerRoadmap = () => {
  return (
    <section className="w-full bg-[#FEF7F1] py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            18-Month Global Career Roadmap
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Transforming Careers Through Skills, Practice, And Progress
          </p>
        </div>

        {/* Roadmap Timeline */}
        <div className="relative">
          {/* Vertical Timeline Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-orange-300 transform -translate-x-1/2 hidden lg:block"></div>
          
          <div className="space-y-16">
            {ROADMAP_PHASES.map((phase, index) => (
              <div key={phase.id} className="relative">
                {/* Phase Number Circle */}
                <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center text-white text-xl font-bold border-4 border-white shadow-lg z-10 hidden lg:flex">
                  {phase.id}
                </div>
                
                {/* Phase Content */}
                <div className={`grid grid-cols-1 lg:grid-cols-2 gap-8 ${index % 2 === 0 ? 'lg:grid-flow-row' : 'lg:grid-flow-row-dense'}`}>
                  {/* Left Side - Activities */}
                  <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-100">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{phase.title}</h3>
                    <p className="text-orange-500 font-semibold mb-6">{phase.months}</p>
                    
                    <div className="space-y-4">
                      {phase.activities.map((activity, activityIndex) => (
                        <div key={activityIndex} className="flex items-start">
                          <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                            <activity.icon size={20} className="text-orange-500" />
                          </div>
                          <span className="text-gray-700 leading-relaxed">{activity.text}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Right Side - Milestones */}
                  <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-100">
                    <h4 className="text-xl font-bold text-gray-900 mb-6">Key Milestones</h4>
                    
                    {phase.milestones.length > 0 ? (
                      <div className="space-y-3">
                        {phase.milestones.map((milestone, milestoneIndex) => (
                          <div key={milestoneIndex} className="flex items-center">
                            <Check size={20} className="text-green-500 mr-3 flex-shrink-0" />
                            <span className="text-gray-700">{milestone}</span>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div className="text-gray-400 italic">Milestones to be defined</div>
                    )}
                  </div>
                </div>

                {/* Additional Outcomes (for Phase 1) */}
                {phase.additionalOutcomes && (
                  <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
                    {phase.additionalOutcomes.map((outcome, outcomeIndex) => (
                      <div key={outcomeIndex} className="flex items-center justify-center bg-white rounded-lg p-4 shadow-md border border-gray-100">
                        <div className="w-6 h-6 bg-green-500 rounded flex items-center justify-center mr-3">
                          <Check size={14} className="text-white" />
                        </div>
                        <span className="text-gray-700 text-sm font-medium">{outcome}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
