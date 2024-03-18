import SearchFieldLeftIcon from "../../../forms/SearchFieldLeftIcon";
import "./setStatusPopUp.scss";
import { RxCross2 } from "react-icons/rx";
import { MdOutlineEmojiEmotions } from "react-icons/md";
import IconWithText from "../../../iconsButtons/IconWithText";
import { LuPalmtree } from "react-icons/lu";
import { BsEmojiFrown } from "react-icons/bs";
import { TiHomeOutline } from "react-icons/ti";
import { RiFocus2Line } from "react-icons/ri";
import Divider from "../../../utilityComponents/Divider";

const setStatusPopUp = ({ handleClose }) => {
  return (
    <div className="setStatuPopUp">
      <div
        onClick={(e) => e.stopPropagation()}
        className="popUpBody border-primary"
      >
        {/* heding  */}
        <div className="flex-between mb-1">
          <p>Edit status</p>
          <div onClick={handleClose} className="icon-border cancel-btn">
            <RxCross2 />
          </div>
        </div>

        {/* body  */}
        <SearchFieldLeftIcon
          size="100%"
          startIcon={<MdOutlineEmojiEmotions />}
          text="What's happening"
        />

        {/* icons  */}
        <p className="text-small mt-3">Suggestions </p>
        <div className="suggestion-icon">
          <IconWithText
            icon={<LuPalmtree />}
            color="green"
            text={"On vacation"}
          />
          <IconWithText
            icon={<BsEmojiFrown />}
            color="yellow"
            text={"Out sick"}
          />
          <IconWithText
            icon={<TiHomeOutline />}
            color="gray"
            text={"Working from home"}
          />
          <IconWithText
            icon={<RiFocus2Line />}
            color="red"
            text={"Focussing"}
          />
        </div>

        <div className="busy-checkbox mt-1">
          <p>
            <input type="checkbox" name="" id="" />
          </p>
          <div>
            <p className="text-medium">Busy</p>
            <p className="text-small">
              When others mention you, assign you, or request your review,
              GitHub will let them know that you have limited availability.
            </p>
          </div>
        </div>
        <Divider />
        <p className="text-medium">Clear status</p>
        <select className="clear-status border-primary" name="" id="">
          <option value="">Never</option>
          <option value="">in 30 minutes</option>
          <option value="">in 1 hour</option>
          <option value="">in 4 hours</option>
          <option value="">today</option>
          <option value="">this week</option>
        </select>
        <p className="text-small">
          How long until this status will automatically clear.
        </p>

        <Divider />
        <div className="btns">
          <button className="btn-primary">Set status</button>
          <button className="btn-primary">Clear status</button>
        </div>
      </div>
    </div>
  );
};

export default setStatusPopUp;
