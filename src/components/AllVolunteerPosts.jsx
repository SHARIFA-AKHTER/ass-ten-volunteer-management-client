
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const AllVolunteerPosts = () => {
  const [posts, setAllPosts] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredPosts, setFilteredPosts] = useState([]);

  useEffect(() => {
    // Fetching all posts from the backend
    fetch("http://localhost:9000/all-volunteer-posts")
      .then((response) => response.json())
      .then((data) => {
        setAllPosts(data);
        setFilteredPosts(data);
      })
      .catch((error) => console.error("Error fetching all posts:", error));
  }, []);

  // Function to handle search input changes
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  // Function to filter posts based on search query
  const filterPosts = () => {

    if (posts.length === 0) return;

    if (searchQuery === "") {
      setFilteredPosts(posts);
    } else {

      const filtered = posts.filter((post) =>
        post.post_title?.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredPosts(filtered);
    }
  };

  useEffect(() => {
    filterPosts();
  }, [searchQuery, posts]);

  return (
    <div className="container mx-auto px-4 my-8">
      <h2 className="text-2xl font-bold mb-8 text-center sm:text-left">
        All Volunteer Needs
      </h2>

      {/* Search Bar */}
      <div className="mb-8 flex justify-center">
        <input
          type="text"
          value={searchQuery}
          onChange={handleSearchChange}
          placeholder="Search by post title"
          className="border p-2 rounded w-full sm:w-2/3 lg:w-1/2"
        />
      </div>

      {/* Posts Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredPosts.length > 0 ? (
          filteredPosts.map((post) => (
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
              <Link to={`/volunteer-needs-now/${post._id}`}>
                <button className="btn btn-primary w-full sm:w-auto px-4 sm:px-6 py-2 
                text-xs sm:text-sm md:text-base 
               text-white hover:bg-primary-focus transition-all rounded-md">
                  View Details
                </button>
              </Link>

            </div>
          ))
        ) : (
          <p className="text-center text-gray-500">No posts found.</p>
        )}
      </div>

    </div>
  );
};

export default AllVolunteerPosts;
