import "./exploreLayout.scss";
import userLogo from "../../../../assets/user.jpg";
import ExploreNavbar from "./ExploreNavbar";
import { RiYoutubeLine } from "react-icons/ri";
import ExploreRepoCart from "./repoCart/ExploreRepoCart";
import IconWithText from "../../../iconsButtons/IconWithText";
import { GoTelescope } from "react-icons/go";
import { GoRepoTemplate } from "react-icons/go";
import { FiStar } from "react-icons/fi";
import { FaAngleRight } from "react-icons/fa6";
import Divider from "../../../utilityComponents/Divider";
import ImageCircle from "../../../utilityComponents/image/ImageCircle";

const ExploreLayout = () => {
  return (
    <div className="explore-page">
      {/* left side */}
      <div className="left">
        <div className="left-profile-cart mt-2">
          <div className="user-info">
            <ImageCircle Img={userLogo} size={76} />
            <h3 className="text-large mt-2">Md Masud Rana</h3>
            <h4 className="email">mkmasudrana806</h4>
          </div>
          <Divider />
          <p>0 started topics</p>
          <Divider />
          <p>10 started repositories</p>
        </div>
      </div>
      {/* right side  */}
      <div className="right">
        {/* explore navbar  */}
        <ExploreNavbar />

        <div className="explore-content mt-1">
          {/* contet left part  */}
          <div className="star-repositories">
            <h3 className="text-muted">
              Heres what we found based on your interests...
            </h3>
            {/* iframe video cart  */}
            <div className="mt-1 video">
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/6LCt-4sIkUw?si=1GQV8evyQYALhNiQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
              <div className="p-1">
                <p className="flex-left">
                  {" "}
                  <RiYoutubeLine />
                  The Download
                </p>
                <h3 className="text-color mt-5">
                  Get the latest developer and open source news
                </h3>
                <p className="text-small mt-4">
                  Join Senior Developer Advocate Christina Warren for all the
                  latest developer, open source, and GitHub news.
                </p>
              </div>
            </div>

            {/* single repository cart  */}
            <ExploreRepoCart />
            <ExploreRepoCart Img={false} />
          </div>
          {/* contet right part  */}
          <div className="trending-repositories border-primary">
            <p className="p-1 text-medium">
              <GoTelescope /> Trending repositories{" "}
              <span className="text-small">today</span>
            </p>
            <Divider />
            <RepoShortCart />
            <Divider />
            <RepoShortCart />
            <Divider />
            <RepoShortCart />
            <Divider />
            <p className="flex-left see-more pointer text-color">
              See more trending repositories <FaAngleRight />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExploreLayout;

const RepoShortCart = () => {
  return (
    <div className="repo-short-cart  ">
      <div className="flex-between ">
        <h4 className="flex-left title text-medium">
          <GoRepoTemplate /> gleam-lang / gleam
        </h4>
        <IconWithText text={"9.9k"} icon={<FiStar />} />
      </div>
      <p className="text-small mt-5">
        A friendly language for building type-safe, scalable systems!
      </p>
    </div>
  );
};
