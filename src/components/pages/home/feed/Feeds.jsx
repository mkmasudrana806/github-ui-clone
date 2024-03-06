import ImageCircle from "../../../image/ImageCircle";
import ExploreRepositories from "./ExploreRepositories";
import LatestChanges from "./LatestChanges";
import "./feed.scss";
import { RxCross2 } from "react-icons/rx";
import githubLogo from "../../../../assets/logo.png";

const Feeds = () => {
  return (
    <div className="feeds">
      {/* octoverse cart  */}
      <div className="octoverse mb-1">
        <div className="octoverse-header">
          <div className="logo-title">
            <ImageCircle size={24} Img={githubLogo} />
            <div>
              <h4>The state of the Octoverse</h4>
              <span>2024</span>
            </div>
          </div>
          <p className="pointer octoverse-close">
            <RxCross2 />
          </p>
        </div>
        <div className="text-small mt-5 mb-3">
          What does it mean for a technology to go mainstream? Discover how AI
          is changing the developer experience.
        </div>
        <button>Learn more</button>
      </div>
      <LatestChanges />
      <ExploreRepositories />
    </div>
  );
};

export default Feeds;
