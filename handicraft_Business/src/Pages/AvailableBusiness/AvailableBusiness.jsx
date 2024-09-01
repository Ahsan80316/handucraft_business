import { useQuery } from "@tanstack/react-query";
import Lottie from "lottie-react";
import { Helmet } from "react-helmet-async";
import loadingAnimation from "../../../public/animation.json";
import useAxiosPublicApi from "../../Hook/useAxiosPublicApi";
import Container from "../../Shared/Conteinar/Conteinar";
import Campcard from "./Campcard";

const AvailableCamps = () => {
  const axiosPublic = useAxiosPublicApi();
  const { data: allBusiness = [], isLoading } = useQuery({
    queryKey: ["allBusiness"],
    queryFn: async () => {
      const res = await axiosPublic.get("/allBusiness");
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
    <>
      <Helmet>
        <title>Bangladeshi Handicrafts | All Business</title>
      </Helmet>
      <Container>
        <div className=" mt-32 grid md:grid-cols-3 gap-4">
          {(allBusiness.map((business) => <Campcard key={business.id} business={business} />))}
        </div>
      </Container>
    </>
  );
};

export default AvailableCamps;
