
import "./footer.scss";
import githubLogo from "../../assets/logo.png";
import ImageCircle from "../utilityComponents/image/ImageCircle";

const Footer = () => {
  return (
    <div className="footer flex-left">
      <div className="flex-left">
        <ImageCircle size={24} Img={githubLogo} />
        <p className=" text-small"> &copy; 2024 GitHub, Inc.</p>
      </div>
      <div className="flex-left footer-links text-small">
        <a href="#about">About</a>
        <a href="#blog">Blog</a>
        <a href="#terms">Terms</a>
        <a href="#privacy">Privacy</a>
        <a href="#security">Security</a>
        <a href="#status">Status</a>
        <a href="#cookies">Manage Cookies</a>
        <a href="#personalinfo">Do not share my personal information</a>
      </div>
    </div>
  );
};

export default Footer;
