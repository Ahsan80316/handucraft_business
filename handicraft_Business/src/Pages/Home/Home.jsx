import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import Banner from "./Banner";
import HowItWorks from "./HowItWorks/HowItWorks";
import PopularMedicalCamp from "./PopularMedicalCamp";
import Testimonials from "./Testimonials/Testimonials";
import { themeContext } from "../../context/ContextApi"; // Import the themeContext

const Home = () => {
  const { darkMode } = useContext(themeContext); // Get darkMode from context

  return (
    <>
      <Helmet>
        <title>Handcraft Business | Home</title>
      </Helmet>
      <div
        className={`min-h-screen ${darkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900"}`} 
      >
        <Banner />
        <PopularMedicalCamp />
        <Testimonials />
        <HowItWorks />
      </div>
    </>
  );
};

export default Home;
