import React from 'react';

const Articles = () => {
  const articles = [
    {
      title: 'Sustainable Farming Practices',
      excerpt: 'Learn about eco-friendly farming methods...',
      image: '/placeholder.svg',
    },
    {
      title: 'Market Trends in Nepali Agriculture',
      excerpt: 'Discover the latest trends in agricultural markets...',
      image: '/placeholder.svg',
    },
    {
      title: 'Success Stories of Local Farmers',
      excerpt: 'Read inspiring stories of farmers who have thrived...',
      image: '/placeholder.svg',
    },
  ];

  return (
    <div className="py-16 max-w-7xl mx-auto">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Latest Articles</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <img
                src={article.image}
                alt={article.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{article.title}</h3>
                <p className="text-gray-600 mb-4">{article.excerpt}</p>
                <button className="text-blue-500 hover:text-blue-600 font-semibold">
                  Read More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Articles;
