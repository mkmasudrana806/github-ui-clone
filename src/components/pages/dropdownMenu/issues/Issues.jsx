import "./issues.scss";
import { RiSearchLine } from "react-icons/ri";
import { FaRegDotCircle } from "react-icons/fa";
import { IoCheckmarkSharp } from "react-icons/io5";
import { IoMdArrowDropdown } from "react-icons/io";
import SearchFieldLeftIcon from "../../../forms/SearchFieldLeftIcon";
import IconWithText from "../../../iconsButtons/IconWithText";

const Issues = () => {
  return (
    <div className="issues-page">
      <div className="issue-body">
        {/* subnav tabs  */}
        <div className="flex-between mb-1">
          <div className="subnav">
            <button className="active">Created</button>
            <button>Assigned</button>
            <button>Mentioned</button>
          </div>
          <SearchFieldLeftIcon
            endIcon={<RiSearchLine />}
            size="100%"
            text="Search all issues"
          />
        </div>

        {/* issue content  */}
        <div className="issue-content">
          {/* content head  */}
          <div className="head flex-between">
            <div className="flex-left">
              <div className="issue-status">
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
        <p className="text-normal issue-footer mt-1">
          {" "}
          <span className="protip">ProTip!</span> What’s not been updated in a
          month:
          <span className="date"> updated: 2024-02-07.</span>
        </p>
      </div>
    </div>
  );
};

export default Issues;
