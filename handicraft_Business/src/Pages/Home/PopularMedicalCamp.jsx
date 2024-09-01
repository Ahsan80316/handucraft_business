import { useQuery } from "@tanstack/react-query";
import useAxiosPublicApi from "../../Hook/useAxiosPublicApi";
import SectionTitle from "../../Shared/Section Tittle/SectionTittle";
import { Link } from "react-router-dom";
import Lottie from "lottie-react";
import loadingAnimation from "../../../public/animation.json";

const PopularMedicalCamps = () => {
  const axiosPublic = useAxiosPublicApi();

  const { data: sixBusinessesProduct = [],isLoading } = useQuery({
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
    <div>
      <SectionTitle
        className="mt-12"
        subHeading={"Showcasing the Finest Artisans of Bangladesh"}
        heading={"Celebrating Handcrafted Excellence"}
      ></SectionTitle>
      <div className="container mx-auto p-4">
        <div className="grid md:grid-cols-3 gap-4">
          {sixBusinessesProduct.map((business) => (
            <div
              key={business.businessName}
              className="border p-4 rounded-lg shadow-lg"
            >
              <img
                src={business.businessLogo}
                alt={business.businessName}
                className="w-full h-48 object-cover mb-4 rounded-t-lg"
              />
              <h3 className="text-2xl font-bold mb-2">
                {business.businessName}
              </h3>
              <p className="text-sm text-gray-600 mb-2">
                <strong>Years of Operation:</strong> {business.yearsOfOperation}{" "}
                years
              </p>
              <p className="text-sm text-gray-600 mb-2">
                <strong>Number of Products:</strong> {business.numberOfProducts}
              </p>
              <p className="text-sm text-gray-600 mb-2">
                <strong>Likes:</strong> {business.likes}
              </p>
              <p className="text-sm text-gray-600 mb-4">
                {business.description}
              </p>
              <div className="flex justify-center mt-2">
                <Link to={`/camp-Details/${business._id}`}>
                  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mt-4 transition duration-300 ease-in-out transform hover:scale-105">
                    View Details
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
        <Link
          to="/availableCamp"
          className="bg-red-500 text-white px-4 py-2 rounded block text-center my-4"
        >
          See All Camps
        </Link>
      </div>
    </div>
  );
};

export default PopularMedicalCamps;
