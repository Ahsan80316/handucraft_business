import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import ErrorPage from "../ErrorPage/ErrorPage";
import MainLayout from "../Layout/MainLayout";
import CampDetailsPage from "../Pages/CampDetailsPage /CampDetailsPage";
import LoginPage from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import AvailableCamps from "../Pages/AvailableCamps/AvailableCamps";
import Dashboard from "../Layout/Dashboard/Dashboard";
import AddCampPage from "../Pages/Dashboard/AddCampPage/AddCampPage";
import ManageCamps from "../Pages/Dashboard/ManageCamp/ManageCamps";
import AdminHome from "../Pages/Dashboard/AdminHome/AdminHome";
import ParticipantProfilePage from "../Pages/Dashboard/ParticipantProfilePage/ParticipantProfilePage";
import UserHome from "../Pages/Dashboard/UserHome/UserHome";
// import HealthcareProfessionalHome from "../Pages/Dashboard/healthcareProfessionalHome/healthcareProfessionalHome";
import HealthcareProfessionalProfilePage from "../Pages/Dashboard/HealthcareProfessionalProfilePage/HealthcareProfessionalProfilePage";
import ContactUs from "../Pages/Home/ContactUs/ContactUs";
import PrivateRoutes from "../Routes/PrivateRoutes/PrivateRoutes.jsx"
import RegisteredCamps from "../Pages/Dashboard/Registered Camps/RegisteredCamps.jsx";
import Feedback from "../Pages/Dashboard/Feedback and Reatings/Feedback.jsx";
import HealthcareProfessionalHome from "../Pages/Dashboard/healthcareProfessionalHome/HealthcareProfessionalHome";



const routes = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      errorElement: <ErrorPage />,
      children: [
        {
            index: true,
            element: <Home/>,
        },
        {
            path:'/camp-Details/:_id',
            element: <CampDetailsPage/>,
        },
        {
            path:'/availableCamp',
            element: <AvailableCamps/>,
        },
        {
            path:'/contactUs',
            element: <ContactUs/>,
        },
        {
            path:'/login',
            element: <LoginPage/>,
        },
        {
            path:'/signUp',
            element: <SignUp/>,
        },

        
      ],
    },
    {
        path:'/dashboard',
        element:<PrivateRoutes><Dashboard></Dashboard></PrivateRoutes>,
        children: [
          {
            path: '/dashboard/adminHome',
            element:<PrivateRoutes> <AdminHome></AdminHome></PrivateRoutes>
          },
          {
            path: '/dashboard/add-a-camp',
            element: <PrivateRoutes><AddCampPage></AddCampPage></PrivateRoutes>
          },
        
          {
            path: '/dashboard/manageCamps',
            element:<PrivateRoutes><ManageCamps></ManageCamps></PrivateRoutes> 
          },
          {
            path: '/dashboard/userHome',
            element:<PrivateRoutes><UserHome></UserHome></PrivateRoutes>  
          },
          {
            path: '/dashboard/participant-profile',
            element: <PrivateRoutes><ParticipantProfilePage></ParticipantProfilePage></PrivateRoutes> 
          },
          {
            path: '/dashboard/healthcareProfessionalHome',
            element:<PrivateRoutes><HealthcareProfessionalHome></HealthcareProfessionalHome></PrivateRoutes>  
          },
          {
            path: '/dashboard/professional-profile',
            element:<PrivateRoutes><HealthcareProfessionalProfilePage></HealthcareProfessionalProfilePage></PrivateRoutes> 
          },
          {
            path: '/dashboard/registered-camps',
            element:<PrivateRoutes><RegisteredCamps></RegisteredCamps></PrivateRoutes> 
          },
          {
            path: '/dashboard/feedback-ratings',
            element:<PrivateRoutes><Feedback></Feedback></PrivateRoutes> 
          },
  
        ]
      }
  ]);

  export default routes;