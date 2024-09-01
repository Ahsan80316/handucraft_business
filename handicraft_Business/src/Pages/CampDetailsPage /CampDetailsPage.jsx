import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useAxiosPublicApi from "../../Hook/useAxiosPublicApi";
import Container from "../../Shared/Conteinar/Conteinar";
import CampDetailsCard from "./CampDetailsCard";
import { Helmet } from "react-helmet-async";

const CampDetailsPage = () => {
  const params = useParams();
  const axiosPublic = useAxiosPublicApi();
  const [campDetails, setCampDetails] = useState({});
  
  
  useEffect(() => {
    async function fetchCampDetails() {
      try {
        const response = await axiosPublic.get(`/business-details/${params._id}`);
        setCampDetails(response.data);
      } catch (error) {
        console.error("Error fetching camp details:", error);
      }
    }
    fetchCampDetails();
  }, [params._id, axiosPublic]);

  return (
    <>
     <Helmet>
        <title>Bangladeshi Handicrafts | Business Details</title>
      </Helmet>
     <Container>
      <div className="camp-details-page mt-28">
        <CampDetailsCard business={campDetails}  />
      </div>
    </Container>
    </>
   
  );
};

export default CampDetailsPage;
