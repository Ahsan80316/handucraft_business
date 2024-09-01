import { Helmet } from "react-helmet-async";
import Banner from "./Banner";
import HowItWorks from "./HowItWorks/HowItWorks";
import PopularMedicalCamp from "./PopularMedicalCamp";
import Testimonials from "./Testimonials/Testimonials";
import UpcomingCamp from "./UpcommingCamp/UpcomingCamp";
const Home = () => {
  return (
    <>
      <Helmet>
        <title>Handcraft Business | Home</title>
      </Helmet>
      <div>
        <Banner></Banner>
        <PopularMedicalCamp></PopularMedicalCamp>
        <Testimonials></Testimonials>
        <UpcomingCamp></UpcomingCamp>
        <HowItWorks></HowItWorks>
      </div>
    </>
  );
};

export default Home;
