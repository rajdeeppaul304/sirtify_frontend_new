import { Play, ArrowRight } from 'lucide-react';
import { SUCCESS_STORIES } from '../../constants/data';
import { Button } from '../ui/Button';

export const SuccessStoriesSection = () => {
  return (
    <section className="w-full bg-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-orange-500 text-sm font-semibold uppercase tracking-wider mb-3">
            Success Stories
          </h2>
          <h3 className="text-4xl font-bold text-gray-900 leading-tight">
            Real People, Real Results,<br />
            Career And Life Transformed.
          </h3>
        </div>

        {/* Success Stories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {SUCCESS_STORIES.map((story) => (
            <div key={story.id} className="bg-gray-50 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              {/* Location Tag */}
              <div className="flex justify-end mb-4">
                <span className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-xs font-medium">
                  {story.location}
                </span>
              </div>

              {/* Image with Play Button Overlay */}
              <div className="relative mb-6">
                <div className="w-full h-48 bg-gray-300 rounded-xl flex items-center justify-center">
                  {/* Placeholder for image - you can replace with actual images */}
                  <div className="w-16 h-16 bg-gray-400 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm font-medium">Photo</span>
                  </div>
                </div>
                
                {/* Play Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg border-2 border-gray-200">
                    <Play size={24} className="text-gray-800 ml-1" />
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="space-y-4">
                <h4 className="text-xl font-bold text-gray-900">{story.name}</h4>
                <p className="text-gray-600 text-sm leading-relaxed italic">
                  "{story.quote}"
                </p>
                <p className="text-gray-500 text-xs font-medium">
                  {story.designation}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action Buttons */}
        <div className="flex items-center justify-center gap-4">
          <Button variant="primary" size="lg">
            View More
          </Button>
          <Button 
            variant="secondary" 
            size="lg"
            className="w-14 h-14 rounded-full p-0 flex items-center justify-center"
          >
            <ArrowRight size={24} />
          </Button>
        </div>
      </div>
    </section>
  );
};
