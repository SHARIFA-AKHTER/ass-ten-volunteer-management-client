
import { useContext, useState } from "react";
import AuthContext from "../context/AuthContext";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
const AddVolunteerPost = () => {
  const { user } = useContext(AuthContext); 
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    thumbnail: '',
    title: '',
    description: '',
    category: '',
    location: '',
    volunteersNeeded: '',
    deadline: new Date(),
   
  });
  console.log(formData)
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleDateChange = (date) => {
    setFormData({ ...formData, deadline: date });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const postData = {
      ...formData,
      organizerName: user.name,
      organizerEmail: user.email,
    };

    try {
      const response = await fetch(`http://localhost:9000/volunteer-needs-application`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(postData),
      });
      if (response.ok) {
        Swal.fire('Success!', 'Volunteer post added successfully!', 'success');
        setFormData({
          thumbnail: '',
          title: '',
          description: '',
          category: '',
          location: '',
          volunteersNeeded: '',
          deadline: new Date(),
        });  
        
        navigate('/volunteer-request')
       
      } else {
        Swal.fire('Error!', 'Failed to add volunteer post.', 'error');
      }
    } catch (error) {
      console.error(error);
      Swal.fire('Error!', 'Something went wrong!', 'error');
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Add Volunteer Need Post</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-sm font-medium">Thumbnail URL</label>
          <input
            type="text"
            name="thumbnail"
            value={formData.thumbnail}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium">Post Title</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium">Description</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          ></textarea>
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium">Category</label>
          <select
            name="category"
            value={formData.category}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          >
            <option value="">Select a category</option>
            <option value="Healthcare">Healthcare</option>
            <option value="Education">Education</option>
            <option value="Social Service">Social Service</option>
            <option value="Animal Welfare">Animal Welfare</option>
          </select>
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium">Location</label>
          <input
            type="text"
            name="location"
            value={formData.location}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium">No. of Volunteers Needed</label>
          <input
            type="number"
            name="volunteersNeeded"
            value={formData.volunteersNeeded}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium">Deadline</label>
          <DatePicker
            selected={formData.deadline}
            onChange={handleDateChange}
            dateFormat="yyyy-MM-dd"
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium">Organizer Name</label>
          <input
            type="text"
            value={user.name}
            readOnly
            className="w-full p-2 border rounded bg-gray-100"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium">Organizer Email</label>
          <input
            type="email"
            value={user.email}
            readOnly
            className="w-full p-2 border rounded bg-gray-100"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
        >
          Add Post
        </button>
      </form>
    </div>
  );
};

export default AddVolunteerPost;