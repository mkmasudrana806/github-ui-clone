/* eslint-disable react/prop-types */
import { RiSearchLine } from "react-icons/ri";
import { GoCommandPalette } from "react-icons/go";
import "./InputField.scss";

// props format: size="200px" or %. startIcon={<Something />}, endIcon={<Something />}
const SearchFieldLeftIcon = ({
  size = "350px",
  startIcon = <RiSearchLine />,
  text = "Type to search",
}) => {
  return (
    <div style={{ width: `${size}` }} className="search-field-left-icon">
      <input type="text" placeholder={text} />
      {startIcon && <span className="start">{startIcon}</span>}
    </div>
  );
};

export default SearchFieldLeftIcon;
