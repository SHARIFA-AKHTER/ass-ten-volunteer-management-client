import React, { useEffect, useState } from "react";

const AllVolunteerPosts = () => {
  const [posts, setAllPosts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:9000/all-volunteer-posts") // Fetch all posts
      .then((response) => response.json())
      .then((data) => setAllPosts(data))
      .catch((error) => console.error("Error fetching all posts:", error));
  }, []);

  return (
    <div className="container mx-auto px-4 my-8">
      <h2 className="text-2xl font-bold mb-8 text-center sm:text-left">
        All Volunteer Needs
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post) => (
          <div
            key={post._id}
            className="card border p-4 shadow-lg rounded hover:shadow-xl transition-shadow duration-300"
          >
            <img
              src={post.thumbnail}
              alt={post.post_title}
              className="rounded h-40 w-full object-cover"
            />
            <h3 className="text-lg font-semibold mt-4 text-center sm:text-left">
              {post.post_title}
            </h3>
            <p className="text-sm text-gray-600 text-center sm:text-left">
              {post.category}
            </p>
            <p className="text-sm text-gray-500 text-center sm:text-left">
              Deadline: {post.deadline}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllVolunteerPosts;
