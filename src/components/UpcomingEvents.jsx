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
      <div className="container mx-auto text-center">
        <h2 className="text-2xl font-bold mb-6">Upcoming Volunteer Events</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {events.map(event => (
            <div key={event._id} className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
              <p>{event.description}</p>
              <p className="mt-4 text-gray-600">Deadline: {new Date(event.deadline).toLocaleDateString()}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default UpcomingEvents;