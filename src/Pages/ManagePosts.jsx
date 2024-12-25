// import React, { useEffect, useState } from 'react';
// import SearchBar from './SearchBar';
// import { useNavigate } from 'react-router-dom';

// const ManagePosts = () => {

//     const [volunteerNeedPosts, setVolunteerNeedPosts] = useState([]);
//     const [volunteerRequestPosts, setVolunteerRequestPosts] = useState([]);
//     const navigate = useNavigate();
  
//     useEffect(() => {
    
//       const user = localStorage.getItem('user');
//       if (!user) {
//         navigate('/login');
//       } else {
//         fetchPosts(user); 
//       }
//     }, [navigate]);
  
//     const fetchPosts = async (userId) => {
//       try {
    
//         const needResponse = await fetch(`http://localhost:9000/volunteerNeed?email=${userId}`);
//         const needPosts = await needResponse.json();
        
      
//         const requestResponse = await fetch(`http://localhost:9000/'volunteerRequest?email=${userId}`);
//         const requestPosts = await requestResponse.json();
        
       
//         setVolunteerNeedPosts(needPosts);
//         setVolunteerRequestPosts(requestPosts);
//       } catch (error) {
//         console.error("Error fetching posts:", error);
//       }
//     };
//     return (
//         <div>
//             <SearchBar></SearchBar>
//             <div>
//       <h1>Manage My Posts</h1>

//       <div>
//         <h2>My Volunteer Need Post</h2>
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//           {volunteerNeedPosts.map(post => (
//             <div key={post._id} className="border p-4 rounded">
//               <h3>{post.title}</h3>
//               <p>{post.description}</p>
//             </div>
//           ))}
//         </div>
//       </div>

//       <div>
//         <h2>My Volunteer Request Post</h2>
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//           {volunteerRequestPosts.map(post => (
//             <div key={post._id} className="border p-4 rounded">
//               <h3>{post.title}</h3>
//               <p>{post.description}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//         </div>
//     );
// };

// export default ManagePosts;

// import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom'; 
// import SearchBar from './SearchBar';

// const ManagePosts = () => {
//   const [volunteerNeedPosts, setVolunteerNeedPosts] = useState([]);  
//   const [volunteerRequestPosts, setVolunteerRequestPosts] = useState([]); 
//   const navigate = useNavigate();

//   useEffect(() => {
 
//     const user = localStorage.getItem('user');
//     if (!user) {
//       navigate('/login'); 
//     } else {
//       fetchPosts(user); 
//     }
//   }, [navigate]);

//   const fetchPosts = async (userId) => {
//     try {
  
//       const needResponse = await fetch(`http://localhost:9000/volunteerNeed?email=${userId}`);
//       const needPosts = await needResponse.json();


//       const requestResponse = await fetch(`http://localhost:9000/volunteerRequest?email=${userId}`);  // ভুল ' চিহ্ন সরানো হয়েছে
//       const requestPosts = await requestResponse.json();
      

//       setVolunteerNeedPosts(needPosts);
//       setVolunteerRequestPosts(requestPosts);
//     } catch (error) {
//       console.error("Error fetching posts:", error);
//     }
//   };

//   return (
//     <div>
//       <SearchBar />
//       <div>
//         <h1>Manage My Posts</h1>

//         <div>
//           <h2>My Volunteer Need Post</h2>
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//             {volunteerNeedPosts.map(post => (
//               <div key={post._id} className="border p-4 rounded">
//                 <h3>{post.title}</h3>
//                 <p>{post.description}</p>
//               </div>
//             ))}
//           </div>
//         </div>

//         <div>
//           <h2>My Volunteer Request Post</h2>
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//             {volunteerRequestPosts.map(post => (
//               <div key={post._id} className="border p-4 rounded">
//                 <h3>{post.title}</h3>
//                 <p>{post.description}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ManagePosts;

import React from 'react';

const ManagePosts = () => {
    return (
        <div>
            Manage post
        </div>
    );
};

export default ManagePosts;