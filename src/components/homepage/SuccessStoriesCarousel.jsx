import React, { useState } from 'react';

const SuccessStoriesCarousel = () => {
  const stories = [
    {
      name: 'Ram Sharma',
      story: 'Increased my income by 40% through direct sales.',
    },
    {
      name: 'Sita Thapa',
      story: 'Found new markets for my organic vegetables.',
    },
    {
      name: 'Hari Gurung',
      story: 'Expanded my dairy business across the country.',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextStory = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % stories.length);
  };

  const prevStory = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + stories.length) % stories.length
    );
  };

  return (
    <div className="py-16 px-4">
      <div className="container max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Success Stories</h2>
        <div className="bg-white rounded-lg shadow-md p-8 max-w-2xl mx-auto">
          <p className="text-xl mb-4">"{stories[currentIndex].story}"</p>
          <p className="text-gray-600 font-semibold">
            - {stories[currentIndex].name}
          </p>
        </div>
        <div className="flex justify-center mt-6">
          <button
            onClick={prevStory}
            className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded-l"
          >
            Previous
          </button>
          <button
            onClick={nextStory}
            className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded-r"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default SuccessStoriesCarousel;
