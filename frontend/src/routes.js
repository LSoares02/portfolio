import React from "react";
import { createHashRouter, RouterProvider } from "react-router-dom";
import OutletComponent from "./pages/Outlet";
import AboutPage from "./pages/About/AboutPage";
import ProjectsPage from "./pages/Projects/ProjectsPage";
import ContactPage from "./pages/Contact/ContactPage";
import { Navigate } from "react-router-dom";

const router = createHashRouter([
  {
    path: "/",
    element: <Navigate to="/portfolio" replace />,
  },
  {
    path: "/portfolio",
    element: <OutletComponent />,
    children: [
      {
        path: "",
        element: <Navigate to="about" replace />,
      },
      {
        path: "about",
        element: <AboutPage />,
      },
      {
        path: "projects",
        element: <ProjectsPage />,
      },
      {
        path: "contact",
        element: <ContactPage />,
      },
    ],
  },
]);

const AppRoutes = () => {
  return <RouterProvider router={router} />;
};

export default AppRoutes;
