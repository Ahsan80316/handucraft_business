import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import ErrorPage from "../ErrorPage/ErrorPage";
import MainLayout from "../Layout/MainLayout";
import CampDetailsPage from "../Pages/CampDetailsPage /CampDetailsPage";
import LoginPage from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import AvailableBusiness from "../Pages/AvailableBusiness/AvailableBusiness.jsx";
import ContactUs from "../Pages/Home/ContactUs/ContactUs";

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
            path:'/business-details/:_id',
            element: <CampDetailsPage/>,
        },
        {
            path:'/allBusiness',
            element: <AvailableBusiness/>,
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
  ]);

  export default routes;