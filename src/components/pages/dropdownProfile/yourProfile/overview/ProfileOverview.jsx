import "./profileOverview.scss";
import ContributionCalender from "../contribution calender/ContributionCalender";
import IconWithText from "../../../../iconsButtons/IconWithText";
import { TiStarOutline } from "react-icons/ti";
import { FaCircle } from "react-icons/fa";

const ProfileOverview = () => {
  return (
    <div className="overview">
      <div className="flex-between">
        <p className="text-medium">Popular repositories</p>
        <p className="text-small">Customize your pins</p>
      </div>
      {/* repositories lists */}
      <div className="repositories mt-1">
        <RepoCart />
        <RepoCart />
        <RepoCart />
        <RepoCart />
        <RepoCart />
        <RepoCart />
      </div>
      {/* <ContributionCalender /> */}
      <ContributionCalender />
    </div>
  );
};

export default ProfileOverview;

// repo cart for the repositories list
const RepoCart = () => {
  return (
    <div className="repo-cart border-primary p-1">
      <div className="flex-between">
        <p className="text-color pointer">
          post-delete-comment-textchange-onclick
        </p>
        <span className="public-status  text-small">public</span>
      </div>
      <p className="text-small mt-3">
        in this repository i have completed some samll task like how to post,
        comment, delete some line, delete button when use press delete button
        course will delete
      </p>
      <div className="icons mt-3">
        <IconWithText icon={<FaCircle />} color="orange" text={"HTML"} />
        <IconWithText icon={<TiStarOutline />} color="gray" text={"1"} />
      </div>
    </div>
  );
};
