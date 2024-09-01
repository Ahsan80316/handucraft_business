import { Link } from "react-router-dom";

const Campcard = ({camp}) => {
    console.log(camp);
    return (
        <div key={camp.id} className="border p-4 rounded-lg">
    <img src={camp.image} alt={camp.name} className="w-full h-auto mb-2" />
    <h3 className="text-xl font-semibold">{camp.name}</h3>
    <p>
      <strong>Date/Time:</strong> {new Date(camp.dateTime).toLocaleString()}
    </p>
    <p>
      <strong>Location:</strong> {camp.location}
    </p>
    <p>
      <strong>Services:</strong> {camp.services}
    </p>
    <p>
      <strong>Professionals:</strong> {camp.professionals}
    </p>
    <p>
      <strong>Audience:</strong> {camp.audience}
    </p>
    <p>
      <strong>Participants:</strong> {camp.participantCount}
    </p>

    <div className="flex justify-center mt-2">
      <Link to={`/camp-details/${camp._id}`}>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mt-4 transition duration-300 ease-in-out transform hover:scale-105">
          View Details
        </button>
      </Link>
    </div>
  </div>
    );
};

export default Campcard;