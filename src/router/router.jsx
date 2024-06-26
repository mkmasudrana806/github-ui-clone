import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../components/pages/home/Home";
import Discussions from "../components/pages/dropdownMenu/discussions/Discussions";
import Issues from "../components/pages/dropdownMenu/issues/Issues";
import PullRequest from "../components/pages/dropdownMenu/pullRequest/PullRequest";
import Projects from "../components/pages/dropdownMenu/projects/Projects";
import CodeSpaces from "../components/pages/dropdownMenu/codespaces/CodeSpaces";
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
import Profile from "../components/pages/dropdownProfile/yourProfile/Profile";
import Copilot from "../components/pages/dropdownProfile/copilot/Copilot";
import SettingsLayout from "../components/settings/SettingsLayout";
import PublicProfile from "../components/settings/publicProfile/PublicProfile";
import Account from "../components/settings/account/Account";
import Appearance from "../components/settings/appearance/Appearance";
import Accessibility from "../components/settings/accessibility/Accessibility";
import Notifications from "../components/settings/Notifications/Notifications";
import Emails from "../components/settings/emails/Emails";
import Password from "../components/settings/passwordAndAuthentication/Password";
import Sessions from "../components/settings/sessions/Sessions";
import Keys from "../components/settings/SSHandGPGKeys/Keys";
import Organizations from "../components/settings/organizations/Organizations";
import Enterprises from "../components/settings/enterprises/Enterprises";
import Repositories from "../components/settings/repositories/Repositories";
import Codespaces from "../components/settings/codespaces/Codespaces";
import Packages from "../components/settings/packages/Packages";
import GitHubCopilot from "../components/settings/copilot/Copilot";
import Pages from "../components/settings/pages/Pages";
import Replies from "../components/settings/replies/Replies";
import SecurityAnalysis from "../components/settings/security/SecurityAnalysis";
import InstallationLayout from "../components/settings/applications/InstallationLayout";
import InstalledApps from "../components/settings/applications/InstalledApps";
import AuthorizedGitHubApps from "../components/settings/applications/AuthorizedGitHubApps";
import AuthorizedOAuthApps from "../components/settings/applications/AuthorizedOAuthApps";
import Reminders from "../components/settings/remainders/Reminders";
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
        path: "/mkmasudrana806",
        element: <Profile />,
      },
      {
        path: "/github-copilot/signup",
        element: <Copilot />,
      },
      {
        path: "/settings",
        element: <SettingsLayout />,
        children: [
          {
            path: "/settings/",
            element: <PublicProfile />,
          },
          {
            path: "/settings/profile",
            element: <PublicProfile />,
          },
          {
            path: "/settings/admin",
            element: <Account />,
          },
          {
            path: "/settings/appearance",
            element: <Appearance />,
          },
          {
            path: "/settings/accessibility",
            element: <Accessibility />,
          },
          {
            path: "/settings/notifications",
            element: <Notifications />,
          },
          {
            path: "/settings/emails",
            element: <Emails />,
          },
          {
            path: "/settings/security",
            element: <Password />,
          },
          {
            path: "/settings/sessions",
            element: <Sessions />,
          },
          {
            path: "/settings/keys",
            element: <Keys />,
          },
          {
            path: "/settings/organizations",
            element: <Organizations />,
          },
          {
            path: "/settings/enterprises",
            element: <Enterprises />,
          },
          {
            path: "/settings/repositories",
            element: <Repositories />,
          },
          {
            path: "/settings/codespaces",
            element: <Codespaces />,
          },
          {
            path: "/settings/packages",
            element: <Packages />,
          },
          {
            path: "/settings/copilot",
            element: <GitHubCopilot />,
          },
          {
            path: "/settings/pages",
            element: <Pages />,
          },
          {
            path: "/settings/replies",
            element: <Replies />,
          },
          {
            path: "/settings/security_analysis",
            element: <SecurityAnalysis />,
          },
          {
            path: "/settings/installations",
            element: <InstallationLayout />,
            children: [
              {
                path: "/settings/installations/",
                element: <InstalledApps />,
              },
              {
                path: "/settings/installations/apps/authorizations",
                element: <AuthorizedGitHubApps />,
              },
              {
                path: "/settings/installations/applications",
                element: <AuthorizedOAuthApps />,
              },
            ],
          },
          {
            path: "/settings/reminders",
            element: <Reminders />,
          },
        ],
      },
    ],
  },
]);
