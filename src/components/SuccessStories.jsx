import { useEffect, useState } from "react";

function SuccessStories() {
  const [stories, setStories] = useState([]);
  const [loading, setLoading] = useState(true); 
  const [error, setError] = useState(null); 
  const [currentIndex, setCurrentIndex] = useState(0); 

  useEffect(() => {
    fetch("http://localhost:9000/volunteer-success-stories")
      .then((response) => response.json())
      .then((data) => {
        setStories(data);
        setLoading(false);
      })
      .catch((error) => {
        setError("Error fetching success stories.");
        setLoading(false);
      });
  }, []);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % stories.length);
  };

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? stories.length - 1 : prevIndex - 1
    );
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-xl font-bold text-gray-700">Loading...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-xl font-bold text-red-600">{error}</p>
      </div>
    );
  }

  return (
    <section className="bg-blue-50 py-10">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">Success Stories</h2>

        {/* Current Story */}
        <div className="p-6 bg-white rounded-lg shadow-lg">
          <img
            src={stories[currentIndex]?.thumbnail}
            alt="Story Thumbnail"
            className="w-full h-64 object-cover rounded-lg mb-4"
          />
          <h3 className="text-2xl font-bold text-blue-600 mb-2">
            {stories[currentIndex]?.title}
          </h3>
          <p className="text-gray-600 mb-4">{stories[currentIndex]?.description}</p>
          <p className="text-gray-500 text-sm">
            <strong>Category:</strong> {stories[currentIndex]?.category}
          </p>
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-center mt-6 space-x-4">
          <button
            onClick={handlePrevious}
            className="px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded-lg"
          >
            &#8592; Previous
          </button>
          <button
            onClick={handleNext}
            className="px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded-lg"
          >
            Next &#8594;
          </button>
        </div>
      </div>
    </section>
  );
}

export default SuccessStories;