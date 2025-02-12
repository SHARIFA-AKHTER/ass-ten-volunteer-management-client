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
      <h2 className='text-xl sm:text-2xl md:text-3xl font-bold text-center mb-6'>My Volunteer Need Posts</h2>
      <div className='overflow-x-auto'>
      <table className="table w-full ">
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
              <div className="flex flex-col sm:flex-row justify-center items-center gap-6 sm:gap-6">
                    <button
                      className="bg-blue-500 hover:bg-blue-600 text-white 
                      px-4 py-1 rounded transition w-full sm:w-auto"
                      onClick={() => navigate(`/update-post/${post._id}`)}
                    >
                      Update
                    </button>
                    <button
                      className="bg-red-500 hover:bg-red-600 text-white 
                      px-4 py-1 rounded transition w-full sm:w-auto"
                      onClick={() => handleDelete(post._id)}
                    >
                      Delete
                    </button>
                  </div>
              </td>
            </tr>
          ))} 
        </tbody>
      </table>
      </div>
    </div>
  );
};

export default ManageMyPost;


// import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import Swal from "sweetalert2";

// const ManageMyPost = () => {
//   const [posts, setPosts] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const navigate = useNavigate();

//   useEffect(() => {
//     fetch("http://localhost:9000/volunteer-needs")
//       .then((response) => {
//         if (!response.ok) {
//           throw new Error("Failed to fetch posts");
//         }
//         return response.json();
//       })
//       .then((data) => {
//         setPosts(data);
//         setLoading(false);
//       })
//       .catch((error) => {
//         setError(error);
//         setLoading(false);
//       });
//   }, []);

//   const handleDelete = (postId) => {
//     Swal.fire({
//       title: "Are you sure?",
//       text: "Once deleted, you will not be able to recover this post!",
//       icon: "warning",
//       showCancelButton: true,
//       confirmButtonColor: "#d33",
//       cancelButtonColor: "#3085d6",
//       confirmButtonText: "Yes, delete it!",
//     }).then((result) => {
//       if (result.isConfirmed) {
//         fetch(`http://localhost:9000/volunteer-needs/${postId}`, {
//           method: "DELETE",
//         })
//           .then((response) => {
//             if (!response.ok) {
//               throw new Error("Failed to delete the post");
//             }
//             return response.json();
//           })
//           .then(() => {
//             setPosts(posts.filter((post) => post._id !== postId));
//             Swal.fire("Deleted!", "Your post has been deleted.", "success");
//           })
//           .catch(() => {
//             Swal.fire("Error!", "Failed to delete the post. Please try again.", "error");
//           });
//       }
//     });
//   };

//   if (loading) return <div className="text-center text-lg font-semibold py-5">Loading...</div>;
//   if (error) return <div className="text-center text-red-500 py-5">Error fetching posts. Please try again later.</div>;
//   if (posts.length === 0) return <div className="text-center text-gray-600 py-5">No volunteer need posts available.</div>;

//   return (
//     <div className="max-w-6xl mx-auto px-4 py-6 w-full">
//       <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-center mb-6">
//         My Volunteer Need Posts
//       </h2>

//       {/* Responsive Table Container */}
//       <div className="shadow-md rounded-lg overflow-x-auto">
//   <table className="w-full min-w-[600px] border border-gray-300 text-sm sm:text-base">
//     <thead>
//       <tr className="bg-gray-200 text-gray-700">
//         <th className="p-3 border text-left sm:text-center">Post Title</th>
//         <th className="p-3 border text-left sm:text-center">Category</th>
//         <th className="p-3 border text-left sm:text-center">Location</th>
//         <th className="p-3 border text-left sm:text-center">Actions</th>
//       </tr>
//     </thead>
//     <tbody>
//       {posts.map((post) => (
//         <tr key={post._id} className="text-center hover:bg-gray-100 transition">
//           <td className="p-3 border">{post.post_title}</td>
//           <td className="p-3 border">{post.category}</td>
//           <td className="p-3 border">{post.location}</td>
//           <td className="p-3 border">
//             <div className="flex flex-col sm:flex-row justify-center items-center gap-2">
//               <button
//                 className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-1 rounded transition w-full sm:w-auto"
//                 onClick={() => navigate(`/update-post/${post._id}`)}
//               >
//                 Update
//               </button>
//               <button
//                 className="bg-red-500 hover:bg-red-600 text-white px-4 py-1 rounded transition w-full sm:w-auto"
//                 onClick={() => handleDelete(post._id)}
//               >
//                 Delete
//               </button>
//             </div>
//           </td>
//         </tr>
//       ))}
//     </tbody>
//   </table>
// </div>
//     </div>
//   );
// };

// export default ManageMyPost;