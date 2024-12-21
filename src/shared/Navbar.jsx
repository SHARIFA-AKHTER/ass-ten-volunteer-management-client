
import React, { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
// import { AuthContext } from "../context/AuthContext";

const Navbar = () => {
  //   const { user, logout } = useContext(AuthContext); // Assuming AuthContext provides `user` and `logout`
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to handle mobile menu toggle

  const handleLogout = () => {
    // logout();
    navigate("/login"); // Redirect to login page after logout
  };

  return (
    <nav className="bg-gray-800 text-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center px-4 py-3">
        {/* Logo/Website Name */}
        <Link to="/" className="text-xl font-bold hover:text-gray-300">
          VolunteerManagement
        </Link>

        {/* Hamburger Menu (Mobile) */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="lg:hidden text-gray-200 hover:text-white focus:outline-none"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>

        {/* Navigation Links */}
        <ul
          className={`lg:flex lg:space-x-6 ${
            isMenuOpen ? "block" : "hidden"
          } absolute lg:static top-16 left-0 w-full lg:w-auto bg-gray-800 lg:bg-transparent lg:flex-row flex-col lg:items-center`}
        >
          <li className="lg:mb-0 mb-2">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `block px-4 py-2 lg:px-0 lg:py-0 hover:text-gray-300 ${
                  isActive ? "text-blue-400" : ""
                }`
              }
            >
              Home
            </NavLink>
          </li>
          <li className="lg:mb-0 mb-2">
            <NavLink
              to="/all-posts"
              className={({ isActive }) =>
                `block px-4 py-2 lg:px-0 lg:py-0 hover:text-gray-300 ${
                  isActive ? "text-blue-400" : ""
                }`
              }
            >
              All Volunteer Need Posts
            </NavLink>
          </li>
        </ul>

        {/* Conditional Login/Logout */}
        <div className="flex items-center space-x-4">
          {/* {!user ? ( */}
          <button
            onClick={() => navigate("/login")}
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
          >
            Login
          </button>
          {/* ) : ( */}
          <div className="relative">
            {/* User Photo */}
            {/* <img
                src={user.photoURL}
                alt="User"
                className="w-10 h-10 rounded-full cursor-pointer hover:ring-2 ring-blue-500"
                title={user.displayName}
              /> */}

            {/* Dropdown Menu */}
            <div className="absolute right-0 mt-2 bg-white text-black shadow-lg rounded py-2 w-48 hidden lg:block">
              <button
                onClick={() => navigate("/add-post")}
                className="block px-4 py-2 hover:bg-gray-100"
              >
                Add Volunteer Need Post
              </button>
              <button
                onClick={() => navigate("/manage-posts")}
                className="block px-4 py-2 hover:bg-gray-100"
              >
                Manage My Posts
              </button>
              <button
                onClick={handleLogout}
                className="block px-4 py-2 hover:bg-gray-100 text-red-600"
              >
                Logout
              </button>
            </div>
          </div>
          {/* )} */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;