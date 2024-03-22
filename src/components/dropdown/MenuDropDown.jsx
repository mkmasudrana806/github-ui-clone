import "./menuDropDown.scss";
import { RxCross2 } from "react-icons/rx";
import githubLogo from "../../assets/logo.png";
import IconWithText from "../iconsButtons/IconWithText";
import { GoHome } from "react-icons/go";
import { FaRegDotCircle } from "react-icons/fa";
import { TbGitPullRequest } from "react-icons/tb";
import { GoProjectSymlink } from "react-icons/go";
import { GoCommentDiscussion } from "react-icons/go";
import { GoCodespaces } from "react-icons/go";
import { GoTelescope } from "react-icons/go";
import { FiGift } from "react-icons/fi";
import InputField from "../forms/InputField";
import ButtonImg from "../iconsButtons/ButtonImg";
import { Link } from "react-router-dom";
import Divider from "../utilityComponents/Divider";
import ImageCircle from "../utilityComponents/image/ImageCircle";

const MenuDropDown = ({ handleClose }) => {
  return (
    <div
      onClick={(e) => e.stopPropagation()}
      className="menu-drop-down custom-scrollbar"
    >
      {/* menu list close button  */}
      <div className="menu-header flex-between">
        <ImageCircle Img={githubLogo} />
        <span onClick={handleClose} className="close-menu">
          <RxCross2 />
        </span>
      </div>
      {/* menu list content  */}
      <div className="menu-content">
        <ul>
          <Link to={"/"}>
            <li onClick={handleClose}>
              <IconWithText icon={<GoHome />} text={"Home"} />
            </li>
          </Link>
          <Link to={"/issues"}>
            <li onClick={handleClose}>
              <IconWithText icon={<FaRegDotCircle />} text={"Issues"} />
            </li>
          </Link>
          <Link to={"/pulls"}>
            <li onClick={handleClose}>
              <IconWithText
                icon={<TbGitPullRequest />}
                text={"Pull requests"}
              />
            </li>
          </Link>
          <Link to={"/projects"}>
            <li onClick={handleClose}>
              <IconWithText icon={<GoProjectSymlink />} text={"Projects"} />
            </li>
          </Link>
          <Link to={"/discussions"}>
            <li onClick={handleClose}>
              <IconWithText
                icon={<GoCommentDiscussion />}
                text={"Discussions"}
              />
            </li>
          </Link>
          <Link to={"/codespaces"}>
            <li onClick={handleClose}>
              <IconWithText icon={<GoCodespaces />} text={"Codespaces"} />
            </li>
          </Link>
          <Divider />
          <Link to={"/explore"}>
            <li onClick={handleClose}>
              <IconWithText icon={<GoTelescope />} text={"Explore"} />
            </li>
          </Link>
          <Link to={"/marketplace"}>
            <li onClick={handleClose}>
              <IconWithText icon={<FiGift />} text={"Marketplace"} />
            </li>
          </Link>
          <Divider />
        </ul>
        {/* repositores  */}
        <h5 className="text-bold mt-4">Top Repositories</h5>
        <div className="mt-1">
          <InputField size="100%" text="Find a repository..." />
        </div>
        <div className="top-repos mt-1">
          <Link>
            <ButtonImg text="mkmasudrana806/Redux" />
          </Link>
          <ButtonImg text="mkmasudrana806/Job-seeker-career-hub" />
          <ButtonImg text="mkmasudrana806/JavaScript-Mastering" />
          <ButtonImg text="mkmasudrana806/learn-programming-client-side" />
          <ButtonImg text="mkmasudrana806/modern-ui-bank-app" />
          <ButtonImg text="mkmasudrana806/nodejs-pratice" />
          <ButtonImg text="mkmasudrana806/multi-filtering-react-app" />
        </div>
        <p className="text-small mt-1 pointer">Show more</p>

        {/* footer  */}
        <p className="mt-1 text-small"> &copy; 2024 GitHub, Inc.</p>
        <div className="footer-links text-small mt-4">
          <a href="#about">About</a>
          <a href="#blog">Blog</a>
          <a href="#terms">Terms</a>
          <a href="#privacy">Privacy</a>
          <a href="#security">Security</a>
          <a href="#status">Status</a>
          <a href="#personalinfo">Do not share my personal information</a>
          <a href="#cookies">Manage Cookies</a>
        </div>
      </div>
    </div>
  );
};

export default MenuDropDown;
