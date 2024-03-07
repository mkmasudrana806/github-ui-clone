import SearchFieldLeftIcon from "../../forms/SearchFieldLeftIcon";
import "./pullRequest.scss";
import { RiSearchLine } from "react-icons/ri";
import IconWithText from "../../iconsButtons/IconWithText";
import { FaRegDotCircle } from "react-icons/fa";
import { IoCheckmarkSharp } from "react-icons/io5";
import { IoMdArrowDropdown } from "react-icons/io";

const PullRequest = () => {
  return (
    <div className="pullRequest-page">
      <div className="pullRequest-body">
        {/* subnav tabs  */}
        <div className="flex-between mb-1">
          <div className="subnav">
            <button className="active">Created</button>
            <button>Assigned</button>
            <button>Mentioned</button>
            <button>Review Requests</button>
          </div>
          <SearchFieldLeftIcon
            endIcon={<RiSearchLine />}
            size="100%"
            text="Search all pullRequest"
          />
        </div>

        {/* pullRequest content  */}
        <div className="pullRequest-content">
          {/* content head  */}
          <div className="head flex-between">
            <div className="flex-left">
              <div className="pullRequest-status">
                <IconWithText icon={<FaRegDotCircle />} text={"0 Open"} />
              </div>
              <IconWithText icon={<IoCheckmarkSharp />} text={"0 Closed"} />
            </div>
            <div className="filter-options">
              <div>
                Visibility
                <IoMdArrowDropdown />
              </div>
              <div>
                Organization
                <IoMdArrowDropdown />
              </div>
              <div>
                Sort
                <IoMdArrowDropdown />
              </div>
            </div>
          </div>
          {/* content body  */}
          <div className="content">
            <div>
              <FaRegDotCircle />
              <h2>No results matched your search.</h2>
              <p>
                You could search <span>all of GitHub</span> or try an{" "}
                <span>advanced search.</span>
              </p>
            </div>
          </div>
        </div>
        <p className="text-normal pullRequest-footer mt-1">
          {" "}
          <span className="protip">ProTip!</span> Exclude your own pull request with
          <span className="date"> -author:mkmasudrana806.</span>
        </p>
      </div>
    </div>
  );
};

export default PullRequest;
