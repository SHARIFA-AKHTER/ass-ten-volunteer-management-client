
const BeVolunteerModal = ({ closeModal, post, user }) => {
  const {
    thumbnail,
    title,
    description,
    category,
    location,
    volunteersNeeded,
    deadline,
    organizerName,
    organizerEmail,
  } = post;

  const handleVolunteerSubmit = (e) => {
    e.preventDefault();

    const suggestion = e.target.suggestion.value;

    const volunteerData = {
      postId: post.id, // Ensure this comes from the post object
      volunteerName: user?.name || "Logged-in User Name", // Replace with actual user data
      volunteerEmail: user?.email || "Logged-in User Email", // Replace with actual user data
      suggestion,
      status: "Requested",
    };

    // Save the volunteer request to the database
    fetch(`http://localhost:9000/volunteer-needs-application/${post._id}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(volunteerData),
    })
      .then((res) => res.json())
      .then((data) => {
        alert("Your volunteer request has been submitted!");
        closeModal();
      });
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center px-4">
      <div className="bg-white p-6 sm:p-8 md:p-10 rounded-lg w-full max-w-lg md:max-w-2xl lg:max-w-3xl shadow-lg overflow-y-auto max-h-[90vh]">
        <h2 className="text-2xl font-bold mb-6 text-center">Be a Volunteer</h2>
        <form onSubmit={handleVolunteerSubmit}>
          <div className="mb-4">
            <label className="block font-medium">Thumbnail:</label>
            <input
              type="text"
              value={thumbnail}
              readOnly
              className="w-full p-2 border rounded"
            />
          </div>
          <div className="mb-4">
            <label className="block font-medium">Post Title:</label>
            <input
              type="text"
              value={title}
              readOnly
              className="w-full p-2 border rounded"
            />
          </div>
          <div className="mb-4">
            <label className="block font-medium">Description:</label>
            <textarea
              value={description}
              readOnly
              className="w-full p-2 border rounded"
            ></textarea>
          </div>
          <div className="mb-4 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block font-medium">Category:</label>
              <input
                type="text"
                value={category}
                readOnly
                className="w-full p-2 border rounded"
              />
            </div>
            <div>
              <label className="block font-medium">Location:</label>
              <input
                type="text"
                value={location}
                readOnly
                className="w-full p-2 border rounded"
              />
            </div>
          </div>
          <div className="mb-4 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block font-medium">Volunteers Needed:</label>
              <input
                type="text"
                value={volunteersNeeded}
                readOnly
                className="w-full p-2 border rounded"
              />
            </div>
            <div>
              <label className="block font-medium">Deadline:</label>
              <input
                type="text"
                value={deadline}
                readOnly
                className="w-full p-2 border rounded"
              />
            </div>
          </div>
          <div className="mb-4 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block font-medium">Organizer Name:</label>
              <input
                type="text"
                value={organizerName}
                readOnly
                className="w-full p-2 border rounded"
              />
            </div>
            <div>
              <label className="block font-medium">Organizer Email:</label>
              <input
                type="text"
                value={organizerEmail}
                readOnly
                className="w-full p-2 border rounded"
              />
            </div>
          </div>
          <div className="mb-4">
            <label className="block font-medium">Your Suggestion:</label>
            <textarea
              name="suggestion"
              placeholder="Enter your suggestion"
              className="w-full p-2 border rounded"
            ></textarea>
          </div>
          <div className="flex justify-end space-x-2">
            <button
              type="submit"
              className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
            >
              Request
            </button>
            <button
              type="button"
              className="bg-gray-300 px-4 py-2 ml-2 rounded hover:bg-gray-400"
              onClick={closeModal}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BeVolunteerModal;