import { useEffect, useState } from 'react';

function UpcomingEvents() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetch('http://localhost:9000/upcoming-volunteer-events')
      .then(response => response.json())
      .then(data => setEvents(data))
      .catch(error => console.error('Error fetching events:', error));
  }, []);

  return (
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto text-center px-4">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-8">Upcoming Volunteer Events</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map(event => (
            <div
              key={event._id}
              className="bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl"
            >
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-2">{event.category}</h3>
              <p className="text-gray-700">{event.status}</p>
              <p className="text-gray-700">{event.volunteersNeeded} Volunteers Needed</p>
              <p className="text-gray-700">{event.suggestion}</p>
              <p className="mt-4 text-gray-600">Deadline: {new Date(event.deadline).toLocaleDateString()}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default UpcomingEvents;