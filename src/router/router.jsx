import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../components/pages/home/Home";
import Footer from "../components/footer/Footer";
import Issues from "../components/pages/issues/Issues";
import PullRequest from "../components/pages/pullRequest/PullRequest";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
        {
          path: "/home",
          element: <Home />,
        },
      {
        path: "/",
        element: <PullRequest />,
      },
    ],
  },
]);
