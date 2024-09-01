import { Link } from "react-router-dom";

const Campcard = ({business}) => {

    return (
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
      <div className="flex justify-center mt-2">
        <Link to={`/business-details/${business._id}`}>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mt-4 transition duration-300 ease-in-out transform hover:scale-105">
            View Details
          </button>
        </Link>
      </div>
    </div>
    );
};

export default Campcard;