import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css"; 
import Swal from "sweetalert2";

const UpdatePost = () => {
  const { id } = useParams(); 
  const navigate = useNavigate();
  const [post, setPost] = useState(null); 
  const [loading, setLoading] = useState(true);
  const [formData, setFormData] = useState({
    thumbnail: "",
    post_title: "",
    description: "",
    category: "",
    location: "",
    volunteers_needed: 0,
    deadline: new Date(),
    organizer_name: "",
    organizer_email: "",
  });

  // Fetch the post details
  useEffect(() => {
    fetch(`http://localhost:9000/volunteer/${id}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch post details");
        }
        return response.json();
      })
      .then((data) => {
        setPost(data);
        setFormData({
          thumbnail: data.thumbnail || "",
          post_title: data.post_title || "",
          description: data.description || "",
          category: data.category || "",
          location: data.location || "",
          volunteers_needed: data.volunteers_needed || 0,
          deadline: new Date(data.deadline) || new Date(),
          organizer_name: data.organizer_name || "",
          organizer_email: data.organizer_email || "",
        });
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching post details:", error);
        setLoading(false);
      });
  }, [id]);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(`http://localhost:9000/volunteer/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to update post");
        }
        return response.json();
      })
      .then(() => {
        Swal.fire({
          title: "Success!",
          text: "Post updated successfully!",
          icon: "success",
          confirmButtonText: "OK",
        }).then(() => {
          navigate("/manage-posts");
        });
      })
      .catch((error) => {
        console.error("Error updating post:", error);
        Swal.fire({
          title: "Error!",
          text: "Failed to update the post. Please try again.",
          icon: "error",
          confirmButtonText: "OK",
        });
      });
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-2xl font-bold mb-6 text-center">Update Volunteer Need Post</h2>
      <form onSubmit={handleSubmit} className="space-y-6 max-w-2xl mx-auto">
        <div>
          <label htmlFor="thumbnail" className="block font-semibold">
            Thumbnail
          </label>
          <input
            type="text"
            id="thumbnail"
            name="thumbnail"
            value={formData.thumbnail}
            onChange={handleChange}
            className="input input-bordered w-full"
          />
        </div>
        <div>
          <label htmlFor="post_title" className="block font-semibold">
            Post Title
          </label>
          <input
            type="text"
            id="post_title"
            name="post_title"
            value={formData.post_title}
            onChange={handleChange}
            className="input input-bordered w-full"
          />
        </div>
        <div>
          <label htmlFor="description" className="block font-semibold">
            Description
          </label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="textarea textarea-bordered w-full"
          />
        </div>
        <div>
          <label htmlFor="category" className="block font-semibold">
            Category
          </label>
          <select
            id="category"
            name="category"
            value={formData.category}
            onChange={handleChange}
            className="select select-bordered w-full"
          >
            <option value="healthcare">Healthcare</option>
            <option value="education">Education</option>
            <option value="social_service">Social Service</option>
            <option value="animal_welfare">Animal Welfare</option>
          </select>
        </div>
        <div>
          <label htmlFor="location" className="block font-semibold">
            Location
          </label>
          <input
            type="text"
            id="location"
            name="location"
            value={formData.location}
            onChange={handleChange}
            className="input input-bordered w-full"
          />
        </div>
        <div>
          <label htmlFor="volunteers_needed" className="block font-semibold">
            Number of Volunteers Needed
          </label>
          <input
            type="number"
            id="volunteers_needed"
            name="volunteers_needed"
            value={formData.volunteers_needed}
            onChange={handleChange}
            className="input input-bordered w-full"
          />
        </div>
        <div>
          <label htmlFor="deadline" className="block font-semibold">
            Deadline
          </label>
          <DatePicker
            selected={formData.deadline}
            onChange={(date) =>
              setFormData((prev) => ({ ...prev, deadline: date }))
            }
            className="input input-bordered w-full"
          />
        </div>
        <div>
          <label htmlFor="organizer_name" className="block font-semibold">
            Organizer Name
          </label>
          <input
            type="text"
            id="organizer_name"
            name="organizer_name"
            value={formData.organizer_name}
            readOnly
            className="input input-bordered w-full bg-gray-200"
          />
        </div>
        <div>
          <label htmlFor="organizer_email" className="block font-semibold">
            Organizer Email
          </label>
          <input
            type="email"
            id="organizer_email"
            name="organizer_email"
            value={formData.organizer_email}
            readOnly
            className="input input-bordered w-full bg-gray-200"
          />
        </div>
        <button
          type="submit"
          className="btn btn-primary w-full py-3 text-lg"
        >
          Update Post
        </button>
      </form>
    </div>
  );
};

export default UpdatePost;