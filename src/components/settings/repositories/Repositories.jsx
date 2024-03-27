import "./repositories.scss";
import Divider from "../../utilityComponents/Divider";
import Button from "../../utilityComponents/buttons/Button";
import InputField from "../../forms/InputField";
import { GoRepo } from "react-icons/go";
import { MdDeleteOutline } from "react-icons/md";
import { LuUsers2 } from "react-icons/lu";
import { Link } from "react-router-dom";

const Repositories = () => {
  return (
    <div className="repositories-page">
      <h3 className="text-large">Repository default branch</h3>
      <Divider />

      <p className="text-normal mt-1">
        Choose the default branch for your new personal repositories. You might
        want to change the default name due to different workflows, or because
        your integrations still require “master” as the default branch name. You
        can always change the default branch name on individual repositories.
        <span className="text-color pointer">
          Learn more about default branches.
        </span>
      </p>
      <div className="flex-left mt-5">
        <InputField text="" />
        <Button text="Update" />
      </div>

      <h3 className="text-large mt-40">Repositories</h3>
      <Divider />

      <div className=" border-primary mt-1">
        {/* repositories container heading  */}
        <div className="header">
          <p className="text-medium flex-left">
            <GoRepo /> Repositories
          </p>
          <p className="text-muted text-medium flex-left">
            <MdDeleteOutline size={18} />
            Deleted repositories
          </p>
        </div>

        <p className="username text-normal">mkmasudrana806</p>
        <div className="repositories-container">
          <Link className="text-normal flex-left">
            <GoRepo size={16} />{" "}
            <span className="text-color">mkmasudrana806/github-ui-clone</span> 2
            MB <LuUsers2 size={16} />{" "}
            <span className="text-color">0 collaborators</span>
          </Link>
          <Link className="text-normal flex-left">
            <GoRepo size={16} />{" "}
            <span className="text-color">
              mkmasudrana806/data-structure-all-source-code
            </span>{" "}
            11.4 MB <LuUsers2 size={16} />{" "}
            <span className="text-color">0 collaborators</span>
          </Link>
          <Link className="text-normal flex-left">
            <GoRepo size={16} />{" "}
            <span className="text-color">
              mkmasudrana806/data-structure-all-source-code
            </span>{" "}
            11.4 MB <LuUsers2 size={16} />{" "}
            <span className="text-color">0 collaborators</span>
          </Link>
          <Link className="text-normal flex-left">
            <GoRepo size={16} />{" "}
            <span className="text-color">
              mkmasudrana806/data-structure-all-source-code
            </span>{" "}
            11.4 MB <LuUsers2 size={16} />{" "}
            <span className="text-color">0 collaborators</span>
          </Link>
          <Link className="text-normal flex-left">
            <GoRepo size={16} />{" "}
            <span className="text-color">
              mkmasudrana806/data-structure-all-source-code
            </span>{" "}
            11.4 MB <LuUsers2 size={16} />{" "}
            <span className="text-color">0 collaborators</span>
          </Link>
          <Link className="text-normal flex-left">
            <GoRepo size={16} />{" "}
            <span className="text-color">
              mkmasudrana806/data-structure-all-source-code
            </span>{" "}
            11.4 MB <LuUsers2 size={16} />{" "}
            <span className="text-color">0 collaborators</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Repositories;
