import { NavLink } from "react-router-dom";
import "./exploreNavbar.scss";

const ExploreNavbar = () => {
  return (
    <div className="explore-navbar">
      <ul>
        <li>
          <NavLink end to={"/explore"}>
            Explore
          </NavLink>
        </li>
        <li>
          <NavLink end to={"/topics"}>
            Topics
          </NavLink>
        </li>
        <li>
          <NavLink end to={"/trending"}>
            Trending
          </NavLink>
        </li>
        <li>
          <NavLink end to={"/collections"}>
            Collections
          </NavLink>
        </li>
        <li>
          <NavLink end to={"/events"}>
            Events
          </NavLink>
        </li>
        <li>
          <NavLink end to={"/sponsors/explore"}>
            GitHub Sponsors
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default ExploreNavbar;
