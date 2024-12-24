import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const VolunteerNeedPostDetails = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    console.log("Fetching post for ID:", id); 
    fetch(`http://localhost:9000/volunteer/${id}`)
      .then((response) => response.json())
      .then((data) => setPost(data))
      .catch((error) => console.error('Error fetching post details:', error));
  }, [id]);

  if (!post) return <p>Loading...</p>;

  const handleVolunteer = () => {
    alert("Thank you for volunteering!");
    // Additional logic to handle volunteer request (e.g., API call)
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">{post.post_title}</h1>
      <img src={post.thumbnail} alt={post.post_title} className="mb-4 w-full rounded" />
      <p className="text-lg font-medium">Category: {post.category}</p>
      <p className="text-lg">Deadline: {new Date(post.deadline).toLocaleString()}</p>
      
      {/* Be a Volunteer Button */}
      <button
        onClick={handleVolunteer}
        className="bg-blue-500 text-white px-4 py-2 mt-4 rounded hover:bg-blue-600"
      >
        Be a Volunteer
      </button>
    </div>
  ); 
};

export default VolunteerNeedPostDetails;