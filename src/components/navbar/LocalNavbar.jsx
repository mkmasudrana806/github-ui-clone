import "./localNavbar.scss";
import { Link, NavLink, useLocation } from "react-router-dom";
import { FiBookOpen } from "react-icons/fi";
import { GoRepo } from "react-icons/go";
import { GoProjectSymlink } from "react-icons/go";
import { GoPackage } from "react-icons/go";
import { TiStarOutline } from "react-icons/ti";
import NumberCounter from "../utilityComponents/NumberCounter";

const LocalNavbar = () => {
  // render localbar item conditionally
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const params = queryParams.get("tab");

  return (
    <nav className="localbar">
      <ul>
        <li className={params === null ? "active" : ""}>
          <FiBookOpen />
          <Link to={"/mkmasudrana806"}>Overview</Link>
        </li>
        <li className={params === "repositories" ? "active" : ""}>
          <GoRepo />
          <Link to={"/mkmasudrana806?tab=repositories"}>Repositories</Link>
          <NumberCounter>92</NumberCounter>
        </li>
        <li className={params === "projects" ? "active" : ""}>
          <GoProjectSymlink />
          <Link to={"/mkmasudrana806?tab=projects"}>Projects</Link>
        </li>
        <li className={params === "packages" ? "active" : ""}>
          <GoPackage />
          <Link to={"/mkmasudrana806?tab=packages"}>Packages</Link>
        </li>
        <li className={params === "stars" ? "active" : ""}>
          <TiStarOutline />
          <Link to={"/mkmasudrana806?tab=stars"}>Stars</Link>
        </li>
      </ul>
    </nav>
  );
};

export default LocalNavbar;
