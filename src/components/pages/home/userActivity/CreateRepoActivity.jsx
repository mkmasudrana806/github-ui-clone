
import "./createRepoActivity.scss";
import userLogo from "../../../../assets/user.jpg";
import ButtonImg from "../../../iconsButtons/ButtonImg";
import { SlOptions } from "react-icons/sl";
import { FiStar } from "react-icons/fi";
import { FaCircle } from "react-icons/fa";
import ButtonGroup from "../../../iconsButtons/ButtonGroup";
import IconWithText from "../../../iconsButtons/IconWithText";
import ImageCircle from "../../../utilityComponents/image/ImageCircle";

const CreateRepoActivity = () => {
  return (
    <div className="repoActivityCart mt-4 mb-1">
      <div className="user-activity">
        <div className="activity-user-profile">
          <ImageCircle Img={userLogo} size={38} />
          <div>
            <p className="text-bold">
              adrianhajdin{" "}
              <span className="text-small">created a repository</span>
            </p>
            <span className="text-small">yesterday</span>
          </div>
        </div>
        <SlOptions />
      </div>

      {/* inner box  */}
      <div className="inner text-normal">
        <div className="flex-between">
          <ButtonImg text="mkmasudrana806/react" />
          <ButtonGroup />
        </div>
        <p className="text-normal mt-5">
          Learn to create modern websites with sleek parallax effects and bento
          box layouts. This course covers everything from stylish UI design to
          mobile-first principles while strengthening your React.js …
        </p>
        <div className="activity-footer text-small mt-4">
          <IconWithText
            color="yellow"
            text={"JavaScript"}
            icon={<FaCircle />}
          />
          <IconWithText text={"55"} icon={<FiStar />} />
        </div>
      </div>
    </div>
  );
};

export default CreateRepoActivity;
