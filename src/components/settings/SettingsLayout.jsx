import { NavLink, Outlet, useLocation, useMatch } from "react-router-dom";
import "./settingsLayout.scss";
import Divider from "../utilityComponents/Divider";
import Button from "../utilityComponents/buttons/Button";
import IconWithText from "../iconsButtons/IconWithText";
import { GoRepoTemplate } from "react-icons/go";
import ImageCircle from "../utilityComponents/image/ImageCircle";
import userLogo from "../../assets/user.jpg";
import { LuUser2 } from "react-icons/lu";
import { FiSettings } from "react-icons/fi";
import { FaPenFancy } from "react-icons/fa";
import { IoAccessibilityOutline } from "react-icons/io5";
import { MdNotificationsNone } from "react-icons/md";
import { MdPayment } from "react-icons/md";
import { MdOutlineEmail } from "react-icons/md";
import { LuRadioTower } from "react-icons/lu";
import { VscKey } from "react-icons/vsc";
import { GoOrganization } from "react-icons/go";
import { TbNetwork } from "react-icons/tb";
import { BiCommentError } from "react-icons/bi";
import { GoRepo } from "react-icons/go";
import { GoCodespaces } from "react-icons/go";
import { GoPackage } from "react-icons/go";
import { VscCopilot } from "react-icons/vsc";
import { FiLayout } from "react-icons/fi";
import { BsArrow90DegLeft } from "react-icons/bs";
import { GrShieldSecurity } from "react-icons/gr";
import { BsGrid } from "react-icons/bs";
import { FaRegClock } from "react-icons/fa";
import { GoLog } from "react-icons/go";
import { IoCode } from "react-icons/io5";

