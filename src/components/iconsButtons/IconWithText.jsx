/* eslint-disable react/prop-types */
import "./buttonStyles.scss";

// format: icon + text (not button)
// props: icon as element, lke <FiStart /> and text as string dynamically
const IconWithText = ({ icon, text, color = "#848d97" }) => {
  return (
    <button className="icon-text">
      <span className="icon" style={{ color: color }}>
        {icon}
      </span>
      <span className="text">{text}</span>
    </button>
  );
};

export default IconWithText;
