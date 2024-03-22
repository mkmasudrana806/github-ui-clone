import "./repositories.scss";
import InputField from "../../../../forms/InputField";
import { IoMdArrowDropdown } from "react-icons/io";
import { RiGitRepositoryLine } from "react-icons/ri";
import Divider from "../../../../utilityComponents/Divider";
import ButtonGroup from "../../../../iconsButtons/ButtonGroup";
import IconWithText from "../../../../iconsButtons/IconWithText";
import { FaCircle } from "react-icons/fa";
import { FaAngleLeft } from "react-icons/fa6";
import { FaChevronRight } from "react-icons/fa";
import Button from "../../../../utilityComponents/buttons/Button";

const Repositories = () => {
  return (
    <div className="repositories-containers">
      {/* fitlers header  */}
      <div className="filter">
        <InputField size="100%" text="Find a repository..." />
        <div className="options">
          <div className="flex-left">
            <button className="type btn-primary flex-left">
              Type <IoMdArrowDropdown />
            </button>
            <button className="language btn-primary flex-left">
              Language <IoMdArrowDropdown />
            </button>
            <button className="sort btn-primary flex-left">
              Sort <IoMdArrowDropdown />
            </button>
          </div>
        </div>
        <Button text="New" color="green">
          <RiGitRepositoryLine />
        </Button>
      </div>

      {/* repositories  */}
      <div className="repositories mt-1">
        <Repo />
        <Repo />
        <Repo />
        <Repo />
        <Repo />
        <Repo />
      </div>

      <Divider />
      {/* pagination  */}
      <div className="pagination mt-1">
        <IconWithText icon={<FaAngleLeft />} text={"Previous"} color="gray" />
        <p className="next flex-left pointer">
          Next <FaChevronRight />
        </p>
      </div>
    </div>
  );
};

export default Repositories;

const Repo = () => {
  return (
    <div className="repo">
      <Divider />
      <div className="flex-between mt-1">
        <div className="flex-left">
          <p className="text-color pointer">github-ui-clone</p>
          <span className="public-status">Public</span>
        </div>
        <ButtonGroup />
      </div>

      <div className="repo-footer mt-5">
        <IconWithText color="yellow" text={"JavaScript"} icon={<FaCircle />} />
        <p className="text-small">Updated 25 minutes ago</p>
      </div>
    </div>
  );
};
