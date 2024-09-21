import AwesomeSlider from "react-awesome-slider";
import withAutoplay from "react-awesome-slider/dist/autoplay";
import "react-awesome-slider/dist/styles.css";
import banner_1 from "../../assets/Banner/banner-1.jpg";
import banner_2 from "../../assets/Banner/banner-2.jpg";
import banner_3 from "../../assets/Banner/banner-3.jpg";
const AutoplaySlider = withAutoplay(AwesomeSlider);
const Banner = () => {
  return (
    <div className="h-[80vh] bg-hero">
      <div className="flex flex-col md:flex-row items-center justify-center pt-12 px-4">
        <div className="flex-1 px-2 mt-8 md:mt-0">
          <h1 className="text-3xl md:text-5xl text-center mb-2 text-blue-500">
            Discover the Art of Tradition: Bangladeshi Handicrafts
          </h1>
          <br />
          <p className="text-center">
            Explore the rich heritage of Bangladeshi craftsmanship with
            Bangladeshi Handicrafts. Specializing in exquisite, handmade items that
            reflect the cultural diversity and artistic mastery of our artisans,
            Bangladeshi Handicrafts brings timeless traditions to life.
          </p>
        </div>
        <div className="hidden md:inline flex-1 p-0 md:p-28">
          <AutoplaySlider
            play={true}
            cancelOnInteraction={false}
            interval={6000}
          >
            <div data-src={banner_1} />
            <div data-src={banner_2} />
            <div data-src={banner_3} />
          </AutoplaySlider>
        </div>
        <div className="md:hidden flex-1 p-0 md:p-28">
          <img src={banner_2} alt="Banner Image" className="w-full" />
        </div>
      </div>
    </div>
  );
};

export default Banner;