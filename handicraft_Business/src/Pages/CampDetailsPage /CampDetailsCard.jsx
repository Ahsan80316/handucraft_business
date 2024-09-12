import { useState, useEffect } from "react";
import Lottie from "lottie-react";
import loadingAnimation from "../../../public/animation.json";
import LazyLoad from 'react-lazy-load';

const BusinessDetails = ({ business }) => {
  const [loading, setLoading] = useState(true);
  const [businessData, setBusinessData] = useState(null);
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    // Simulate a data fetching delay
    setTimeout(() => {
      setBusinessData(business);
      setLoading(false);
    }, 1000); // Adjust the timeout as needed
  }, [business]);

  useEffect(() => {
    // Load favorites from local storage
    const savedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavorites(savedFavorites);
  }, []);

  const handleFavoriteToggle = () => {
    const updatedFavorites = favorites.includes(businessData._id)
      ? favorites.filter(id => id !== businessData._id)
      : [...favorites, businessData._id];
    setFavorites(updatedFavorites);
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <Lottie
          className="flex justify-center items-center min-h-[70%]"
          animationData={loadingAnimation}
          width={500}
          height={350}
        />
      </div>
    );
  }

  const products = businessData?.products || [];

  return (
    <div className="container mx-auto p-6">
      {/* Banner Section */}
      <div className="flex flex-col md:flex-row items-center bg-blue-100 p-6 rounded-lg mb-8">
        <LazyLoad height={128} offsetVertical={300}>
          <img
            src={businessData.businessLogo}
            alt={businessData.businessName}
            className="w-32 h-32 rounded-full mb-4 md:mb-0 md:mr-6 object-cover"
          />
        </LazyLoad>
        <div className="text-center md:text-left">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">{businessData.businessName}</h1>
          <p className="text-gray-600 mb-2">{businessData.description}</p>
          <div className="flex flex-col md:flex-row items-center mt-2">
            <span className="mr-4 mb-2 md:mb-0">👍 {businessData.likes} Likes</span>
            <span className="mb-2 md:mb-0">🛠 {businessData.yearsOfOperation} Years in Operation</span>
            <span className="ml-4 mb-2 md:mb-0">🛍 {businessData.numberOfProducts} Products</span>
          </div>
          <button
            onClick={handleFavoriteToggle}
            className={`mt-2 px-4 py-2 rounded ${
              favorites.includes(businessData._id)
                ? "bg-red-500 text-white"
                : "bg-gray-300 text-gray-800"
            }`}
          >
            {favorites.includes(businessData._id) ? "★ Favorited" : "☆ Favorite"}
          </button>
        </div>
      </div>

      {/* Product Display Section */}
      <div>
        <h2 className="text-2xl font-semibold mb-4">Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {products.length > 0 ? (
            products.map((product, index) => (
              <div key={index} className="bg-white p-4 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
                <p className="text-gray-600 mb-2">
                  <strong>Materials Used:</strong> {product.materialsUsed}
                </p>
                <p className="text-gray-600 mb-2">
                  <strong>Crafting Method:</strong> {product.craftingMethod}
                </p>
                <p className="text-yellow-500 mb-2">
                  <strong>Rating:</strong> {"⭐".repeat(product.rating)}
                </p>
              </div>
            ))
          ) : (
            <p className="text-gray-600">No products available</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default BusinessDetails;
