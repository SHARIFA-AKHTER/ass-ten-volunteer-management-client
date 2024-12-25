import React, { useEffect, useState } from 'react';

const AllVolunteerPosts = () => {

  const [posts, setAllPosts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:9000/all-volunteer-posts') // Fetch all posts
      .then((response) => response.json())
      .then((data) => setAllPosts(data))
      .catch((error) => console.error('Error fetching all posts:', error));
  }, []);

  return (
    <div className="container mx-auto my-8">
    <h2 className="text-2xl font-bold mb-4">All Volunteer Needs</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {posts.map((post) => (
        <div key={post._id} className="card border p-4 shadow-lg rounded">
          <img src={post.thumbnail} alt={post.post_title} className="rounded h-40 w-full object-cover" />
          <h3 className="text-lg font-semibold mt-2">{post.post_title}</h3>
          <p className="text-sm text-gray-600">{post.category}</p>
          <p className="text-sm text-gray-500">Deadline: {post.deadline}</p>
        </div>
      ))}
    </div>
  </div>
  );
};

export default AllVolunteerPosts;
