import { ArrowRight } from 'lucide-react';
import { SUCCESS_STORIES } from '../../constants/data';
import { SuccessStoryCard } from '../ui/SuccessStoryCard';

export const SuccessStoriesSection = () => {
  return (
    <section className="w-full bg-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-left mb-16 w-full">
          <h2 className="text-orange-500 text-sm font-semibold uppercase tracking-wider mb-3">
            Success Stories
          </h2>
          <h3 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
            Real People, Real Results,
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
        <div className="flex items-center justify-end gap-4">
          <button  className='bg-orange-500 duration-200 py-[7px] px-5 rounded-full text-white hover:bg-orange-300 w-[157px] h-[53px]'>
            View More
          </button>
          <button 
            // variant="secondary" 
            // size="lg"
            className="w-14 h-14 rounded-full bg-[#191619] p-0 flex items-center justify-center"
          >
            <ArrowRight className='text-white' size={24} />
          </button>
        </div>
      </div>
    </section>
  );
};
