import "./codeSpaces.scss";
import IconWithText from "../../../iconsButtons/IconWithText";
import { GoCodespaces } from "react-icons/go";
import { GoRepoTemplate } from "react-icons/go";
import NumberCounter from "../../../utilityComponents/NumberCounter";
import {   NavLink, Outlet } from "react-router-dom";
import Divider from "../../../utilityComponents/Divider";

const CodeSpaces = () => {
  return (
    <div className="codespaces-page">
      <div className="codespaces-body ">
        {/* left side  */}
        <div className="left">
          {/* original */}

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
