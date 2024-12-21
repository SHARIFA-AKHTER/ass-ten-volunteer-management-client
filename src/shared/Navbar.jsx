
import { Link, NavLink, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  const toggleMenu = () => {
    const menu = document.getElementById("mobile-menu");
    menu.classList.toggle("hidden");
  };

  return (
    <nav className="bg-gray-800 text-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center px-4 py-3">
        {/* Logo/Website Name */}
        <Link to="/" className="text-xl font-bold hover:text-gray-300">
          VolunteerConnect
        </Link>

        {/* Hamburger Menu (For Mobile) */}
        <div className="lg:hidden">
          <button
            id="menu-button"
            className="text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            onClick={toggleMenu}
          >
            <svg
              className="w-6 h-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {/* Navigation Links */}
        <ul
          id="mobile-menu"
          className="hidden lg:flex lg:space-x-6 flex-col lg:flex-row absolute lg:static bg-gray-800 w-full lg:w-auto left-0 top-full lg:top-auto lg:items-center lg:mt-0 mt-3 lg:space-y-0 space-y-2 px-4 lg:px-0 z-40"
        >
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                `hover:text-gray-300 ${isActive ? "text-blue-400" : ""}`
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/all-posts"
              className={({ isActive }) =>
                `hover:text-gray-300 ${isActive ? "text-blue-400" : ""}`
              }
            >
              All Volunteer Need Posts
            </NavLink>
          </li>
        </ul>

        {/* Conditional Login/Logout */}
        <div className="flex items-center space-x-4">
          <button
            onClick={() => navigate("/login")}
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded transition-all duration-300 ease-in-out text-sm md:text-base lg:text-lg"
          >
            Login
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;