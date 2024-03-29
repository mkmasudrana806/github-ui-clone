import { RiGitPullRequestLine } from "react-icons/ri";
import { LuInbox } from "react-icons/lu";
import { RxHamburgerMenu } from "react-icons/rx";
import { FaRegDotCircle } from "react-icons/fa";
import { IoMdArrowDropdown, IoMdAdd } from "react-icons/io";
import logo from "../../assets/logo.png";
import profileImg from "../../assets/user.jpg";

import "./navbar.scss";
import SearchFieldIcon from "../forms/SearchFieldIcon";
import { useEffect, useState } from "react";
import MenuDropDown from "../dropdown/MenuDropDown";
import AccountDropdownMenu from "../dropdown/AccountDropdownMenu";
import Overlay from "../utilityComponents/Overlay";
import { useLocation } from "react-router-dom";
import LocalNavbar from "./LocalNavbar";
import ImageCircle from "../utilityComponents/image/ImageCircle";

const Navbar = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const [isOpenProfile, setIsOpenProfile] = useState(false);
  const [isOpenLocalbar, setIsOpenLocalbar] = useState(false);

  // if location='/mkmasudrana806' then show..
  // overview, repositories, projects, packages and stars tabs
  // userName comes from authorized logged in user profile
  const location = useLocation();
  useEffect(() => {
    if (location.pathname === "/mkmasudrana806") {
      setIsOpenLocalbar(true);
    } else {
      setIsOpenLocalbar(false);
    }
  }, [location]);

  // ************ menu bar toggle ***********
  const toggleMenu = () => {
    setIsOpenMenu(!isOpenMenu);
    // Toggle body scrolling
    if (!isOpenMenu) {
      document.body.style.overflow = "hidden"; // Disable scrolling
    } else {
      document.body.style.overflow = ""; // Enable scrolling
    }
  };
  // handle close menu bar
  const handleClose = () => {
    setIsOpenMenu(false);
    document.body.style.overflow = ""; // Enable scrolling
  };

  // ************ toggle user profile ***********
  const toggleAccount = () => {
    setIsOpenProfile(!isOpenProfile);
    // Toggle body scrolling
    if (!isOpenProfile) {
      document.body.style.overflow = "hidden"; // Disable scrolling
    } else {
      document.body.style.overflow = ""; // Enable scrolling
    }
  };
  // handle close Profile bar
  const handleCloseProfile = () => {
    setIsOpenProfile(false);
    document.body.style.overflow = ""; // Enable scrolling
  };

  return (
    <nav className="appHeader">
      {/* show menu dropdown */}
      {isOpenMenu && (
        <Overlay handleClose={handleClose}>
          <MenuDropDown handleClose={handleClose} />
        </Overlay>
      )}

      {/* show account profile dropdown */}
      {isOpenProfile && (
        <Overlay handleClose={handleCloseProfile}>
          <AccountDropdownMenu handleCloseProfile={handleCloseProfile} />
        </Overlay>
      )}

      <div className="appHeader-globalBar">
        {/* left side  */}
        <div className="appHeader-globalbar-start">
          <div onClick={toggleMenu} className="icon-border">
            <RxHamburgerMenu />
          </div>
          <ImageCircle Img={logo} />
          <p className="appHeader-start-context  text-bold ">Dashboard </p>
        </div>

        {/* right side  */}
        <div className="appHeader-globalbar-end">
          <SearchFieldIcon size={"350px"} />
          <div className="appHeader-end-actions">
            <div className="seperator">|</div>
            <div className="appHeader-end-createNew icon-border">
              <IoMdAdd />
              <IoMdArrowDropdown />
            </div>
            <div className="appHeader-end-issues icon-border">
              <FaRegDotCircle />
            </div>
            <div className="appHeader-end-pull-request icon-border">
              <RiGitPullRequestLine />
            </div>
          </div>
          <div className="appHeader-end-notification icon-border">
            <LuInbox />
          </div>
          <div onClick={toggleAccount} className="appHeader-end-user">
            <ImageCircle Img={profileImg} />
          </div>
        </div>
      </div>
      {/* localbar show based on current location:'/mkmasudrana806' */}
      {isOpenLocalbar && <LocalNavbar />}
    </nav>
  );
};

export default Navbar;
