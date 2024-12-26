import { useEffect, useState } from 'react';

function SuccessStories() {
  const [stories, setStories] = useState([]);
  const [loading, setLoading] = useState(true); // State for loading
  const [error, setError] = useState(null); // State for handling errors

  useEffect(() => {
    fetch('http://localhost:9000/volunteer-success-stories')
      .then(response => response.json())
      .then(data => {
        setStories(data);
        setLoading(false); // Stop loading when data is fetched
      })
      .catch(error => {
        setError('Error fetching success stories.');
        setLoading(false); // Stop loading on error
      });
  }, []);

  return (
    <section className="bg-blue-100 py-12">
      <div className="container mx-auto text-center">
        <h2 className="text-2xl font-bold mb-6">Volunteer Success Stories</h2>
        
        {loading && <p>Loading stories...</p>} {/* Show loading text */}
        {error && <p className="text-red-500">{error}</p>} {/* Show error message */}
        
        <div className="space-y-6">
          {stories.length === 0 && !loading && !error && (
            <p>No success stories available at the moment.</p> // Show if there are no stories
          )}

          {stories.map(story => (
            <div key={story._id} className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-2">{story.volunteerName}</h3>
              <p>{story.story}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default SuccessStories;