
import { BiSolidCategory } from "react-icons/bi";
import { MdDateRange } from "react-icons/md";
import { Link } from "react-router-dom";

const VolunteerNeedsNowCard = ({ post }) => {
  const { _id, thumbnail, title, category, deadline } = post;

  return (
    <div className="card card-compact bg-base-100 shadow-xl hover:shadow-2xl transition-all rounded-lg">
      <figure className="relative">
        <img
          src={thumbnail}
          alt="volunteer"
          className="rounded-t-lg object-cover w-full h-48 sm:h-56 md:h-64 lg:h-72"  
        />
      </figure>
      <div className="card-body p-4">
        <h2 className="card-title text-lg md:text-xl font-semibold mb-2 text-center sm:text-left">
          {title}
        </h2>
        <div className="flex items-center space-x-2 mb-2 justify-center sm:justify-start">
          <BiSolidCategory className="text-primary text-lg" />
          <p className="text-sm md:text-base text-gray-600">{category}</p>
        </div>
        <div className="flex items-center space-x-2 mb-4 justify-center sm:justify-start">
          <MdDateRange className="text-primary text-lg" />
          <p className="text-sm md:text-base text-gray-600">{deadline}</p>
        </div>
        <div className="card-actions justify-center sm:justify-end">
          <Link to={`/volunteer-needs-now/${_id}`}>
            <button className="btn btn-primary px-6 py-2 text-sm md:text-base
             text-white hover:bg-primary-focus transition-all rounded-md">
              View Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default VolunteerNeedsNowCard;

