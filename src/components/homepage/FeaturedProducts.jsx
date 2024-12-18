import React from 'react';

const FeaturedProducts = () => {
  const products = [
    { name: 'Fresh Apples', price: 'Rs. 150/kg', image: '/placeholder.svg' },
    { name: 'Organic Tomatoes', price: 'Rs. 80/kg', image: '/placeholder.svg' },
    {
      name: 'Mountain Honey',
      price: 'Rs. 500/bottle',
      image: '/placeholder.svg',
    },
  ];

  return (
    <div className=" py-16 px-4 max-w-7xl mx-auto">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">
          Featured Products
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-56 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                <p className="text-gray-600 mb-4">{product.price}</p>
                <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-full w-full transition duration-300">
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedProducts;
