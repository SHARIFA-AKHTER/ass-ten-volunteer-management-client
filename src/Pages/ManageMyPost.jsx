import React, { useEffect, useState } from 'react';

const ManageMyPost = () => {
  const [posts, setPosts] = useState([]); // State to store posts
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(null); // Error state

  // Fetch posts when the component mounts
  useEffect(() => {
    fetch('http://localhost:9000/volunteer-needs') 
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to fetch posts');
        }
        return response.json();
      })
      .then((data) => {
        console.log('Fetched data:', data); // Debugging fetched data
        setPosts(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching data:', error); // Debugging error
        setError(error);
        setLoading(false);
      });
  }, []);

  // Handle Update and Delete operations
  const handleUpdate = (postId) => {
    // Logic to update a post, for example, redirect to an update page
    console.log(`Update post with ID: ${postId}`);
  };

  const handleDelete = (postId) => {
    // Logic to delete the post
    fetch(`http://localhost:9000/volunteer-needs/${postId}`, {
      method: 'DELETE',
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to delete the post');
        }
        return response.json();
      })
      .then(() => {
        // After successful deletion, update the posts list
        setPosts(posts.filter((post) => post._id !== postId));
      })
      .catch((error) => {
        console.error('Error deleting post:', error);
      });
  };

  // If loading, show a loading spinner or message
  if (loading) {
    return <div>Loading...</div>;
  }

  // If error, display an error message
  if (error) {
    return <div>Error fetching posts. Please try again later.</div>;
  }

  // If no posts, show a relevant message
  if (posts.length === 0) {
    return <div>No volunteer need posts available.</div>;
  }

  return (
    <div>
      <h2>My Volunteer Need Posts</h2>
      <table className="table w-full">
        <thead>
          <tr>
            <th>Post Title</th>
            <th>Category</th>
            <th>Location</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {posts.map((post) => (
            <tr key={post._id}>
              <td>{post.post_title}</td>
              <td>{post.category}</td>
              <td>{post.location}</td>
              <td> 
                <button onClick={() => handleUpdate(post._id)} className="btn btn-primary">
                  Update
                </button>
                <button onClick={() => handleDelete(post._id)} className="btn btn-danger">
                  Delete
                </button> 
              </td>
            </tr>
          ))} 
        </tbody>
      </table>
    </div>
  );
};

export default ManageMyPost;
