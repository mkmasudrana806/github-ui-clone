import "./accountDropdownMenu.scss";

import ImageCircle from "../image/ImageCircle";
import { RxCross2 } from "react-icons/rx";
import userLogo from "../../assets/user.jpg";
import IconWithText from "../iconsButtons/IconWithText";
import { MdOutlineEmojiEmotions } from "react-icons/md";
import { LuUser2 } from "react-icons/lu";
import { LuUserPlus2 } from "react-icons/lu";
import { GoRepo } from "react-icons/go";
import { AiOutlineProject } from "react-icons/ai";
import { RiCopilotLine } from "react-icons/ri";
import { GoOrganization } from "react-icons/go";
import { TbNetwork } from "react-icons/tb";
import { TiStarOutline } from "react-icons/ti";
import { TiHeartOutline } from "react-icons/ti";
import { RiCodeBoxLine } from "react-icons/ri";
import { FiUpload } from "react-icons/fi";
import { AiOutlineExperiment } from "react-icons/ai";
import { LuSettings } from "react-icons/lu";
import { FiBookOpen } from "react-icons/fi";
import { LuUsers2 } from "react-icons/lu";
import Divider from "../utilityComponents/Divider";
import { useState } from "react";
import Overlay from "../utilityComponents/Overlay";
import SetStatus from "../pages/dropdownProfile/setStatus/SetStatusPopUp";

const AccountDropdownMenu = ({ handleCloseProfile }) => {
  const [isOpenSetStatus, setOpenStatus] = useState(false);

  // ************ menu bar toggle ***********
  const toggleSetStatus = () => {
    setOpenStatus(!isOpenSetStatus);
    // Toggle body scrolling
    if (!isOpenSetStatus) {
      document.body.style.overflow = "hidden"; // Disable scrolling
    } else {
      document.body.style.overflow = ""; // Enable scrolling
    }
  };
  // handle close menu bar
  const handleClose = () => {
    setOpenStatus(false);
    document.body.style.overflow = ""; // Enable scrolling
  };

  return (
    <div
      onClick={(e) => e.stopPropagation()}
      className="account-drop-down custom-scrollbar"
    >
      {/* set status popup  */}
      {isOpenSetStatus && (
        <Overlay handleClose={handleClose}>
          <SetStatus handleClose={handleClose} />
        </Overlay>
      )}
      {/* account list close button  */}
      <div className="account-header flex-between">
        <div className="flex-left">
          <ImageCircle Img={userLogo} />
          <div>
            <p className="text-bold">mkmasudrana806</p>
            <p className="text-small">Md Masud Rana</p>
          </div>
        </div>
        <span onClick={handleCloseProfile} className="close-account">
          <RxCross2 />
        </span>
      </div>
      {/* account list content  */}
      <div className="account-content">
        <ul>
          <li onClick={toggleSetStatus}>
            <IconWithText
              icon={<MdOutlineEmojiEmotions />}
              text={"Set status"}
            />
          </li>
          <Divider />
          <li>
            <IconWithText icon={<LuUser2 />} text={"Your profile"} />
          </li>
          <li>
            <IconWithText icon={<LuUserPlus2 />} text={"Add account"} />
          </li>
          <Divider />
          <li>
            <IconWithText icon={<GoRepo />} text={"Your repositories"} />
          </li>
          <li>
            <IconWithText icon={<AiOutlineProject />} text={"Your projects"} />
          </li>
          <li>
            <IconWithText icon={<RiCopilotLine />} text={"Your Copilot"} />
          </li>
          <li>
            <IconWithText
              icon={<GoOrganization />}
              text={"Your organizations"}
            />
          </li>
          <li>
            <IconWithText icon={<TbNetwork />} text={"Your enterprises"} />
          </li>
          <li>
            <IconWithText icon={<TiStarOutline />} text={"Your stars"} />
          </li>
          <li>
            <IconWithText icon={<TiHeartOutline />} text={"Your sponsors"} />
          </li>
          <li>
            <IconWithText icon={<RiCodeBoxLine />} text={"Your gists"} />
          </li>
          <Divider />
          <li>
            <IconWithText icon={<FiUpload />} text={"Updrade"} />
          </li>
          <li>
            <IconWithText icon={<TiStarOutline />} text={"Try enterprise"} />
          </li>
          <li>
            <IconWithText
              icon={<AiOutlineExperiment />}
              text={"Feature preview"}
            />
          </li>
          <li>
            <IconWithText icon={<LuSettings />} text={"Settings"} />
          </li>
          <Divider />
          <li>
            <IconWithText icon={<FiBookOpen />} text={"GitHub Docs"} />
          </li>
          <li>
            <IconWithText icon={<LuUsers2 />} text={"GitHub Support"} />
          </li>
          <Divider />
          <li className="text-medium">Sign out</li>
        </ul>
      </div>
    </div>
  );
};

export default AccountDropdownMenu;
