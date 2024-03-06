import "./buttonStyles.scss";
import { GoRepo } from "react-icons/go";
// format: icon + text (button)
// props: icon and text dynamically
const ButtonIcon = () => {
  return (
    <button className="btn-icon">
      <GoRepo />
      New
    </button>
  );
};

export default ButtonIcon;
