import "./recommonded.scss";
import ButtonImg from "../../../iconsButtons/ButtonImg";
import { SlOptions } from "react-icons/sl";
import { FiStar } from "react-icons/fi";
import { FaCircle } from "react-icons/fa";
import IconWithText from "../../../iconsButtons/IconWithText";
import ButtonGroup from "../../../iconsButtons/ButtonGroup";

const RecommondedActivity = () => {
  return (
    <div className="recommondedActivity mt-4 ">
      <div className="user-activity">
        <IconWithText icon={<FiStar />} text={"Reconmmended for you"} />
        <SlOptions />
      </div>

      {/* outer actions with profile */}
      <div className="flex-between mt-3">
        <ButtonImg text="mkmasudrana/GitHub Clone" />
        <ButtonGroup />
      </div>
      <p className="text-normal mt-5">
        A collective list of free APIs for use in software development
      </p>
      {/* footer  */}
      <div className="activity-footer text-small mt-4">
        <IconWithText color="yellow" icon={<FaCircle />} text={"JavaScript"} />
        <IconWithText icon={<FiStar />} text={"98"} />
      </div>
    </div>
  );
};

export default RecommondedActivity;
