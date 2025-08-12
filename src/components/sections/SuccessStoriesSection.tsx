import { ArrowRight } from 'lucide-react';
import { SUCCESS_STORIES } from '../../constants/data';
import { Button } from '../ui/Button';
import { SuccessStoryCard } from '../ui/SuccessStoryCard';

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
            <SuccessStoryCard key={story.id} story={story} />
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
