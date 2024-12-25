import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import BeAVolunteerModal from './BeAVolunteerModal';

const VolunteerNeedPostDetails = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const navigate = useNavigate();  
  useEffect(() => {
    fetch(`http://localhost:9000/volunteer/${id}`)
      .then((response) => response.json())
      .then((data) => setPost(data))
      .catch((error) => console.error('Error fetching post details:', error));
  }, [id]);

  if (!post) return <p>Loading...</p>;

  // Handle modal close and navigate to the next page
  
  const handleCloseModal = () => {
    setModalOpen(false);
    navigate('/login');  
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">{post.post_title}</h1>
      <img src={post.thumbnail} alt={post.post_title} className="mb-4 w-full rounded" />
      <p className="text-lg font-medium">Category: {post.category}</p>
      <p className="text-lg">Deadline: {new Date(post.deadline).toLocaleString()}</p>
      <p><strong>Location:</strong> {post.location}</p>
      <p><strong>Volunteers Needed:</strong> {post.volunteersNeeded}</p>
      <p><strong>Organizer:</strong> {post.organizerName}</p>
      
      {/* Be a Volunteer Button */}
      
      <button
        className="bg-blue-500 text-white px-4 py-2 mt-4 rounded hover:bg-blue-600"
        onClick={() => setModalOpen(true)}
      >
        Be a Volunteer
      </button>

      {/* Modal */}
      {modalOpen && (
        <BeAVolunteerModal
          post={post.post_title}
          closeModal={handleCloseModal}
        />
      )}
    </div>
  );
};

export default VolunteerNeedPostDetails;

// import React, { useEffect, useState, useContext } from 'react';
// import { useParams, useNavigate } from 'react-router-dom';
// import BeAVolunteerModal from './BeAVolunteerModal';
// import { AuthContext } from '../contexts/AuthContext'; // Assuming you have an AuthContext

// const VolunteerNeedPostDetails = () => {
//   const { id } = useParams();
//   const [post, setPost] = useState(null);
//   const [modalOpen, setModalOpen] = useState(false);
//   const navigate = useNavigate();
//   const { user, isAuthenticated } = useContext(AuthContext); // User info from AuthContext

//   useEffect(() => {
//     // Redirect to login if user is not authenticated
//     if (!isAuthenticated) {
//       navigate('/login');
//       return;
//     }

//     fetch(`http://localhost:9000/volunteer/${id}`)
//       .then((response) => response.json())
//       .then((data) => setPost(data))
//       .catch((error) => console.error('Error fetching post details:', error));
//      }, [id, isAuthenticated, navigate]);

//   if (!post) return <p>Loading...</p>;

//   return (
//     <div className="container mx-auto p-4">
//       <h1 className="text-3xl font-bold mb-4">{post.post_title}</h1>
//       <img src={post.thumbnail} alt={post.post_title} className="mb-4 w-full rounded" />
//       <p className="text-lg font-medium">Category: {post.category}</p>
//       <p className="text-lg">Deadline: {new Date(post.deadline).toLocaleString()}</p>
//       <p><strong>Location:</strong> {post.location}</p>
//       <p><strong>Volunteers Needed:</strong> {post.volunteersNeeded}</p>
//       <p><strong>Organizer:</strong> {post.organizerName}</p>

//       <button
//         className="bg-blue-500 text-white px-4 py-2 mt-4 rounded hover:bg-blue-600"
//         onClick={() => setModalOpen(true)}
//       >
//         Be a Volunteer
//       </button>

//       {modalOpen && (
//         <BeAVolunteerModal
//           post={post}
//           user={user} 
//           closeModal={() => setModalOpen(false)}
//         />
//       )}
//     </div>
//   );
// };

// export default VolunteerNeedPostDetails;