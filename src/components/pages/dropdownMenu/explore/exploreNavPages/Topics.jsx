import ExploreNavbar from "../ExploreNavbar";
import "./topics.scss";
import logo from "../../../../../assets/logo.png";
import { TiStarOutline } from "react-icons/ti";
import Tag from "../../../../tags/Tag";
import Divider from "../../../../utilityComponents/Divider";
import ButtonIcon from "../../../../iconsButtons/ButtonIcon";
import TopicIntroCart from "./TopicIntroCart";

const Topics = () => {
  const intro = {
    title: "Topics",
    intro: "Browse popular topics on GitHub.",
  };
  return (
    <div className="topics">
      {/* navbar  */}
      <div className="navbar">
        <ExploreNavbar />
      </div>
      {/* intro box  */}
      <TopicIntroCart intro={intro} />
      {/* topics carts  */}
      <div className="carts-topics  ">
        <div className="carts-container">
          {/* single cart  */}
          <div className="cart">
            <img src={logo} alt="" />
            <h3>React</h3>
            <p className="text-small mt-3">
              React is an open source JavaScript library used for desiging user
              interfaces.
            </p>
            <button>
              <TiStarOutline />
            </button>
          </div>
          {/* single cart  */}
          <div className="cart">
            <img src={logo} alt="" />
            <h3>React</h3>
            <p className="text-small mt-3">
              React is an open source JavaScript library used for desiging user
              interfaces.
            </p>
            <button>
              <TiStarOutline />
            </button>
          </div>
          {/* single cart  */}
          <div className="cart">
            <img src={logo} alt="" />
            <h3>React</h3>
            <p className="text-small mt-3">
              React is an open source JavaScript library used for desiging user
              interfaces.
            </p>
            <button>
              <TiStarOutline />
            </button>
          </div>
        </div>
      </div>
      {/* featured topics and popular topics */}
      <div className="featured-topics-tags">
        <div className="featured-topics">
          <h3>All featured topics</h3>
          <div className="featured-carts">
            <FeaturedTopicCart />
            <Divider />
            <FeaturedTopicCart />
            <Divider />
            <FeaturedTopicCart />
            <Divider />
            <FeaturedTopicCart />
            <Divider />
            <FeaturedTopicCart />
            <Divider />
            <FeaturedTopicCart />
            <Divider />
            <FeaturedTopicCart />
            <Divider />
            <FeaturedTopicCart />
            <Divider />
            <FeaturedTopicCart />
            <Divider />
            <FeaturedTopicCart />
          </div>
        </div>
        {/* popular tags  */}
        <div className="featured-tags">
          <p className="text-medium mb-3">Popular topics</p>
          <div className="tags">
            <Tag text={"react"} />
            <Tag text={"javascript"} />
            <Tag text={"python"} />
            <Tag text={"config"} />
            <Tag text={"tailwindcss"} />
            <Tag text={"typscript"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topics;

const FeaturedTopicCart = () => {
  return (
    <div className="cart flex-left mt-1 mb-1">
      <div className="image">
        <img src={logo} alt="" />
      </div>
      <div>
        <div className="flex-between">
          <h3>Ajax</h3>
          <ButtonIcon />
        </div>
        <p className="text-small mt-5">
          Ajax is a technique for creating interactive web applications.
        </p>
      </div>
    </div>
  );
};
