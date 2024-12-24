import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const VolunteerNeedPostDetails = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:9000/volunteer-needs-now/${id}`)
      .then((response) => response.json())
      .then((data) => setPost(data))
      .catch((error) => console.error('Error fetching post details:', error));
  }, [id]);

  if (!post) return <p>Loading...</p>;

  return (
    <div className="container mx-auto p-4">
        <h2 className="text-3xl">Volunteer Post Details</h2>
      <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
      <img src={post.thumbnail} alt={post.title} className="mb-4 w-full rounded" />
      <p className="text-lg font-medium">Category: {post.category}</p>
      <p className="text-lg">Deadline: {new Date(post.deadline).toLocaleString()}</p>
    </div>
  );
};

export default VolunteerNeedPostDetails;
