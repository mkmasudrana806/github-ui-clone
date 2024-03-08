/* eslint-disable react/prop-types */
import { RiSearchLine } from "react-icons/ri";
import { GoCommandPalette } from "react-icons/go";
import "./InputField.scss";

// icon + input field + icon
// props format: size="200px" or %. startIcon={<Something />}, endIcon={<Something />}
const SearchFieldIcon = ({
  size = "350px",
  startIcon = <RiSearchLine />,
  endIcon = null,
  text = "Type to search",
}) => {
  return (
    <div style={{ width: `${size}` }} className="search-field">
      <input type="text" placeholder={text} />
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
