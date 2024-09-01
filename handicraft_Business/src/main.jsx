import React from "react";
import ReactDOM from "react-dom/client";
import routes from "./Routes/index.jsx";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import AuthProvider from "./Provider/AuthProvider.jsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
const queryClient = new QueryClient();
import { Toaster } from "react-hot-toast";
import { HelmetProvider } from "react-helmet-async";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <QueryClientProvider client={queryClient}>
        <HelmetProvider>
          <RouterProvider router={routes} />
        </HelmetProvider>
      </QueryClientProvider>
    </AuthProvider>

    <Toaster position="top-center" reverseOrder={false} />
  </React.StrictMode>
);
