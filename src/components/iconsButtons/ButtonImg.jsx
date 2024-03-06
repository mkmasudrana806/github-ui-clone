import ImageCircle from "../image/ImageCircle";
import userLogo from "../../assets/user.jpg";
import "./buttonStyles.scss";

// format: image + text (this is not a button style)
// props: pass dynamically img and text
const ButtonImg = ({ Img, text = "mkmasudrana/redux" }) => {
  return (
    <div className="icon-text-btn pointer">
      <ImageCircle size={18} Img={userLogo} />{" "}
      <span className="text-bold">{text}</span>
    </div>
  );
};

export default ButtonImg;
