import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../components/pages/home/Home";
import Footer from "../components/footer/Footer";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/footer",
        element: <Footer />,
      },
    ],
  },
]);
