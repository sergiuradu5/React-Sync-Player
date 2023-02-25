import { createBrowserRouter, Navigate } from "react-router-dom";
import Layout from "../components/Layout/Layout";
import V1 from "../pages/V1";
import V2 from "../pages/V2";

export const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { path: "/v1", element: <V1 /> },
      { path: "/v2", element: <V2 /> },
    ],
  },

  { path: "*", element: <Navigate to="/v1" /> },
]);
