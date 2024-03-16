/* eslint-disable react/prop-types */
import ExploreNavbar from "../ExploreNavbar";
import "./events.scss";
import Divider from "../../../../utilityComponents/Divider";
import TopicIntroCart from "./TopicIntroCart";
// data import from data folder
import { eventsTntro } from "./data/data";

const Events = () => {
  return (
    <div className="events">
      {/* navbar  */}
      <div className="navbar">
        <ExploreNavbar />
        <Divider />
      </div>
      {/* intro box  */}
      <TopicIntroCart intro={eventsTntro} />
    </div>
  );
};

export default Events;
