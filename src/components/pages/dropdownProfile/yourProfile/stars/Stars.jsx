import { RiGitRepositoryLine } from "react-icons/ri";
import "./stars.scss";
import rocket from "../../../../../assets/rocket.png";
import idea from "../../../../../assets/ideas.png";
import { TiStarOutline } from "react-icons/ti";
import IconWithText from "../../../../iconsButtons/IconWithText";
import { TiHeartOutline } from "react-icons/ti";
import ButtonGroup from "../../../../iconsButtons/ButtonGroup";
import { FaCodeBranch } from "react-icons/fa6";
import { FaCircle } from "react-icons/fa";
import InputField from "../../../../forms/InputField";
import { IoMdArrowDropdown } from "react-icons/io";
import Divider from "../../../../utilityComponents/Divider";
import Button from "../../../../utilityComponents/buttons/Button";

const Stars = () => {
  return (
    <div className="stars">
      {/* lists sort  */}
      <div className="flex-between">
        <p>
          Lists <span className="text-muted">(2)</span>
        </p>
        <Button text="Create list" color="green">
          <RiGitRepositoryLine />
        </Button>
      </div>

      <div className="flex-between  stack pointer  mt-3">
        <div className="flex-left">
          <img src={rocket} alt="" />
          <p>My stack</p>
        </div>
        <p className="text-small">1 repository</p>
      </div>
      <div className="flex-between idea pointer">
        <div className="flex-left">
          <img src={idea} alt="" />
          <p>Future ideas</p>
        </div>
        <p className="text-small">1 repository</p>
      </div>

      {/* stars filters */}
      <p className="mt-1">Stars</p>
      <div className="flex-left mt-3">
        <InputField size="100%" text="Find a repository..." />
        <Button text="Search" />
        <div>
          <div className="flex-left">
            <button className=" btn-primary flex-left">
              Type All <IoMdArrowDropdown />
            </button>
            <button className=" btn-primary flex-left">
              Language <IoMdArrowDropdown />
            </button>
            <button className=" btn-primary flex-left">
              Sort by: Recently started <IoMdArrowDropdown />
            </button>
          </div>
        </div>
      </div>

      {/* carts  */}
      <div className="carts mt-1">
        <RepoTopicCart />
        <RepoTopicCart />
        <RepoTopicCart />
        <RepoTopicCart />
        <RepoTopicCart />
      </div>
    </div>
  );
};

export default Stars;

const RepoTopicCart = () => {
  return (
    <div className="cart">
      {/* header  */}
      <div className="flex-between">
        <p className="text-color pointer">
          danielmiessler / <strong>fabric</strong>
        </p>
        <div className="flex-left">
          <Button text="Sponsor">
            <TiHeartOutline />
          </Button>
          <ButtonGroup />
        </div>
      </div>
      {/* body  */}
      <p className="text-small description mt-5">
        A collective list of free APIs
      </p>
      {/* footer  */}
      <div className="flex-left left-footer mt-1">
        <IconWithText color="#2b76e6" icon={<FaCircle />} text={"Python"} />
        <IconWithText icon={<TiStarOutline />} text={"285,895"} />
        <IconWithText icon={<FaCodeBranch />} text={"31,312"} />
        <p className="flex-left text-small">Updated last week</p>
      </div>

      <p className="mt-3">
        <Divider />
      </p>
    </div>
  );
};
