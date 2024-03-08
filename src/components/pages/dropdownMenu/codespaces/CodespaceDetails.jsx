import IconWithText from "../../../iconsButtons/IconWithText";
import { GoCodespaces, GoRepoTemplate } from "react-icons/go";
import { MdMemory } from "react-icons/md";
import { FiDatabase } from "react-icons/fi";
import { SlOptions } from "react-icons/sl";
import TemplateCart from "./templates/TemplateCart";
import { RxCross2 } from "react-icons/rx";
import Button from "../../../buttons/Button";
import "./codespaceDetails.scss";
import { useLocation } from "react-router-dom";

const CodespaceDetails = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const isUnPublished = queryParams.get("unpublished");

  return (
    <>
      {/* filters options  */}
      <div className="flex-between">
        <h3 className="text-large">Your codespaces</h3>
        <div className="flex-left">
          <Button text="Go to docs" />
          <span>
            <Button color="#238636" text="New codespace" />
          </span>
        </div>
      </div>

      {/* github codespace feedback:hide when isPublished status null  */}
      {isUnPublished === null && (
        <div className="codespace-feedback flex-between mt-1">
          <div className="flex-left">
            <span className="codespace-logo">
              <GoCodespaces />
            </span>
            <div>
              <h4 className="text-medium">Help us improve GitHub Codespaces</h4>
              <p className="text-small mt-5">
                Tell us how to make GitHub Codespaces work better for you with
                three quick questions.
              </p>
            </div>
          </div>
          <div className="flex-left">
            <Button text="Give feedback" />
            <div className="cancel-feedback-popup">
              <RxCross2 />
            </div>
          </div>
        </div>
      )}
      {/* quick start templates: show when isUnPublished is null */}
      {isUnPublished === null && (
        <div className="explore-templates mt-1">
          <div className="flex-between">
            <p className="text-medium">Explore quick start templates</p>
            <p className="text-medium see-all pointer">See All</p>
          </div>
          {/* template cart  */}
          <div className="templates">
            <TemplateCart />
            <TemplateCart />
            <TemplateCart />
            <TemplateCart />
          </div>
        </div>
      )}

      {/* codespace info  */}
      <div className="codespace-created mt-1">
        <div className="head">
          <p>Owned by mkmasudrana806</p>
        </div>
        <div className="flex-between body">
          <div>
            <IconWithText
              icon={<GoRepoTemplate />}
              text={"Created from github/codespaces-react"}
            />
            <p className="text-bold">automatic barnacle</p>
          </div>
          <div className="flex-left">
            <p className="text-small">
              {" "}
              <MdMemory /> 4-core • 16GB RAM • 32GB • <FiDatabase /> 0.81 GB •
              Last used about 14 hours ago
            </p>
            <div className="option">
              <SlOptions />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CodespaceDetails;
