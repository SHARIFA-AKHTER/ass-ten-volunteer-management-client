import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';  // Import SweetAlert2

const ManageMyPost = () => {
  const [posts, setPosts] = useState([]); 
  const [loading, setLoading] = useState(true); 
  const [error, setError] = useState(null); 
  const navigate = useNavigate();

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
        console.log('Fetched data:', data); 
        setPosts(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching data:', error); 
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
    // Show confirmation before deleting
    Swal.fire({
      title: 'Are you sure?',
      text: 'Once deleted, you will not be able to recover this post!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Yes, delete it!',
    }).then((result) => {
      if (result.isConfirmed) {
        // Proceed with deletion if confirmed
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
            Swal.fire('Deleted!', 'Your post has been deleted.', 'success'); // Success message
          })
          .catch((error) => {
            console.error('Error deleting post:', error);
            Swal.fire('Error!', 'Failed to delete the post. Please try again.', 'error'); // Error message
          });
      }
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
                <button
                  className="btn btn-primary mr-2"
                  onClick={() => navigate(`/update-post/${post._id}`)}
                >
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
