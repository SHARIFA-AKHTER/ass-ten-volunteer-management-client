

import { useState } from "react";

const BeVolunteerModal = ({ post, closeModal }) => {
    const [suggestion, setSuggestion] = useState("");

    const handleRequest = () => {
        const volunteerData = {
            postId: post._id, 
            postTitle: post.title,
            postDescription: post.description,
            category: post.category,
            location: post.location,
            thumbnail: post.thumbnail,
            volunteersNeeded: post.volunteersNeeded,
            deadline: post.deadline,
            organizerName: post.organizerName,
            organizerEmail: post.organizerEmail,
            suggestion: suggestion,
            status: "requested",
        };

        // Send Data to Database
        fetch(`http://localhost:9000/volunteer-needs-now/${post._id}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(volunteerData)
        })
        .then(res => res.json())
        .then(data => {
            console.log("Volunteer Request Submitted:", data);
            alert("Request Submitted Successfully!");
            closeModal();
        })
        .catch(err => console.error("Error submitting request:", err));
    };

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
            <div className="bg-white p-6 rounded-lg w-96">
                <h2 className="text-xl font-bold mb-4">Be a Volunteer</h2>

                {/* Read-Only Fields */}
                <p><strong>Title:</strong> {post.title}</p>
                <p><strong>Category:</strong> {post.category}</p>
                <p><strong>Location:</strong> {post.location}</p>
                <p><strong>Volunteers Needed:</strong> {post.volunteersNeeded}</p>
                <p><strong>Deadline:</strong> {post.deadline}</p>
                <p><strong>Organizer:</strong> {post.organizerName} ({post.organizerEmail})</p>
                {/* Suggestion Field */}
                <label className="block mt-4">Suggestion (Optional)</label>
                <textarea
                    className="w-full border p-2"
                    value={suggestion}
                    onChange={(e) => setSuggestion(e.target.value)}
                ></textarea>

                {/* Request Button */}
                <button
                    onClick={handleRequest}
                    className="mt-4 bg-green-500 text-white px-4 py-2 rounded w-full"
                >
                    Request
                </button>

                {/* Close Button */}
                <button
                    onClick={closeModal}
                    className="mt-2 bg-gray-500 text-white px-4 py-2 rounded w-full"
                >
                    Cancel
                </button>
            </div>
        </div>
    );
};

export default BeVolunteerModal;