import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useAxiosPublicApi from "../../Hook/useAxiosPublicApi";
import Container from "../../Shared/Conteinar/Conteinar";
import CampDetailsCard from "./CampDetailsCard";
import JoinCampModal from "./JoinCampModal";
import { Helmet } from "react-helmet-async";

const CampDetailsPage = () => {
  const params = useParams();
  const axiosPublic = useAxiosPublicApi();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [campDetails, setCampDetails] = useState({});
  
  
  useEffect(() => {
    async function fetchCampDetails() {
      try {
        const response = await axiosPublic.get(`/camp-Details/${params._id}`);
        setCampDetails(response.data);
      } catch (error) {
        console.error("Error fetching camp details:", error);
      }
    }
    fetchCampDetails();
  }, [params._id, axiosPublic]);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <>
     <Helmet>
        <title>MediAssist Hub|CampDetails</title>
      </Helmet>
     <Container>
      <div className="camp-details-page mt-28">
        <CampDetailsCard campDetails={campDetails} onJoinClick={toggleModal} />

        {isModalOpen && (
          <JoinCampModal
            onClose={toggleModal}
            campDetails={campDetails}
          />
        )}
      </div>
    </Container>
    </>
   
  );
};

export default CampDetailsPage;
