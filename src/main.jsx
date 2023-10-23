import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import "./responsive.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home/Home.jsx";
import Login from "./Authentication/Login/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path:'/login',
    element:<Login/>
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
