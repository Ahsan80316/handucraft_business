import Lottie from "lottie-react";
import loadingAnimation from "../../../public/animation.json";
import { FaHome, FaList, FaRegComments, FaRegRegistered } from "react-icons/fa";
import { ImProfile } from "react-icons/im";
import { MdOutlineManageAccounts } from "react-icons/md";
import { FcFeedback } from "react-icons/fc";
import { NavLink, Outlet } from "react-router-dom";
import useUserRole from "../../Hook/useUserRole";
import { Helmet } from "react-helmet-async";

const Dashboard = () => {
  const [role, isLoading] = useUserRole();

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

  const organizerNavLinks = (
    <>
      <li>
        <NavLink
          to="/dashboard/adminHome"
          className="flex items-center py-2 px-3 rounded hover:bg-blue-300 transition-colors duration-200"
        >
          <FaHome className="mr-3" />
          Admin Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/dashboard/add-a-camp"
          className="flex items-center py-2 px-3 rounded hover:bg-blue-300 transition-colors duration-200"
        >
          <MdOutlineManageAccounts className="mr-3" />
          Add A Camp
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/dashboard/manageCamps"
          className="flex items-center py-2 px-3 rounded hover:bg-blue-300 transition-colors duration-200"
        >
          <FaList className="mr-3" />
          Manage Camps
        </NavLink>
      </li>
    </>
  );

  const healthcareProfessionalNavLinks = (
    <>
      <li>
        <NavLink
          to="/dashboard/healthcareProfessionalHome"
          className="flex items-center py-2 px-3 rounded hover:bg-blue-300 transition-colors duration-200"
        >
          <FaHome className="mr-3" />
          healthcareProfessionalHome
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/dashboard/professional-profile"
          className="flex items-center py-2 px-3 rounded hover:bg-blue-300 transition-colors duration-200"
        >
          <FaRegComments className="mr-3" /> Profile Management
        </NavLink>
      </li>
    </>
  );

  const participantNavLinks = (
    <>
      <li>
        <NavLink
          to="/dashboard/userHome"
          className="flex items-center py-2 px-3 rounded hover:bg-blue-300 transition-colors duration-200"
        >
          <FaHome className="mr-3" />
          User Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/dashboard/participant-profile"
          className="flex items-center py-2 px-3 rounded hover:bg-blue-300 transition-colors duration-200"
        >
          <ImProfile className="mr-3" />
          Profile Management
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/dashboard/registered-camps"
          className="flex items-center py-2 px-3 rounded hover:bg-blue-300 transition-colors duration-200"
        >
          <FaRegRegistered className="mr-3" />
          Registered Camps
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/dashboard/feedback-ratings"
          className="flex items-center py-2 px-3 rounded hover:bg-blue-300 transition-colors duration-200"
        >
          <FcFeedback className="mr-3" />
          FeedBack & Ratings
        </NavLink>
      </li>
    </>
  );

  return (
    <>
      <Helmet>
        <title>MediAssist Hub|Dashboard</title>
      </Helmet>
      <div className="flex h-screen">
        <div className="w-64 bg-gradient-to-b from-blue-200 to-blue-400 text-gray-800 p-5">
          <div className="mb-10">
            <div className="text-2xl font-bold mb-2">Dashboard</div>
          </div>
          <ul className="space-y-2">
            {role === "Organizer" && organizerNavLinks}
            {role === "HealthcareProfessional" &&
              healthcareProfessionalNavLinks}
            {role === "Participant" && participantNavLinks}
            <hr className="my-4 border-t border-gray-300" />
            <li>
              <NavLink
                to="/"
                className="flex items-center py-2 px-3 rounded hover:bg-blue-300 transition-colors duration-200"
              >
                <FaHome className="mr-3" /> Home
              </NavLink>
            </li>
            {/* ... other shared links */}
          </ul>
        </div>
        <div className="flex-1 p-10 bg-gray-100">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
