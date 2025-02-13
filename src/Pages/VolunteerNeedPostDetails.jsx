
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import BeAVolunteerModal from "./BeAVolunteerModal";

const VolunteerNeedPostDetails = () => {
    const { id } = useParams(); 
    const [post, setPost] = useState(null);
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        fetch(`http://localhost:9000/volunteer-needs-now/${id}`) 
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