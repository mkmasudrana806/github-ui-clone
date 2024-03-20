import { Link, Outlet, useLocation } from "react-router-dom";
import "./githubSponsor.scss";
import { FaCheck } from "react-icons/fa6";
import ExploreNavbar from "../../ExploreNavbar";
import TopicIntroCart from "../TopicIntroCart";
import { sponsorsTntro } from "../data/data";

const GitHubSpoonsor = () => {
  // render all nav items pages conditionally
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const params = queryParams.get("ecosystem");
  let content = null;

  if (params === "cargo") {
    content = (
      <div className="left">
        cargo or rust page design by yourself. here i am showing only routing
        change.
      </div>
    );
  } else if (params === "composer") {
    content = (
      <div className="left">
        composer page designed by yourself. here i am showing only routing
      </div>
    );
  } else if (params === "githubActions") {
    content = (
      <div className="left">github actions page desinged by yourself</div>
    );
  } else {
    content = <Outlet />;
  }
  return (
    <div className="sponsors-page">
      {/* navbar  */}
      <div className="navbar">
        <ExploreNavbar />
      </div>
      {/* Intro cart  */}
      <TopicIntroCart intro={sponsorsTntro} />
      <div className="sponsor-body">
        {/* left navbar  */}
        <div className="left-navbar">
          <h4 className="mb-3">Ecosystem</h4>
          <ul>
            <li>
              <FaCheck />
              <Link
                className={params === null ? "active" : ""}
                to={"/sponsors/explore"}
              >
                All ecosystem
              </Link>
            </li>
            <li>
              <FaCheck />
              <Link
                className={params === "cargo" ? "active" : ""}
                to={"/sponsors/explore?ecosystem=cargo"}
              >
                cargo
              </Link>
            </li>
            <li>
              <FaCheck />
              <Link
                className={params === "composer" ? "active" : ""}
                to={"/sponsors/explore?ecosystem=composer"}
              >
                composer
              </Link>
            </li>
            <li>
              <FaCheck />
              <Link
                className={params === "githubActions" ? "active" : ""}
                to={"/sponsors/explore?ecosystem=githubActions"}
              >
                gitHub Actions
              </Link>
            </li>
            <li>
              <FaCheck />
              <Link
                className={params === "go" ? "active" : ""}
                to={"/sponsors/explore?ecosystem=go"}
              >
                go
              </Link>
            </li>
            <li>
              <FaCheck />
              <Link
                className={params === "maven" ? "active" : ""}
                to={"/sponsors/explore?ecosystem=maven"}
              >
                maven
              </Link>
            </li>
            <li>
              <FaCheck />
              <Link
                className={params === "npm" ? "active" : ""}
                to={"/sponsors/explore?ecosystem=npm"}
              >
                npm
              </Link>
            </li>
            <li>
              <FaCheck />
              <Link
                className={params === "nuget" ? "active" : ""}
                to={"/sponsors/explore?ecosystem=nuget"}
              >
                nuget
              </Link>
            </li>
            <li>
              <FaCheck />
              <Link
                className={params === "pip" ? "active" : ""}
                to={"/sponsors/explore?ecosystem=pip"}
              >
                pip
              </Link>
            </li>
            <li>
              <FaCheck />
              <Link
                className={params === "rubygems" ? "active" : ""}
                to={"/sponsors/explore?ecosystem=rubygems"}
              >
                RubyGems
              </Link>
            </li>
            <li>
              <FaCheck />
              <Link
                className={params === "pub" ? "active" : ""}
                to={"/sponsors/explore?ecosystem=pub"}
              >
                pub
              </Link>
            </li>
          </ul>
        </div>
        {/* center content  */}
        <div className="sponser-content">
          {/* outlet for all ecosystem  */}
          {content}
          {/* right side box  */}
          <div className="right">
            <div className="box border-primary">
              <img
                src="https://github.githubassets.com/assets/hearts_around-415ddc0db24b.png"
                alt=""
              />
              <p className="text-normal">
                Invest in open source software and we`ll track your progress
                here!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GitHubSpoonsor;