const SettingsLayout = () => {
  // handle active case only for "/settings/profile route"
  const location = useLocation();
  const route = location.pathname === "/settings" ? true : false;
  return (
    <div className="settings">
      {/* profile picture  */}
      <div className="flex-between">
        <div className="flex-left">
          <ImageCircle size={48} Img={userLogo} />
          <div>
            <h3>
              Md Masud Rana <span className="text-muted">(mkmasudrana806)</span>
            </h3>
            <p className="text-small">Your personal account</p>
          </div>
        </div>
        <Button text="go to your personal account" />
      </div>

      {/* main layout  */}
      <div className="settingsLayout mt-1">
        {/* sidebar  */}
        <div className="sidebar">
          <ul>
            <li>
              <NavLink
                to={"/settings/profile"}
                end={false}
                className={`flex-between ${route ? "active" : ""}`}
              >
                <IconWithText icon={<LuUser2 />} text={"Public profile"} />
              </NavLink>
            </li>
            <li>
              <NavLink end to={"/settings/account"} className={"flex-between"}>
                <IconWithText icon={<FiSettings />} text={"Account"} />
              </NavLink>
            </li>
            <li>
              <NavLink
                end
                to={"/settings/appearance"}
                className={"flex-between"}
              >
                <IconWithText icon={<FaPenFancy />} text={"Appearance"} />
              </NavLink>
            </li>
            <li>
              <NavLink
                end
                to={"/settings/accessibility"}
                className={"flex-between"}
              >
                <IconWithText
                  icon={<IoAccessibilityOutline />}
                  text={"Accessibility"}
                />
              </NavLink>
            </li>
            <li>
              <NavLink
                end
                to={"/settings/Notifications"}
                className={"flex-between"}
              >
                <IconWithText
                  icon={<MdNotificationsNone />}
                  text={"Notifications"}
                />
              </NavLink>
            </li>
            <Divider />
            <p className="text-small mb-3 ms">Access</p>
            <li>
              <NavLink end to={"/settings/billings"} className={"flex-between"}>
                <IconWithText icon={<MdPayment />} text={"Billing and plans"} />
              </NavLink>
            </li>
            <li>
              <NavLink end to={"/settings/emails"} className={"flex-between"}>
                <IconWithText icon={<MdOutlineEmail />} text={"Emails"} />
              </NavLink>
            </li>
            <li>
              <NavLink end to={"/settings/security"} className={"flex-between"}>
                <IconWithText
                  icon={<GrShieldSecurity />}
                  text={"Password and Authentication"}
                />
              </NavLink>
            </li>
            <li>
              <NavLink end to={"/settings/sessions"} className={"flex-between"}>
                <IconWithText icon={<LuRadioTower />} text={"Sessioins"} />
              </NavLink>
            </li>
            <li>
              <NavLink end to={"/settings/keys"} className={"flex-between"}>
                <IconWithText icon={<VscKey />} text={"SSH and GPG Keys"} />
              </NavLink>
            </li>
            <li>
              <NavLink
                end
                to={"/settings/organizations"}
                className={"flex-between"}
              >
                <IconWithText
                  icon={<GoOrganization />}
                  text={"Organizations"}
                />
              </NavLink>
            </li>
            <li>
              <NavLink
                end
                to={"/settings/enterprices"}
                className={"flex-between"}
              >
                <IconWithText icon={<TbNetwork />} text={"Enterprises"} />
              </NavLink>
            </li>
            <li>
              <NavLink
                end
                to={"/settings/moderation"}
                className={"flex-between"}
              >
                <IconWithText icon={<BiCommentError />} text={"Moderation"} />
              </NavLink>
            </li>
            <Divider />
            <p className="ms text-small mb-3">Code, planning, and automation</p>
            <li>
              <NavLink
                end
                to={"/settings/repositories"}
                className={"flex-between"}
              >
                <IconWithText icon={<GoRepo />} text={"Repositories"} />
              </NavLink>
            </li>
            <li>
              <NavLink
                end
                to={"/settings/codespaces"}
                className={"flex-between"}
              >
                <IconWithText icon={<GoCodespaces />} text={"Codespaces"} />
              </NavLink>
            </li>
            <li>
              <NavLink end to={"/settings/packages"} className={"flex-between"}>
                <IconWithText icon={<GoPackage />} text={"Packages"} />
              </NavLink>
            </li>
            <li>
              <NavLink end to={"/settings/copilot"} className={"flex-between"}>
                <IconWithText icon={<VscCopilot />} text={"Copilot"} />
              </NavLink>
            </li>
            <li>
              <NavLink end to={"/settings/pages"} className={"flex-between"}>
                <IconWithText icon={<FiLayout />} text={"Pages"} />
              </NavLink>
            </li>
            <li>
              <NavLink end to={"/settings/replies"} className={"flex-between"}>
                <IconWithText
                  icon={<BsArrow90DegLeft />}
                  text={"Save replies"}
                />
              </NavLink>
            </li>
            <Divider />
            <p className="ms text-small mb-3">Security</p>
            <li>
              <NavLink
                end
                to={"/settings/security_analysis"}
                className={"flex-between"}
              >
                <IconWithText
                  icon={<GrShieldSecurity />}
                  text={"Code security and analysis"}
                />
              </NavLink>
            </li>
            <Divider />
            <p className="ms text-small mb-3">Integrations</p>
            <li>
              <NavLink
                end
                to={"/settings/installations"}
                className={"flex-between"}
              >
                <IconWithText icon={<BsGrid />} text={"Applications"} />
              </NavLink>
            </li>
            <li>
              <NavLink
                end
                to={"/settings/reminders"}
                className={"flex-between"}
              >
                <IconWithText
                  icon={<FaRegClock />}
                  text={"Scheduled reminders"}
                />
              </NavLink>
            </li>
            <Divider />
            <p className="ms text-small mb-3">Arhives</p>
            <li>
              <NavLink
                end
                to={"/settings/security-log"}
                className={"flex-between"}
              >
                <IconWithText icon={<GoLog />} text={"Security log"} />
              </NavLink>
            </li>
            <li>
              <NavLink
                end
                to={"/settings/sponsor-log"}
                className={"flex-between"}
              >
                <IconWithText icon={<GoLog />} text={"Sponsorship log"} />
              </NavLink>
            </li>
            <Divider />
            <li>
              <NavLink
                end
                to={"/settings/settings/apps"}
                className={"flex-between"}
              >
                <IconWithText icon={<IoCode />} text={"Developer settings"} />
              </NavLink>
            </li>
          </ul>
        </div>
        {/* main outlet  */}
        <div className="mainLayout">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default SettingsLayout;
