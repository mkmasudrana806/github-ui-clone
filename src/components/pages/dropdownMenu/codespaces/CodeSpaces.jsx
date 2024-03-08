import "./codeSpaces.scss";
import IconWithText from "../../../iconsButtons/IconWithText";
import Divider from "../../../Divider";
import { GoCodespaces } from "react-icons/go";
import { GoRepoTemplate } from "react-icons/go";
import NumberCounter from "../../../utilityComponents/NumberCounter";
import { Link, NavLink, Outlet } from "react-router-dom";
import { useState } from "react";

const CodeSpaces = () => {
  const [activeTabIndex, setActiveTabIndex] = useState(0);

  return (
    <div className="codespaces-page">
      <div className="codespaces-body ">
        {/* left side  */}
        <div className="left">
          {/* original */}
          {/* <div>
            <NavLink to={"/codespaces/"} className={"flex-between"}>
              <IconWithText icon={<GoCodespaces />} text={"All"} />
              <NumberCounter>1</NumberCounter>
            </NavLink>
          </div>
          <div>
            <NavLink to={"/codespaces/templates"}>
              <IconWithText icon={<GoRepoTemplate />} text={"Templates"} />
            </NavLink>
          </div>
          <Divider />
          <p className="text-small mt-3">By repository</p>
          <div className="mt-5 flex-between">
            <IconWithText
              icon={<GoRepoTemplate />}
              text={"Created rom a template"}
            />
            <NumberCounter>1</NumberCounter>
          </div> */}

          <ul>
            <li>
              <NavLink end to={"/codespaces"} className={"flex-between"}>
                <IconWithText icon={<GoCodespaces />} text={"All"} />
                <NumberCounter>1</NumberCounter>
              </NavLink>
            </li>
            <li>
              <NavLink
                end
                to={"/codespaces/templates"}
                className={"flex-between"}
              >
                <IconWithText icon={<GoRepoTemplate />} text={"Templates"} />
              </NavLink>
            </li>
            <Divider />
            <p className="text-small mt-3">By repository</p>
            <li className="mt-5">
              <NavLink
                end
                to={"/codespaces/created?unpublished=true"}
                className={"flex-between"}
              >
                <IconWithText
                  icon={<GoRepoTemplate />}
                  text={"Created rom a template"}
                />
                <NumberCounter>1</NumberCounter>
              </NavLink>
            </li>
          </ul>
        </div>

        {/* right side  */}
        <div className="right">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default CodeSpaces;
