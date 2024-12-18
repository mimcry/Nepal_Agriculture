import React from 'react';

const LiveFoodPrices = () => {
  // In a real application, this data would be fetched from an API
  const foodPrices = [
    { name: 'Rice', price: 85, unit: 'per kg' },
    { name: 'Tomatoes', price: 60, unit: 'per kg' },
    { name: 'Potatoes', price: 40, unit: 'per kg' },
    { name: 'Chicken', price: 350, unit: 'per kg' },
    { name: 'Milk', price: 70, unit: 'per liter' },
  ];

  return (
    <div className="bg-white py-16 px-4">
      <div className="container max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">
          Live Food Prices
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {foodPrices.map((item, index) => (
            <div key={index} className="bg-gray-100 rounded-lg p-6 shadow-md">
              <h3 className="text-xl font-semibold mb-2">{item.name}</h3>
              <p className="text-2xl text-green-600 font-bold">
                Rs. {item.price}{' '}
                <span className="text-sm text-gray-600">{item.unit}</span>
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LiveFoodPrices;
