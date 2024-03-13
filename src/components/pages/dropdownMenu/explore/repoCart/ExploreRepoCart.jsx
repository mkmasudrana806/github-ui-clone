import ButtonGroup from "../../../../iconsButtons/ButtonGroup";
import IconWithText from "../../../../iconsButtons/IconWithText";
import "./exploreRepoCart.scss";
import { GoTelescope } from "react-icons/go";
import { FaRegDotCircle } from "react-icons/fa";
import { IoCode } from "react-icons/io5";
import { TbGitPullRequest } from "react-icons/tb";
import { GoCommentDiscussion } from "react-icons/go";
import Tag from "../../../../tags/Tag";
import Divider from "../../../../utilityComponents/Divider";
// import Divider from "../../../../Divider";

const ExploreRepoCart = ({ Img = true }) => {
  return (
    <div className="explore-repo-cart border-primary mt-1">
      {Img && (
        <img
          className="cart-image"
          src="https://repository-images.githubusercontent.com/245334498/7cac9380-e2ee-11ea-82eb-05c8cf098954"
          alt=""
        />
      )}
      {/* header: star button part  */}
      <div className="header">
        <IconWithText
          icon={<GoTelescope />}
          text={" Based on repositories you’ve starred"}
        />
        <div className="user-star-options mt-3 flex-between">
          <IconWithText
            icon={<GoTelescope />}
            text={"rocktimsaikia / animechan"}
          />
          <ButtonGroup />
        </div>
        {/* tabs  */}
        <div className="tabs mt-1">
          <span className="code">
            <IconWithText icon={<IoCode />} text={"Code"} />
          </span>
          <IconWithText icon={<FaRegDotCircle />} text={"Issues"} />
          <IconWithText icon={<TbGitPullRequest />} text={"Pull requests"} />
          <IconWithText icon={<GoCommentDiscussion />} text={"Discussions"} />
        </div>
      </div>
      <div className="p-1">
        <p className="text-normal">
          An API for answering the question When is the next MCU film?
        </p>
        {/* tags  */}
        <div className="tags">
          <Tag text={"api"} />
          <Tag text={"aws"} />
          <Tag text={"serverless"} />
          <Tag text={"lamda"} />
        </div>
      </div>
      <Divider />
      <div className="text-small p-1">Updated on Nov 2, 2023 Python</div>
    </div>
  );
};

export default ExploreRepoCart;
