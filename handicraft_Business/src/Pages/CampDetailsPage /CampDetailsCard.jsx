const CampDetailsCard = ({ campDetails, onJoinClick }) => {
  if (!campDetails) return null;

  return (
    <div className="camp-details-card">
      <img
        src={campDetails.image}
        alt={campDetails.name}
        className="w-full h-[500px] object-cover"
      />
      <div className="p-4">
        <h1 className="text-3xl font-bold mt-4">{campDetails.name}</h1>
        <p className="text-gray-700 mt-2">{campDetails.dateTime}</p>
        <p className="mt-2">{campDetails.location}</p>
        <p className="mt-2">Audience: {campDetails.audience}</p>
        <p className="mt-2">Description: {campDetails.moreDetails || 'No description provided'}</p>
        <button
          className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={onJoinClick}
        >
          Join Camp
        </button>
      </div>
    </div>
  );
};

export default CampDetailsCard;
