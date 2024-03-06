import { FiStar } from "react-icons/fi";
import { IoMdArrowDropdown } from "react-icons/io";

// button group, icon + text + icon
const ButtonGroup = () => {
  return (
    <div>
      <button className="btn-star">
        <FiStar /> <span className="star">Star</span>
      </button>
      <button className="btn-dropdown">
        <IoMdArrowDropdown />
      </button>
    </div>
  );
};

export default ButtonGroup;
