
import logo from "../../src/assets/images/footer-logo.png";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8 mt-12">
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
        {/* About Section */}
        <div className="text-center sm:text-left">
          {/* Logo */}
          <div className="mb-4">
            <img
              src={logo}
              alt="Volunteer Connect Logo"
              className="mx-auto sm:mx-0 h-12 w-auto"
            />
          </div>
          <h3 className="text-lg font-bold mb-4">About Us</h3>
          <p className="text-sm leading-relaxed">
            We connect volunteers with impactful causes. Join us to make a
            difference and help create a better future for all.
          </p>
        </div>

        {/* Quick Links */}
        <div className="text-center sm:text-left">
          <h3 className="text-lg font-bold mb-4">Quick Links</h3>
          <ul className="text-sm space-y-2">
            <li>
              <a href="/" className="hover:text-gray-400">
                Home
              </a>
            </li>
            <li>
              <a href="/all-volunteer-posts" className="hover:text-gray-400">
                All Volunteer Need Posts
              </a>
            </li>
            <li>
              <a href="/my-profile" className="hover:text-gray-400">
                My Profile
              </a>
            </li>
            <li>
              <a href="/login" className="hover:text-gray-400">
                Login
              </a>
            </li>
            <li>
              <a href="/register" className="hover:text-gray-400">
                Register
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Us */}
        <div className="text-center sm:text-left">
          <h3 className="text-lg font-bold mb-4">Contact Us</h3>
          <ul className="text-sm space-y-2">
            <li>
              Email:{" "}
              <a
                href="mailto:info@volunteerconnect.com"
                className="hover:text-gray-400"
              >
                info@volunteerconnect.com
              </a>
            </li>
            <li>
              Phone:{" "}
              <a href="tel:+1234567890" className="hover:text-gray-400">
                +1 (234) 567-890
              </a>
            </li>
            <li>Address: 123 Volunteer St., City, Country</li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-8 border-t border-gray-700 pt-4 text-center">
        <p className="text-sm">© 2024 Volunteer Connect. All Rights Reserved.</p>
        <div className="mt-4 flex justify-center space-x-4">
          <a href="#" className="hover:text-gray-400">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="#" className="hover:text-gray-400">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#" className="hover:text-gray-400">
            <i className="fab fa-linkedin-in"></i>
          </a>
          <a href="#" className="hover:text-gray-400">
            <i className="fab fa-instagram"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;