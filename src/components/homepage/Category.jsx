import React from 'react';
import { useNavigate } from 'react-router-dom';

const categories = [
  {
    title: 'Vegetables',
    description:
      'Explore a wide variety of fresh vegetables directly from farmers.',
    image: 'https://cdn.britannica.com/17/196817-159-9E487F15/vegetables.jpg',
  },
  {
    title: 'Fruits',
    description:
      'Find fresh and seasonal fruits available for immediate purchase.',
    image: 'https://kz.all.biz/img/kz/catalog/415652.jpeg',
  },
  {
    title: 'Grains',
    description:
      'Get the best quality grains sourced directly from the fields.',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRu6TLaS6YmtbMBla7zMjavwsHdGc8SUyqrYg&s',
  },
  {
    title: 'Seeds',
    description: 'High-quality seeds for better crop yield and production.',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfkeRupWVdyL9zC5NIKGTuL9Mn4c7IWe9jSA&s',
  },
  {
    title: 'Fertilizers',
    description: 'Organic and chemical fertilizers to enhance soil fertility.',
    image:
      'https://www.bhg.com/thmb/NIhXZpszfRkBe6_4hv8BDfwl7vU=/4000x0/filters:no_upscale():strip_icc()/BHG-Types-of-Garden-Fertilizer-Fb-fTYGcqqK9y1MGOlfzOh-52e52c5904ad4418ba764013ab322c90.jpg',
  },
  {
    title: 'Livestock',
    description:
      'Healthy livestock ready for sale with full veterinary support.',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8ZhXauxnPEY0XkcSHxT8R8MgBq2I_GmQqvg&s',
  },
  {
    title: 'Consultation',
    description:
      'Expert consultation for all your farming and veterinary needs.',
    image:
      'https://5.imimg.com/data5/SELLER/Default/2023/6/318879003/US/PI/ZY/191748347/farming-consultation-service-500x500.jpg',
  },
  {
    title: 'Market Prices',
    description: 'Stay updated with the latest market prices for all crops.',
    image:
      'https://c8.alamy.com/comp/H7KRNN/fruits-and-vegetables-on-the-market-with-a-price-tag-H7KRNN.jpg',
  },
];

const Category = () => {
  const navigate = useNavigate();
  return (
    <div className="container  mt-10 max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold border-b-4 border-green-700 inline-block pb-2 mb-8">
        Explore Our <span className="text-orange-500">Categories</span>
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {categories.map((category, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105"
          >
            <img
              src={category.image}
              alt={category.title}
              className="w-full h-40 object-cover"
            />
            <div className="p-4 text-center">
              <h3 className="text-xl font-semibold">{category.title}</h3>
              <p className="text-gray-600 my-2">{category.description}</p>
              <button
                onClick={() => navigate('/category')}
                className="bg-orange-500 text-white font-semibold px-4 py-2 rounded hover:bg-orange-600 transform transition-transform hover:scale-105"
              >
                Explore
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;
