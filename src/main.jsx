import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./compnents/Home/Home.jsx";
import Layout from "./Layout.jsx";
import FindDogs from "./compnents/Find/Find.jsx";
import Feeding from "./compnents/Home/Feeding.jsx";
import Donate from "./compnents/Donate/Donate.jsx";
import Contact from "./compnents/Contact/Contact.jsx";
import Form from "./compnents/Donate/form.jsx";
import Nimo from "./compnents/Aboutme/Nimo.jsx";
import Bella from "./compnents/Aboutme/Bella.jsx";
import Oreo from "./compnents/Aboutme/Oreo.jsx";
import Google from "./compnents/Aboutme/Google.jsx";
import Gucci from "./compnents/Aboutme/Gucci.jsx";
import Lui from "./compnents/Aboutme/Lui.jsx";
import Sheero from "./compnents/Aboutme/Sheero.jsx";
import Shushi from "./compnents/Aboutme/Shushi.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "FindDogs",
        element: <FindDogs />,
      },
      {
        path: "Feeding",
        element: <Feeding />,
      },
      {
        path: "Donate",
        element: <Donate />,
      },
      {
        path: "Contact",
        element: <Contact />,
      },
      {
        path: "Form",
        element: <Form />,
      },
      {
        path: "Nimo",
        element: <Nimo />,
      },

      {
        path: "Oreo",
        element: <Oreo />,
      },
      {
        path: "Bella",
        element: <Bella />,
      },
      {
        path: "Google",
        element: <Google />,
      },
      {
        path: "Gucci",
        element: <Gucci />,
      },
      {
        path: "Lui",
        element: <Lui />,
      },
      {
        path: "Sheero",
        element: <Sheero />,
      },
      {
        path: "Shushi",
        element: <Shushi />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
