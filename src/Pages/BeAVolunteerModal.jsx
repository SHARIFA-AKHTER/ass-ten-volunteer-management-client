// import React, { useState } from "react";
// import { toast } from "react-toastify";

// const BeAVolunteerModal = ({ post, user, closeModal }) => {
//   const [suggestion, setSuggestion] = useState("");

//   const handleRequest = async () => {
//     const volunteerData = {
//       postId: post._id,
//       thumbnail: post.thumbnail,
//       postTitle: post.postTitle,
//       description: post.description,
//       category: post.category,
//       location: post.location,
//       deadline: post.deadline,
//       organizerName: post.organizerName,
//       organizerEmail: post.organizerEmail,
//       volunteerName: user.name,
//       volunteerEmail: user.email,
//       suggestion,
//       status: "requested",
//     };

//     try {
//       const response = await fetch("http://localhost:5000/volunteer-requests", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(volunteerData),
//       });

//       if (response.ok) {
//         // Decrement the volunteersNeeded count
//         await fetch(`http://localhost:5000/volunteer-posts/${post._id}`, {
//           method: "PATCH",
//           headers: { "Content-Type": "application/json" },
//           body: JSON.stringify({ $inc: { volunteersNeeded: -1 } }),
//         });

//         toast.success("Request submitted successfully!");
//         closeModal();
//       } else {
//         throw new Error("Failed to submit the request");
//       }
//     } catch (error) {
//       console.error("Error:", error);
//       toast.error("An error occurred. Please try again.");
//     }
//   };

//   return (
//     <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
//       <div className="bg-white rounded-lg shadow-lg p-6 w-96">
//         <h2 className="text-xl font-bold mb-4">Be a Volunteer</h2>
//         <div className="mb-4">
//           <p><strong>Post Title:</strong> {post.postTitle}</p>
//           <p><strong>Category:</strong> {post.category}</p>
//           <p><strong>Location:</strong> {post.location}</p>
//           <p><strong>Deadline:</strong> {new Date(post.deadline).toLocaleDateString()}</p>
//           <p><strong>Organizer:</strong> {post.organizerName} ({post.organizerEmail})</p>
//         </div>
//         <textarea
//           value={suggestion}
//           onChange={(e) => setSuggestion(e.target.value)}
//           placeholder="Your suggestions (optional)"
//           className="w-full p-2 border rounded mb-4"
//         />
//         <button
//           onClick={handleRequest}
//           className="bg-blue-500 text-white px-4 py-2 rounded mr-2"
//         >
//           Request
//         </button>
//         <button
//           onClick={closeModal}
//           className="bg-gray-300 px-4 py-2 rounded"
//         >
//           Cancel
//         </button>
//       </div>
//     </div>
//   );
// };

// export default BeAVolunteerModal;
import React from 'react';

const BeAVolunteerModal = () => {
    return (
        <div>
            This is modal
        </div>
    );
};

export default BeAVolunteerModal;
