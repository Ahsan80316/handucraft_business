import { useState } from "react";
import { BiLogIn } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";
import { FaSignOutAlt, FaStream } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import useAuth from "../../Hook/useAuth";

const Navbar = () => {
  const { user, logout } = useAuth();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prevState) => !prevState);
  };

  const navLinkStyles = `
    text-gray-700 hover:text-blue-500 
    p-2 rounded-lg transition duration-300 
    ease-in-out transform hover:scale-105`;

  return (
    <nav className="bg-white shadow-lg fixed inset-x-0 top-0 z-10">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="flex justify-between items-center py-3 md:py-4">
          <NavLink to="/" className="flex items-center py-2">
            <FaStream className="h-8 w-8 text-gray-700 mr-2" />
            <span className="font-semibold text-gray-700 text-lg">
              {" "}
              Bangladeshi Handicrafts{" "}
            </span>
          </NavLink>
          <div className="md:hidden">
            <button onClick={toggleMobileMenu} className="mobile-menu-button">
              <svg
                className="w-6 h-6 text-gray-700"
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
          </div>
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
                  <CgProfile className="h-6 w-6 text-gray-700" />
                )}
                <span className="text-gray-700 text-sm">
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
                className="flex items-center gap-1 text-gray-700 hover:text-blue-500"
              >
                <BiLogIn className="text-lg" />
                <span className="text-sm">Login</span>
              </NavLink>
            )}
          </div>
        </div>
      </div>
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
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
