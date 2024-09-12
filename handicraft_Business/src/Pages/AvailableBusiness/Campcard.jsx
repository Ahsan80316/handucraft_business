import { useContext } from "react";
import { Link } from "react-router-dom";
import { themeContext } from "../../context/ContextApi"; 

const Campcard = ({ business }) => {
  const { darkMode } = useContext(themeContext);

  return (
    <div
      key={business.businessName}
      className={`border p-4 rounded-lg shadow-lg mb-2
        ${darkMode ? "bg-gray-900 border-gray-800 text-white" : "bg-white border-gray-300 text-gray-900"}
      `}
    >
      <img
        src={business.businessLogo}
        alt={business.businessName}
        className={`w-full h-48 object-cover mb-4 rounded-t-lg
          ${darkMode ? "border-gray-600" : "border-gray-300"}
        `}
      />
      <h3 className={`text-2xl font-bold mb-2 
        ${darkMode ? "text-white" : "text-gray-900"}
      `}>
        {business.businessName}
      </h3>
      <p className={`text-sm mb-2
        ${darkMode ? "text-gray-200" : "text-gray-700"}
      `}>
        <strong>Years of Operation:</strong> {business.yearsOfOperation}{" "}
        years
      </p>
      <p className={`text-sm mb-2
        ${darkMode ? "text-gray-200" : "text-gray-700"}
      `}>
        <strong>Number of Products:</strong> {business.numberOfProducts}
      </p>
      <p className={`text-sm mb-2
        ${darkMode ? "text-gray-200" : "text-gray-700"}
      `}>
        <strong>Likes:</strong> {business.likes}
      </p>
      <div className="flex justify-center mt-2">
        <Link to={`/business-details/${business._id}`}>
          <button
            className={`bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full mt-4 transition duration-300 ease-in-out transform hover:scale-105
              ${darkMode ? "hover:bg-pink-400" : "hover:bg-blue-700"}
            `}
          >
            View Details
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Campcard;
