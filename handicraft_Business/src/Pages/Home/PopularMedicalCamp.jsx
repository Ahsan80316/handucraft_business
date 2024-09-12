import { useContext } from "react";
import { useQuery } from "@tanstack/react-query";
import useAxiosPublicApi from "../../Hook/useAxiosPublicApi";
import SectionTitle from "../../Shared/Section Tittle/SectionTittle";
import { Link } from "react-router-dom";
import Lottie from "lottie-react";
import loadingAnimation from "../../../public/animation.json";
import { themeContext } from "../../context/ContextApi"; // Import theme context

const PopularMedicalCamps = () => {
  const { darkMode } = useContext(themeContext); // Get darkMode from context
  const axiosPublic = useAxiosPublicApi();

  const { data: sixBusinessesProduct = [], isLoading } = useQuery({
    queryKey: ["/popularBusiness"],
    queryFn: async () => {
      const res = await axiosPublic.get("/popularBusiness");
      return res.data;
    },
  });

  if (isLoading) {
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

  return (
    <div
      className={`${
        darkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-900"
      } p-4`}
    >
      <SectionTitle
        subHeading={"Showcasing the Finest Artisans of Bangladesh"}
        heading={"Celebrating Handcrafted Excellence"}
        className={`mt-12 ${
          darkMode ? "text-gray-300 border-gray-700" : "text-gray-800 border-gray-300"
        }`}
      />
      <div className="container mx-auto p-4">
        <div className="grid md:grid-cols-3 gap-4">
          {sixBusinessesProduct.map((business) => (
            <div
              key={business.businessName}
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
                <strong>Years of Operation:</strong> {business.yearsOfOperation}{" "}
                years
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
              <div className="flex justify-center mt-2">
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
            </div>
          ))}
        </div>
        <Link
          to="/allBusiness"
          className={`bg-red-500 text-white px-4 py-2 rounded block text-center my-4 ${
            darkMode ? "hover:bg-red-400" : "hover:bg-red-600"
          }`}
        >
          See All Camps
        </Link>
      </div>
    </div>
  );
};

export default PopularMedicalCamps;
