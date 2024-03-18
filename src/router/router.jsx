import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../components/pages/home/Home";
import Discussions from "../components/pages/dropdownMenu/discussions/Discussions";
import Issues from "../components/pages/dropdownMenu/issues/Issues";
import PullRequest from "../components/pages/dropdownMenu/pullRequest/PullRequest";
import Projects from "../components/pages/dropdownMenu/projects/Projects";
import CodeSpaces from "../components/pages/dropdownMenu/codespaces/CodeSpaces";
import Button from "../components/buttons/Button";
import NumberCounter from "../components/utilityComponents/NumberCounter";
import CodespaceDetails from "../components/pages/dropdownMenu/codespaces/CodespaceDetails";
import Templates from "../components/pages/dropdownMenu/codespaces/templates/Templates";
import ExploreLayout from "../components/pages/dropdownMenu/explore/ExploreLayout";
import Topics from "../components/pages/dropdownMenu/explore/exploreNavPages/Topics";
import Trendings from "../components/pages/dropdownMenu/explore/exploreNavPages/Trendings";
import Collections from "../components/pages/dropdownMenu/explore/exploreNavPages/Collections";
import Events from "../components/pages/dropdownMenu/explore/exploreNavPages/Events";
import GitHubSpoonsor from "../components/pages/dropdownMenu/explore/exploreNavPages/githubSponsor/GitHubSpoonsor";
import SponsorsContainers from "../components/pages/dropdownMenu/explore/exploreNavPages/githubSponsor/SponsorsContainers";
import MarketPlace from "../components/pages/dropdownMenu/marketplaces/MarketPlace";
import SetStatusPopUp from "../components/pages/dropdownProfile/setStatus/SetStatusPopUp";
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
        path: "/issues",
        element: <Issues />,
      },
      {
        path: "/pulls",
        element: <PullRequest />,
      },
      {
        path: "/projects",
        element: <Projects />,
      },
      {
        path: "/discussions",
        element: <Discussions />,
      }, // codespaces
      {
        path: "/codespaces",
        element: <CodeSpaces />,
        children: [
          {
            path: "/codespaces/",
            element: <CodespaceDetails />,
          },
          {
            path: "/codespaces/templates",
            element: <Templates />,
          },
          {
            path: "/codespaces/created",
            element: <CodespaceDetails />,
          },
        ],
      },
      // explore page
      {
        path: "/explore",
        element: <ExploreLayout />,
      },
      {
        path: "/topics",
        element: <Topics />,
      },
      {
        path: "/trending",
        element: <Trendings />,
      },
      {
        path: "/collections",
        element: <Collections />,
      },
      {
        path: "/events",
        element: <Events />,
      },
      {
        path: "/sponsors/explore",
        element: <GitHubSpoonsor />,
        children: [
          {
            path: "/sponsors/explore/",
            element: <SponsorsContainers />,
          },
        ],
      },
      {
        path: "/marketplace",
        element: <MarketPlace />,
      },
      {
        path: "/popup",
        element: <SetStatusPopUp />,
      },
    ],
  },
]);
