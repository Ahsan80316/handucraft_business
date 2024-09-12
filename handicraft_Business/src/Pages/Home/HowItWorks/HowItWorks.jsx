import { useContext } from "react";
import SectionTitle from "../../../Shared/Section Tittle/SectionTittle";
import { themeContext } from "../../../context/ContextApi"; // Import theme context

const HowItWorks = () => {
  const { darkMode } = useContext(themeContext); // Get darkMode from context

  return (
    <div>
      <SectionTitle
        subHeading="Discover Unique Creations"
        heading="How to Explore and Shop"
        className={`${
          darkMode ? "text-gray-300 border-gray-700" : "text-gray-800 border-gray-300"
        }`}
      />
      <section
        className={`py-12 ${
          darkMode ? "bg-gray-800" : "bg-blue-100"
        }`}
      >
        <div className="container mx-auto text-center">
          <h2
            className={`text-3xl font-semibold mb-8 ${
              darkMode ? "text-gray-200" : "text-gray-800"
            }`}
          >
            How It Works
          </h2>
          <div
            className={`grid grid-cols-1 md:grid-cols-3 gap-10 ${
              darkMode ? "text-gray-200" : "text-gray-700"
            }`}
          >
            {/* Step 1 */}
            <div
              className={`p-8 rounded-xl shadow-lg transition-transform transform hover:scale-105 ${
                darkMode ? "bg-gray-700 text-gray-200" : "bg-white"
              }`}
            >
              <div
                className={`bg-blue-500 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6 text-xl ${
                  darkMode ? "bg-blue-400" : ""
                }`}
              >
                1
              </div>
              <h3 className="text-2xl font-bold mb-4">Explore Businesses</h3>
              <p>
                Browse through a variety of unique handicraft businesses. View
                their profiles, read reviews, and discover the products they
                offer.
              </p>
            </div>

            {/* Step 2 */}
            <div
              className={`p-8 rounded-xl shadow-lg transition-transform transform hover:scale-105 ${
                darkMode ? "bg-gray-700 text-gray-200" : "bg-white"
              }`}
            >
              <div
                className={`bg-blue-500 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6 text-xl ${
                  darkMode ? "bg-blue-400" : ""
                }`}
              >
                2
              </div>
              <h3 className="text-2xl font-bold mb-4">Select Your Favorite Items</h3>
              <p>
                Choose from a curated selection of handmade products. Each item
                tells a story of tradition and craftsmanship.
              </p>
            </div>

            {/* Step 3 */}
            <div
              className={`p-8 rounded-xl shadow-lg transition-transform transform hover:scale-105 ${
                darkMode ? "bg-gray-700 text-gray-200" : "bg-white"
              }`}
            >
              <div
                className={`bg-blue-500 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6 text-xl ${
                  darkMode ? "bg-blue-400" : ""
                }`}
              >
                3
              </div>
              <h3 className="text-2xl font-bold mb-4">Support Artisans</h3>
              <p>
                Purchase your selected items and support local artisans. Your
                purchase helps preserve traditional crafts and provides income
                to talented creators.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HowItWorks;
