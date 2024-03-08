import "./discussions.scss";
import { RiSearchLine } from "react-icons/ri";
import SearchFieldLeftIcon from "../../../forms/SearchFieldLeftIcon";
import { GoCommentDiscussion } from "react-icons/go";
import { MdCancel } from "react-icons/md";
import SearchFieldIcon from "../../../forms/SearchFieldIcon";

const Discussions = () => {
  return (
    <div className="discussion-page">
      <div className="discussion-body">
        {/* subnav tabs  */}
        <div className="flex-between mb-1">
          <div className="subnav">
            <button className="active">Created</button>
            <button>Mentioned</button>
          </div>
          {/* <SearchFieldLeftIcon
            endIcon={<RiSearchLine />}
            size="100%"
            text="Search all discussions"
          /> */}
          <SearchFieldIcon
            size="100%"
            startIcon={<RiSearchLine />}
            endIcon={<MdCancel />}
            text="Search all discussions"
          />
        </div>

        {/* discussion content  */}
        <div className="discussion-content">
          {/* content body  */}
          <div className="content">
            <div>
              <GoCommentDiscussion />
              <h3>No discussions match the selected filters.</h3>
              <p className="text-medium">
                Discussions are used to ask questions and have open-ended
                conversations.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Discussions;
