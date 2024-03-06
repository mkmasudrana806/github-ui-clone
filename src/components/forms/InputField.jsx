/* eslint-disable react/prop-types */
import "./InputField.scss";

// props format: size=as px or %. text="placeholder text".
// default size: 350px;
const InputField = ({ size = "350px", text = "Type to search" }) => {
  return (
    <div style={{ width: `${size}` }} className="input-field">
      <input type="text" placeholder={text} />
    </div>
  );
};

export default InputField;
