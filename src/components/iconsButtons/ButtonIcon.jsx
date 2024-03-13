import "./buttonStyles.scss";
import { GoRepo } from "react-icons/go";
// format: icon + text (button)
// props: icon and text dynamically
const ButtonIcon = ({ text = "new", Img = <GoRepo /> }) => {
  return (
    <button className="btn-icon">
      {Img}
      {text}
    </button>
  );
};

export default ButtonIcon;
