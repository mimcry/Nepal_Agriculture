import React from 'react';

const Hero = () => {
  return (
    <div className="relative h-screen">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://foodtank.com/wp-content/uploads/2020/08/FoodTank_agriculturesubsidiesworldbankreport.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-60"></div>
      </div>
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white px-4">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-6">
          Connecting <span className="text-yellow-400">Nepali Farmers</span>{' '}
          with <span className="text-yellow-400">Buyers</span> Nationwide
        </h1>
        <p className="text-xl md:text-2xl text-center mb-8 max-w-3xl">
          Empower Nepali farmers to sell directly and connect nationwide,
          fostering local agricultural growth.
        </p>
        <button className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-bold py-3 px-8 rounded-full transition duration-300 transform hover:scale-105">
          Explore More
        </button>
      </div>
    </div>
  );
};

export default Hero;
