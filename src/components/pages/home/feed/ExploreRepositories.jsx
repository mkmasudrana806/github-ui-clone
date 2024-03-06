import ButtonImg from "../../../iconsButtons/ButtonImg";
import "./exploreRepo.scss";
import { FiStar } from "react-icons/fi";
import { FaCircle } from "react-icons/fa";
import IconWithText from "../../../iconsButtons/IconWithText";
import Divider from "../../../Divider";

const ExploreRepositories = () => {
  return (
    <div className="explore-repo mt-2">
      <p className="text-bold">Explore Repositories</p>
      <SingleRepo />
      <Divider />
      <SingleRepo color="yellow" />
      <Divider />
      <SingleRepo color="indigo" />
      <p className="mt-2 text-normal explore-more">Explore more &rarr;</p>
    </div>
  );
};

export default ExploreRepositories;

const SingleRepo = ({ color = "green" }) => {
  return (
    <div className="inner mt-4">
      <div className="flex-between">
        <ButtonImg text="mkmasudrana806/redux" />
        <button className="star-btn">
          <FiStar />
        </button>
      </div>
      <p className="text-small mt-3 description">
        Learn to create modern websites with sleek parallax effects and bento
        box layouts. This course covers everything from stylish UI design to
        mobile-first principles while strengthening your React.js …
      </p>
      <div className="activity-footer text-small mt-3">
        <IconWithText text={"55"} icon={<FiStar />} />
        <IconWithText color={color} text={"PHP"} icon={<FaCircle />} />
      </div>
    </div>
  );
};
