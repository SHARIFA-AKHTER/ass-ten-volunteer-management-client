
import React from 'react';

import { Link } from "react-router-dom";

const BeAVolunteerModal = ({ closeModal, post, user }) => {
  // Destructure post fields
  const {
    thumbnail,
    post_title,
    description,
    category,
    location,
    volunteersNeeded,
    deadline,
    organizerName,
    organizerEmail,
  } = post || {};

  // Destructure user fields
  const { name, email } = user || {};

  // Prepare requestData object for submission
  const requestData = {
    thumbnail,
    postTitle: post_title,
    description,
    category,
    location,
    volunteersNeeded,
    // deadline: new Date(deadline).toISOString(), 
    organizer: {
      name: organizerName,
      email: organizerEmail,
    },
    volunteer: {
      name,
      email,
    },
  };

  // Handle Submit
  const handleSubmit = () => {
    fetch('http://localhost:9000/volunteer-needs-application/${post._id}', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(requestData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Request successful:', data);
        closeModal(); // Close the modal on success
      })
      .catch((error) => {
        console.error('Request failed:', error);
      });
  };

  return (
    <div className="modal modal-open">
      <div className="modal-box">
        <h3 className="text-lg font-bold">Be a Volunteer</h3>

        {/* Volunteer Post Details */}
        <div className="grid gap-4 mb-6">
          <p>
            <strong>Thumbnail:</strong> <img src={thumbnail} alt={post_title} className="w-full rounded" />
          </p>
          <p><strong>Post Title:</strong> {post_title}</p>
          <p><strong>Description:</strong> {description}</p>
          <p><strong>Category:</strong> {category}</p>
          <p><strong>Location:</strong> {location}</p>
          <p><strong>Volunteers Needed:</strong> {volunteersNeeded}</p>
          <p><strong>Deadline:</strong> {new Date(deadline).toLocaleString()}</p>
          <p>
            <strong>Organizer:</strong> {organizerName} ({organizerEmail})
          </p>

          <p><strong>Volunteer Name:</strong> {name || "N/A"}</p>
          <p><strong>Volunteer Email:</strong> {email || "N/A"}</p>
        </div>

        {/* Table Section */}
        <div className="overflow-x-auto mb-6">
          <table className="table">
            {/* Table Head */}
            <thead>
              <tr>
                <th>
                  <label>
                    <input type="checkbox" className="checkbox" />
                  </label>
                </th>
                <th>Thumbnail</th>
                <th>Category</th>
                <th>Volunteer Email</th>
                <th></th>
              </tr>
            </thead>

            {/* Table Body */}
            <tbody>
              <tr>
                <td>
                  <label>
                    <input type="checkbox" className="checkbox" />
                  </label>
                </td>
                <td>{thumbnail || "N/A"}</td>
                <td>{category || "N/A"}</td>
                <td>{email || "N/A"}</td>
                <td></td>
              </tr>
            </tbody>
          </table>
        </div>

         {/* Buttons Section */}
         <div className="flex justify-end gap-4">
          <Link to="/add-post" className="btn btn-ghost" onClick={closeModal}>
            Cancel
          </Link>
          <button className="btn btn-primary" onClick={handleSubmit}>
            Request
          </button>
        </div>
      </div>
    </div>
  );
};

export default BeAVolunteerModal;


// const BeAVolunteerModal = ({ closeModal, post, user }) => {
//   // Destructure post fields
//   const {
//     thumbnail,
//     post_title,
//     description,
//     category,
//     location,
//     volunteersNeeded,
//     deadline,
//     organizerName,
//     organizerEmail,
//   } = post || {};

//   // Destructure user fields
//   const { name, email } = user || {};

//   // Prepare requestData object for submission
//   const requestData = {
//     thumbnail,
//     postTitle: post_title,
//     description,
//     category,
//     location,
//     volunteersNeeded,
//     organizer: {
//       name: organizerName,
//       email: organizerEmail,
//     },
//     volunteer: {
//       name,
//       email,
//     },
//   };

//   // Handle Submit
//   const handleSubmit = () => {
//     fetch(`http://localhost:9000/volunteer-needs-application/${post._id}`, {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(requestData),
//     })
//       .then((response) => response.json())
//       .then((data) => {
//         console.log('Request successful:', data);
//         closeModal(); // Close the modal on success
//       })
//       .catch((error) => {
//         console.error('Request failed:', error);
//       });
//   };

//   return (
//     <div className="modal modal-open">
//       <div className="modal-box">
//         <h3 className="text-lg font-bold">Be a Volunteer</h3>

//         {/* Volunteer Post Details */}
//         <div className="grid gap-4 mb-6">
//           <img src={thumbnail} alt={post_title} className="w-full rounded mb-4" />
//           <p><strong>Post Title:</strong> {post_title}</p>
//           <p><strong>Description:</strong> {description}</p>
//           <p><strong>Category:</strong> {category}</p>
//           <p><strong>Location:</strong> {location}</p>
//           <p><strong>Volunteers Needed:</strong> {volunteersNeeded}</p>
//           <p><strong>Deadline:</strong> {new Date(deadline).toLocaleString()}</p>
//           <p>
//             <strong>Organizer:</strong> {organizerName} ({organizerEmail})
//           </p>
//           <p><strong>Volunteer Name:</strong> {name || "N/A"}</p>
//           <p><strong>Volunteer Email:</strong> {email || "N/A"}</p>
//         </div>

//         {/* Volunteer Table Section */}
//         <div className="overflow-x-auto mb-6">
//           <table className="table w-full">
//             {/* Table Head */}
//             <thead>
//               <tr>
//                 <th>#</th>
//                 <th>Thumbnail</th>
//                 <th>Category</th>
//                 <th>Volunteer Email</th>
//               </tr>
//             </thead>
//             {/* Table Body */}
//             <tbody>
//               <tr>
//                 <td>1</td>
//                 <td>
//                   <img src={thumbnail} alt="Volunteer Thumbnail" className="w-12 h-12 rounded" />
//                 </td>
//                 <td>{category || "N/A"}</td>
//                 <td>{email || "N/A"}</td>
//               </tr>
//             </tbody>
//           </table>
//         </div>

//         {/* Buttons Section */}
//         <div className="flex justify-end gap-4">
//           <Link to="/add-post" className="btn btn-ghost" onClick={closeModal}>
//             Cancel
//           </Link>
//           <button className="btn btn-primary" onClick={handleSubmit}>
//             Request
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default BeAVolunteerModal;
