import { BiSolidCategory } from "react-icons/bi";
import { MdDateRange } from "react-icons/md";
import { Link } from "react-router-dom";

const VolunteerNeedsNowCard = ({ post }) => {
  const {_id ,thumbnail, title, category, deadline } = post;

  return (
    <div className="card card-compact bg-base-100 shadow-xl hover:shadow-2xl transition-all">
      <figure>
        <img
          src={thumbnail}
          alt="volunteer"
          className="rounded-t-lg object-cover w-full h-48"  // Ensuring the image is properly styled
        />
      </figure>
      <div className="card-body p-4">
        <h2 className="card-title text-xl font-semibold mb-2">{title}</h2>
        <div className="flex items-center space-x-2 mb-2">
          <BiSolidCategory className="text-primary" />
          <p className="text-sm text-gray-600">{category}</p>
        </div>
        <div className="flex items-center space-x-2 mb-4">
          <MdDateRange className="text-primary" />
          <p className="text-sm text-gray-600">{deadline}</p>
        </div>
        <div className="card-actions justify-center">
         <Link to={`/volunteer-needs-now/${post._id}`}>
             <button className="btn btn-primary px-6 py-2 text-white hover:bg-primary-focus transition-all">
                 View Details
             </button>
         </Link>
        </div>
      </div>
    </div>
  );
};

export default VolunteerNeedsNowCard;

