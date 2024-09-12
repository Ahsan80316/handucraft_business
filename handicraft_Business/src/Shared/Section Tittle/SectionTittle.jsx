import { useContext } from "react";
import { themeContext } from "../../context/ContextApi"; 

const SectionTitle = ({ heading, subHeading }) => {
  const { darkMode } = useContext(themeContext); 

  return (
    <div
      className={`mx-auto text-center my-8 p-4 rounded-xl shadow-xl max-w-xl 
      ${darkMode ? "bg-gray-800 bg-opacity-80 text-white" : "bg-white bg-opacity-10 text-gray-800"} 
      backdrop-blur-lg`}
    >
      <p
        className={`mb-2 font-semibold tracking-widest 
        ${darkMode ? "text-yellow-400" : "text-indigo-600"}`}
      >
        {subHeading.toUpperCase()}
      </p>
      <h3
        className={`text-4xl font-bold uppercase py-2 
        ${darkMode ? "text-white border-yellow-400" : "text-gray-800 border-indigo-600"} 
        border-b-4 border-t-4`}
      >
        {heading}
      </h3>
    </div>
  );
};

export default SectionTitle;
