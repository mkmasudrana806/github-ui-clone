/* eslint-disable react/prop-types */
import { RiSearchLine } from "react-icons/ri";
import { GoCommandPalette } from "react-icons/go";
import "./InputField.scss";

// props format: size="200px" or %. startIcon={<Something />}, endIcon={<Something />}
const SearchFieldIcon = ({
  size = "100px",
  startIcon = <RiSearchLine />,
  endIcon = null,
}) => {
  return (
    <div style={{ width: `${size}` }} className="search-field">
      <input type="text" placeholder="Type to search" />
      {startIcon && <span className="start">{startIcon}</span>}
      {endIcon ? (
        <div className="end">{endIcon}</div>
      ) : (
        <div className="end-command">
          <div className="separator">|</div>
          <GoCommandPalette />
        </div>
      )}
    </div>
  );
};

export default SearchFieldIcon;
