import "./trending.scss";
import ExploreNavbar from "../ExploreNavbar";
import { TiStarOutline } from "react-icons/ti";
import Divider from "../../../../utilityComponents/Divider";
import ButtonIcon from "../../../../iconsButtons/ButtonIcon";
import TopicIntroCart from "./TopicIntroCart";
import { IoMdArrowDropdown } from "react-icons/io";
import IconWithText from "../../../../iconsButtons/IconWithText";
import { TiHeartOutline } from "react-icons/ti";
import ButtonGroup from "../../../../iconsButtons/ButtonGroup";
import { GoRepoTemplate } from "react-icons/go";
import { FaCodeBranch } from "react-icons/fa6";
import { FaCircle } from "react-icons/fa";
import userLogo from "../../../../../assets/user.jpg";
import ImageCircle from "../../../../utilityComponents/image/ImageCircle";

const Trendings = () => {
  const intro = {
    title: "Trendings",
    intro: "See what the GitHub community is most excited about today.",
  };
  return (
    <div className="trendings">
      {/* navbar  */}
      <div className="navbar">
        <ExploreNavbar />
      </div>
      {/* intro box  */}
      <TopicIntroCart intro={intro} />
      {/* trending repositories and developers  */}
      <div className="trending-repositories">
        {/* trending content  */}
        <div className="trending-content">
          {/* content head  */}
          <div className="head flex-between">
            <div className="subnav">
              <button className="active">Repositories</button>
              <button>Developers</button>
            </div>
            <div className="filter-options">
              <div>
                Spoken Language: Any
                <IoMdArrowDropdown />
              </div>
              <div>
                Language: Any
                <IoMdArrowDropdown />
              </div>
              <div>
                Date range: Today
                <IoMdArrowDropdown />
              </div>
            </div>
          </div>
          {/* content body  */}
          <div className="containers-repo">
            <RepoTopicCart />
            <Divider />
            <RepoTopicCart />
            <Divider />
            <RepoTopicCart />
            <Divider />
            <RepoTopicCart />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Trendings;

const RepoTopicCart = () => {
  return (
    <div className="cart flex-left">
      <div>
        <div className="flex-between">
          <div className="repo-link flex-left">
            <GoRepoTemplate />
            <p className="text-medium">danielmiessler / fabric</p>
          </div>
          <div className="flex-left">
            <div className="sponsoor-btn">
              <ButtonIcon Img={<TiHeartOutline />} text="Sponsoor" />
            </div>
            <ButtonGroup />
          </div>
        </div>
        <p className="text-small description mt-5">
          fabric is an open-source framework for augmenting humans using AI. It
          provides a modular framework for solving specific problems using a
          crowdsourced set of AI prompts that can be used anywhere.
        </p>
        <div className="cart-footer flex-between mt-5">
          <div className="flex-left left-footer">
            <IconWithText color="yellow" icon={<FaCircle />} text={"Python"} />
            <IconWithText icon={<TiStarOutline />} text={"7428"} />
            <IconWithText icon={<FaCodeBranch />} text={"699"} />
            <p className="flex-left text-small">
              Build By:
              <ImageCircle Img={userLogo} size={"16"} />
              <ImageCircle Img={userLogo} size={"16"} />
              <ImageCircle Img={userLogo} size={"16"} />
            </p>
          </div>
          <IconWithText icon={<TiStarOutline />} text={"468 stars today"} />
        </div>
      </div>
    </div>
  );
};
