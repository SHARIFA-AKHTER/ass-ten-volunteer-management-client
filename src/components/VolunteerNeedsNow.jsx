
import React, { useEffect, useState } from 'react';
import VolunteerNeedsNowCard from './VolunteerNeedsNowCard';
import { useNavigate } from 'react-router-dom';

const VolunteerNeedsNow = () => {
  const [volunteerNeeds, setVolunteerNeeds] = useState([]);
const navigate = useNavigate();
  useEffect(() => {
    fetch('http://localhost:9000/volunteer-needs-now') 
      .then((response) => response.json())
      .then((data) => setVolunteerNeeds(data))
      .catch((error) => console.error('Error fetching volunteer needs:', error));
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6">Volunteer Needs Now</h1>
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {volunteerNeeds.map((post) => (
          <VolunteerNeedsNowCard key={post._id} post={post} />
        ))}
      </div>
      <div className="text-center mt-6">
       
         <button
        onClick={() => navigate('/all-volunteer-posts')}
        className="mt-6 px-6 py-3 bg-gray-800 text-white rounded hover:bg-gray-900"
      >
        See All
      </button>
      </div>
    </div>
  );
};

export default VolunteerNeedsNow;