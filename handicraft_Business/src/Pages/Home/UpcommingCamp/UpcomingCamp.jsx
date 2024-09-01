import { useEffect, useState } from "react";
import useAxiosPublicApi from "../../../Hook/useAxiosPublicApi";
import SectionTitle from "../../../Shared/Section Tittle/SectionTittle";

const UpcomingCamp = () => {
  const [UpComingCamp, setUpComingCamp] = useState([]);
  const axiosPublic = useAxiosPublicApi();

  useEffect(() => {
    axiosPublic
      .get("/upComingCamp")
      .then((response) => {
        setUpComingCamp(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [axiosPublic]);
  return (
    <div className="container mx-auto py-8">
      <SectionTitle
        subHeading="Discover Our Upcoming Medical Camps"
        heading="Upcoming Medical Camps"
      ></SectionTitle>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {UpComingCamp.map((UpComingCamp) => (
          <div
            key={UpComingCamp.id}
            className="bg-white rounded-lg shadow-md overflow-hidden"
          >
            <img
              src={UpComingCamp.image}
              alt={UpComingCamp.name}
              className="w-full h-40 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">
                {UpComingCamp.name}
              </h2>
              <p className="text-gray-600 mb-2">{UpComingCamp.services}</p>
              <p className="text-gray-600">{UpComingCamp.professionals}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UpcomingCamp;
