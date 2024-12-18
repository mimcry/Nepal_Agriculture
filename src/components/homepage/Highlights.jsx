import React from 'react';
import { TrendingUp, Globe, Sprout } from 'lucide-react';

const Highlights = () => {
  const highlights = [
    {
      title: 'Direct Sales',
      description:
        'Connect farmers directly with buyers, eliminating middlemen and increasing profits.',
      icon: TrendingUp,
      gradient: 'from-blue-400 to-blue-600',
    },
    {
      title: 'Nationwide Reach',
      description:
        'Expand market access across Nepal, bringing local produce to a wider audience.',
      icon: Globe,
      gradient: 'from-green-400 to-green-600',
    },
    {
      title: 'Local Growth',
      description:
        'Foster agricultural development in communities, supporting sustainable practices.',
      icon: Sprout,
      gradient: 'from-yellow-400 to-yellow-600',
    },
  ];

  return (
    <section className=" py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-12">
          Empowering Nepali Agriculture
        </h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {highlights.map((highlight, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md overflow-hidden transform transition duration-500 hover:scale-105"
            >
              <div
                className={`h-2 bg-gradient-to-r ${highlight.gradient}`}
              ></div>
              <div className="p-8">
                <div
                  className={`inline-block p-3 rounded-full bg-gradient-to-br ${highlight.gradient} text-white mb-4`}
                >
                  <highlight.icon size={24} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {highlight.title}
                </h3>
                <p className="text-gray-600">{highlight.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Highlights;
