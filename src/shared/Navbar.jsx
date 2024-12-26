
import { useContext, useState, useEffect } from "react";
import AuthContext from "../context/AuthContext";
import logo from "../../../volunteer-management-client/src/assets/images/logo-volumnteer.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // For mobile menu toggle

  // Check if dark mode is enabled in localStorage
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      setIsDarkMode(true);
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  // Toggle dark mode
  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    if (!isDarkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  return (
    <nav className="bg-base-100 shadow-md">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo Section */}
        <Link to="/" className="flex items-center gap-2">
          <img className="w-auto h-7" src={logo} alt="Volunteer Logo" />
          <span className="font-bold text-lg">VolunteerManagement</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex lg:items-center lg:gap-6">
          <ul className="flex items-center gap-6">
            <li>
              <Link
                to="/"
                className="hover:text-gray-600 text-base font-medium"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/all-volunteer-posts"
                className="hover:text-gray-600 text-base font-medium"
              >
                All Volunteer Need Posts
              </Link>
            </li>
            {!user && (
              <li>
                <Link
                  to="/login"
                  className="hover:text-gray-600 text-base font-medium"
                >
                  Login
                </Link>
              </li>
            )}
          </ul>

          {/* User Menu */}
          {user && (
            <div className="dropdown dropdown-end relative">
              <div
                tabIndex={0}
                role="button"
                className="flex items-center space-x-2 cursor-pointer"
              >
                <img
                  src={user?.photoURL}
                  alt={user?.displayName}
                  title={user?.displayName}
                  className="w-10 h-10 rounded-full"
                />
                <span className="hidden lg:inline text-base font-medium">
                  {user?.displayName}
                </span>
              </div>

              <ul
                tabIndex={0}
                className="menu dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li>
                  <Link to="/add-post" className="justify-between">
                    Add Volunteer Need Post
                  </Link>
                </li>
                <li>
                  <Link to="/manage-posts">Manage My Posts</Link>
                </li>
                <li>
                  <Link to="/my-profile">My Profile</Link>
                </li>
                <li className="mt-2">
                  <button
                    onClick={logOut}
                    className="block w-full text-center bg-gray-200 py-2 rounded hover:bg-gray-300"
                  >
                    Logout
                  </button>
                </li>
              </ul>
            </div>
          )}
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="lg:hidden flex items-center"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {isMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-base-100 shadow-md">
          <ul className="flex flex-col gap-4 p-4">
            <li>
              <Link
                to="/"
                className="hover:text-gray-600 text-base font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/all-volunteer-posts"
                className="hover:text-gray-600 text-base font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                All Volunteer Need Posts
              </Link>
            </li>
            {!user && (
              <li>
                <Link
                  to="/login"
                  className="hover:text-gray-600 text-base font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Login
                </Link>
              </li>
            )}
          </ul>

          {user && (
            <div className="p-4">
              <div className="flex items-center space-x-2 mb-4">
                <img
                  src={user?.photoURL}
                  alt={user?.displayName}
                  title={user?.displayName}
                  className="w-10 h-10 rounded-full"
                />
                <span className="text-base font-medium">
                  {user?.displayName}
                </span>
              </div>
              <ul className="flex flex-col gap-4">
                <li>
                  <Link to="/add-post" onClick={() => setIsMenuOpen(false)}>
                    Add Volunteer Need Post
                  </Link>
                </li>
                <li>
                  <Link to="/manage-posts" onClick={() => setIsMenuOpen(false)}>
                    Manage My Posts
                  </Link>
                </li>
                
                <li>
                  <button
                    onClick={() => {
                      logOut();
                      setIsMenuOpen(false);
                    }}
                    className="block w-full text-center bg-gray-200 py-2 rounded hover:bg-gray-300"
                  >
                    Logout
                  </button>
                </li>
              </ul>
            </div>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;