import "./projects.scss";
import IconWithText from "../../../iconsButtons/IconWithText";
import { MdOutlineWatchLater } from "react-icons/md";
import { LuUser2 } from "react-icons/lu";
import { GoProjectSymlink } from "react-icons/go";

const Projects = () => {
  return (
    <div className="project-page">
      <div className="project-body ">
        {/* left side  */}
        <div className="left">
          <div className="active">
            <IconWithText
              icon={<MdOutlineWatchLater />}
              text={"Recently viewed"}
            />
          </div>
          <div>
            <IconWithText icon={<LuUser2 />} text={"Created by me"} />
          </div>
        </div>

        {/* right side  */}
        <div className="right">
          {/* welcome cart  */}
          <div className="welcome-cart mb-1">
            <h3 className="text-large">Welcome to the all-new projects</h3>
            <p className="text-normal mt-5 mb-3">
              Built like a spreadsheet, project tables give you a live canvas to
              filter, sort, and group issues and pull requests. Tailor them to
              your needs with custom fields and saved views.
            </p>
            <button>Learn more</button>
          </div>
          {/* create new project cart  */}
          <div className="create-new-project">
            <div>
              <GoProjectSymlink />
              <h3>Create your first GitHub project</h3>
              <p>
                Projects are a customizable, flexible tool for planning and
                tracking your work.
              </p>
              <button>New Project</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
