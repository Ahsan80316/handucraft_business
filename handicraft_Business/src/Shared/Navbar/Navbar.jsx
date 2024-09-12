import { useState, useContext } from "react";
import { BiLogIn } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";
import { FaSignOutAlt, FaStream, FaSun, FaMoon } from "react-icons/fa"; // Added icons for dark/light mode
import { NavLink } from "react-router-dom";
import useAuth from "../../Hook/useAuth";
import { themeContext } from "../../context/ContextApi";

const Navbar = () => {
  const { user, logout } = useAuth();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { darkMode, toggleDarkMode } = useContext(themeContext);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prevState) => !prevState);
  };

  const navLinkStyles = `
    p-2 rounded-lg transition duration-300 
    ease-in-out transform hover:scale-105
    ${
      darkMode
        ? "text-white hover:text-yellow-400"
        : "text-gray-700 hover:text-blue-500"
    }
  `;

  return (
    <nav
      className={`shadow-lg fixed inset-x-0 top-0 z-10 ${
        darkMode ? "bg-gray-800" : "bg-white"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="flex justify-between items-center py-3 md:py-4">
          <NavLink to="/" className="flex items-center py-2">
            <FaStream
              className={`h-8 w-8 ${
                darkMode ? "text-yellow-400" : "text-gray-700"
              } mr-2`}
            />
            <span
              className={`font-semibold text-lg ${
                darkMode ? "text-white" : "text-gray-700"
              }`}
            >
              Bangladeshi Handicrafts
            </span>
          </NavLink>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button onClick={toggleMobileMenu} className="mobile-menu-button">
              <svg
                className={`w-6 h-6 ${
                  darkMode ? "text-white" : "text-gray-700"
                }`} // Adjust icon color in dark mode
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M4 6h16M4 12h16m-7 6h7"></path>
              </svg>
            </button>
          </div>

          {/* Navbar links */}
          <div className="hidden md:flex items-center space-x-1">
            <NavLink to="/" className={navLinkStyles}>
              Home
            </NavLink>
            <NavLink to="/blogs" className={navLinkStyles}>
              Blogs
            </NavLink>
            <NavLink to="/contactUs" className={navLinkStyles}>
              Contact us
            </NavLink>
            <NavLink to="/favorite" className={navLinkStyles}>
              My Favorite
            </NavLink>
          </div>

          {/* Dark Mode Toggle Button with Icon */}
          <button
            onClick={toggleDarkMode}
            className="px-4 py-2 flex items-center"
          >
            {darkMode ? (
              <FaSun className="text-yellow-400 h-6 w-6" /> // Light mode icon
            ) : (
              <FaMoon className="text-blue-600 h-6 w-6" /> // Dark mode icon
            )}
          </button>

          {/* User Login/Logout section */}
          <div className="hidden md:flex items-center">
            {user?.email ? (
              <div className="flex items-center gap-2">
                {user.photoURL ? (
                  <img
                    src={user.photoURL}
                    alt="User Profile"
                    className="h-8 w-8 rounded-full object-cover"
                  />
                ) : (
                  <CgProfile
                    className={`h-6 w-6 ${
                      darkMode ? "text-white" : "text-gray-700"
                    }`}
                  />
                )}
                <span
                  className={`text-sm ${
                    darkMode ? "text-white" : "text-gray-700"
                  }`}
                >
                  {user.displayName}
                </span>
                <button
                  onClick={logout}
                  className="flex items-center gap-1 text-red-500 hover:text-red-700"
                >
                  <FaSignOutAlt className="text-lg" />
                  <span className="text-sm">Logout</span>
                </button>
              </div>
            ) : (
              <NavLink
                to="/login"
                className={`flex items-center gap-1 ${
                  darkMode ? "text-white" : "text-gray-700 hover:text-blue-500"
                }`}
              >
                <BiLogIn className="text-lg" />
                <span className="text-sm">Login</span>
              </NavLink>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden ${isMobileMenuOpen ? "block" : "hidden"}`}>
        <ul className="space-y-2">
          <li>
            <NavLink to="/" className={navLinkStyles}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/blogs" className={navLinkStyles}>
              Blogs
            </NavLink>
          </li>
          <li>
            <NavLink to="/contactUs" className={navLinkStyles}>
              Contact us
            </NavLink>
          </li>
          <li>
            <NavLink to="/favorite" className={navLinkStyles}>
              My Favorite
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
