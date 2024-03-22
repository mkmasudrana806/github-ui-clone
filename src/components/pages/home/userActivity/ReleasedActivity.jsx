import "./releasedActivity.scss";
import userLogo from "../../../../assets/user.jpg";
import rocketIcon from "../../../../assets/rocket.png";
import eyesIcon from "../../../../assets/eyes.png";

import { SlOptions } from "react-icons/sl";
import { FaCircle } from "react-icons/fa";
import { MdOutlineEmojiEmotions } from "react-icons/md";
import { FaHeart } from "react-icons/fa";
import Divider from "../../../utilityComponents/Divider";
import ImageCircle from "../../../utilityComponents/image/ImageCircle";

const ReleasedActivity = () => {
  return (
    <div className="releasedActivityCart mt-4 mb-1">
      <div className="user-activity">
        <div className="activity-user-profile">
          <ImageCircle Img={userLogo} size={38} />
          <div>
            <p className="text-bold">
              KillianLucas/open-interpreter{" "}
              <span className="text-small">released</span>
            </p>
            <span className="text-small">2 months ago</span>
          </div>
        </div>
        <SlOptions />
      </div>
      <h3 className="mt-3">The New Computer Update</h3>

      {/* inner box  */}
      <div className="inner text-normal">
        <h2>
          <span className="circle">
            <FaCircle />
          </span>{" "}
          The New Computer Update
        </h2>
        <Divider />
        <p className="text-normal mt-5 article">
          This is the most significant upgrade to Open Interpreter since 0.1.0.
          Almost every component has been rewritten to support our project's
          objective—building a standard inte
        </p>
        <p className="text-bold read-more mt-1">Read More</p>
      </div>

      {/* contributors  */}
      <p className="text-small mt-1">Contributors</p>
      <div className="contributors-grp mt-5">
        <ImageCircle Img={userLogo} />
        <ImageCircle Img={userLogo} />
        <ImageCircle Img={userLogo} />
        <ImageCircle Img={userLogo} />
        <ImageCircle Img={userLogo} />
        <ImageCircle Img={userLogo} />
        <span className="text-small">+1</span>
      </div>

      {/* footer reactions  */}
      <div className="reactions-grp mt-3">
        <span>
          <MdOutlineEmojiEmotions />
        </span>
        <button>
          <FaHeart /> <span>14</span>
        </button>
        <button>
          <img src={rocketIcon} alt="" /> <span>20</span>
        </button>
        <button>
          <img src={eyesIcon} alt="" /> <span>20</span>
        </button>
      </div>
    </div>
  );
};

export default ReleasedActivity;
