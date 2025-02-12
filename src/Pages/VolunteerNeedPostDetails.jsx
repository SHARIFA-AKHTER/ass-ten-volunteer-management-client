// import React, { useEffect, useState } from 'react';
// import { useParams, useNavigate } from 'react-router-dom';
// import BeAVolunteerModal from './BeAVolunteerModal';

// const VolunteerNeedPostDetails = () => {
//   const { id } = useParams();
//   console.log("Volunteer Post ID:", id);
//   const [post, setPost] = useState(null);
//   const [modalOpen, setModalOpen] = useState(false);
//   const navigate = useNavigate();  
//   useEffect(() => {
//     fetch(`http://localhost:9000/volunteer-needs-now/${id}`)
//       .then((response) => response.json())
//       .then((data) => setPost(data))
//       .catch((error) => console.error('Error fetching post details:', error));
//   }, [id]);

//   if (!post) return <p>Loading...</p>;

//   // Handle modal close and navigate to the next page
  
//   const handleCloseModal = () => {
//     setModalOpen(false);
//     navigate('/login');  
//   };

//   return (
//     <div className="container mx-auto p-4">
//       <h1 className="text-3xl font-bold mb-4">{post.post_title}</h1>
//       <img src={post.thumbnail} alt={post.post_title} className="mb-4 w-full rounded" />
//       <p className="text-lg font-medium">Category: {post.category}</p>
//       <p className="text-lg">Deadline: {new Date(post.deadline).toLocaleString()}</p>
    
//       {/* Be a Volunteer Button */}
      
//       <button
//         className="bg-blue-500 text-white px-4 py-2 mt-4 rounded hover:bg-blue-600"
//         onClick={() => setModalOpen(true)}
//       >
//         Be a Volunteer
//       </button>

//       {/* Modal */}
//       {modalOpen && (
//         <BeAVolunteerModal
//           post={post.post_title}
//           closeModal={handleCloseModal}
//         />
//       )}
//     </div>
//   );
// };

// export default VolunteerNeedPostDetails;

import { useParams } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import BeAVolunteerModal from "./BeAVolunteerModal";
// import { AuthContext } from "../providers/AuthProvider";


const VolunteerNeedPostDetails = () => {
    const { id } = useParams(); // Get post ID from URL
    // const { user } = useContext(AuthContext);
    const [post, setPost] = useState(null);
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        fetch(`http://localhost:9000/volunteer-needs-now/${id}`) // Replace with your API
            .then(res => res.json())
            .then(data => setPost(data))
            .catch(err => console.error("Error fetching post:", err));
    }, [id]);

    if (!post) return <p>Loading...</p>;

    return (
        <div className="container mx-auto p-6">
            <h1 className="text-3xl font-bold">{post.title}</h1>
            <img src={post.thumbnail} alt={post.title} className="w-full h-60 object-cover my-4" />
            <p>{post.description}</p>
            <p><strong>Category:</strong> {post.category}</p>
            <p><strong>Location:</strong> {post.location}</p>
            <p><strong>Volunteers Needed:</strong> {post.volunteersNeeded}</p>
            <p><strong>Deadline:</strong> {post.deadline}</p>
            <p><strong>Organizer:</strong> {post.organizerName} ({post.organizerEmail})</p>

            {/* Be a Volunteer Button */}
            <button
                onClick={() => setShowModal(true)}
                className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
            >
                Be a Volunteer
            </button>

            {/* Show Modal */}
            {showModal && (
                <BeAVolunteerModal
                    post={post}
                    // user={user}
                    closeModal={() => setShowModal(false)}
                />
            )}
        </div>
    );
};

export default VolunteerNeedPostDetails;