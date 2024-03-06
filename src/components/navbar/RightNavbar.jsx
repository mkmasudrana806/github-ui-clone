import ImageCircle from "../image/ImageCircle";
import Feeds from "../pages/home/feed/Feeds";
import Activities from "../pages/home/userActivity/Activities";
import "./rightNavbar.scss";
import { IoFilterSharp } from "react-icons/io5";
import githubLogo from "../../assets/logo.png";
import Footer from "../footer/Footer";

const RightNavbar = () => {
  return (
    <div className="right-home">
      {/* left side of home page  */}
      <div className="left">
        <div className="filter flex-between">
          <h3 className="text-large">Home</h3>
          <div>
            <p className="text-normal">Send feedback</p>
            <button className="text-medium ">
              <IoFilterSharp /> <span>Filter</span>{" "}
              <span className="number">8</span>
            </button>
          </div>
        </div>
        <Activities />
        {/* footer */}
        <Footer />
      </div>

      {/* right side feed  */}
      <div className="right">
        <Feeds />
      </div>
    </div>
  );
};

export default RightNavbar;
