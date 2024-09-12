import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import useAxiosPublicApi from "../../Hook/useAxiosPublicApi";
import { themeContext } from "../../context/ContextApi"; // Import theme context
import { useContext } from "react";

const MyFavoriteBusinesses = () => {
  const { darkMode } = useContext(themeContext); // Get darkMode from context
  const [favoriteBusinesses, setFavoriteBusinesses] = useState([]);
  const axiosPublic = useAxiosPublicApi();

  useEffect(() => {
    const fetchFavoriteBusinesses = async () => {
      const savedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
      const promises = savedFavorites.map(id => axiosPublic.get(`/business-details/${id}`));
      const results = await Promise.all(promises);
      setFavoriteBusinesses(results.map(res => res.data));
    };

    fetchFavoriteBusinesses();
  }, []);

  return (
    <div className={`pt-24 p-4 ${darkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-900"}`}>
      <h1 className="text-3xl font-bold mb-4">
        My Favorite Businesses
      </h1>
      <div className="grid md:grid-cols-3 gap-4">
        {favoriteBusinesses.length > 0 ? (
          favoriteBusinesses.map(business => (
            <div
              key={business._id}
              className={`border p-4 rounded-lg shadow-lg ${
                darkMode ? "bg-gray-800 border-gray-700 text-white" : "bg-white border-gray-300 text-gray-900"
              }`}
            >
              <img
                src={business.businessLogo}
                alt={business.businessName}
                className={`w-full h-48 object-cover mb-4 rounded-t-lg ${
                  darkMode ? "border-gray-600" : "border-gray-300"
                }`}
              />
              <h3 className={`text-2xl font-bold mb-2 ${
                darkMode ? "text-white" : "text-gray-900"
              }`}>
                {business.businessName}
              </h3>
              <p className={`text-sm mb-2 ${
                darkMode ? "text-gray-200" : "text-gray-700"
              }`}>
                <strong>Years of Operation:</strong> {business.yearsOfOperation} years
              </p>
              <p className={`text-sm mb-2 ${
                darkMode ? "text-gray-200" : "text-gray-700"
              }`}>
                <strong>Number of Products:</strong> {business.numberOfProducts}
              </p>
              <p className={`text-sm mb-2 ${
                darkMode ? "text-gray-200" : "text-gray-700"
              }`}>
                <strong>Likes:</strong> {business.likes}
              </p>
              <Link to={`/business-details/${business._id}`}>
                <button
                  className={`bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full mt-4 transition duration-300 ease-in-out transform hover:scale-105 ${
                    darkMode ? "hover:bg-blue-400" : "hover:bg-blue-700"
                  }`}
                >
                  View Details
                </button>
              </Link>
            </div>
          ))
        ) : (
          <p className={`text-gray-600 ${darkMode ? "text-gray-400" : "text-gray-800"}`}>No favorite businesses yet.</p>
        )}
      </div>
    </div>
  );
};

export default MyFavoriteBusinesses;
