import React from 'react';

const UpcomingEvents = () => {
  const events = [
    { name: "Farmer's Market", date: 'July 15, 2023', location: 'Kathmandu' },
    {
      name: 'Agricultural Workshop',
      date: 'August 5, 2023',
      location: 'Pokhara',
    },
    {
      name: 'Harvest Festival',
      date: 'September 20, 2023',
      location: 'Chitwan',
    },
  ];

  return (
    <div className="py-16 px-4">
      <div className="container max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Upcoming Events</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-2">{event.name}</h3>
              <p className="text-gray-600 mb-1">{event.date}</p>
              <p className="text-gray-600">{event.location}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UpcomingEvents;
