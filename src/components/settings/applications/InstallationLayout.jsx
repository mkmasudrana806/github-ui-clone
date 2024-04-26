import { NavLink, Outlet } from "react-router-dom";
import "./installationLayout.scss";
const InstallationLayout = () => {
  return (
    <div className="applications">
      <h1 className="text-large">Applications</h1>
      <ul className="installed-tabs mt-3">
        <li>
          <NavLink end to={"/settings/installations"}>
            Installed GitHub Apps
          </NavLink>
        </li>
        <li>
          <NavLink end to={"/settings/installations/apps/authorizations"}>
            Authorized GitHub Apps
          </NavLink>
        </li>
        <li>
          <NavLink end to={"/settings/installations/applications"}>
            Authorized OAuth Apps
          </NavLink>
        </li>
      </ul>
      <Outlet />
    </div>
  );
};

export default InstallationLayout;
