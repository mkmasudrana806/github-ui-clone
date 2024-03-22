/* eslint-disable react/prop-types */
import ExploreNavbar from "../ExploreNavbar";
import "./topics.scss";
import { TiStarOutline } from "react-icons/ti";
import Divider from "../../../../utilityComponents/Divider";
import ButtonIcon from "../../../../iconsButtons/ButtonIcon";
import TopicIntroCart from "./TopicIntroCart";
// data import from data folder
import { featuredTopics, topicsTntro, topics } from "./data/data";
import Tag from "../../../../utilityComponents/tags/Tag";

const Topics = () => {
  return (
    <div className="topics">
      {/* navbar  */}
      <div className="navbar">
        <ExploreNavbar />
      </div>

      {/* intro box  */}
      <TopicIntroCart intro={topicsTntro} />

      {/* topics carts  */}
      <div className="carts-topics  ">
        <div className="carts-container">
          {/* single cart  */}
          {topics.map((topic) => (
            <div key={topic.id} className="cart">
              <img src={topic.image} alt="" />
              <h3>{topic.name}</h3>
              <p className="text-small mt-3">{topic.description}</p>
              <button>
                <TiStarOutline />
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* featured topics and popular topics */}
      <div className="featured-topics-tags">
        {/* featured topics */}
        <div className="featured-topics">
          <h3>All featured topics</h3>
          <div className="featured-carts">
            {/* single featured cart  */}
            {featuredTopics.map((cart) => (
              <div key={cart.id}>
                <FeaturedTopicCart topic={cart} />
                <Divider />
              </div>
            ))}
          </div>
          <button className="read-more-btn text-normal mt-1">
            Load more...
          </button>
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

const FeaturedTopicCart = ({ topic }) => {
  const { title, description, logo } = topic;
  return (
    <div className="cart flex-left mt-1 mb-1">
      <div className="image">
        {logo ? <img src={logo} alt="" /> : <div className="no-logo">#</div>}
      </div>
      <div>
        <div className="flex-between">
          <h3>{title}</h3>
          <ButtonIcon Img={<TiStarOutline />} />
        </div>
        <p className="text-small mt-5">{description}</p>
      </div>
    </div>
  );
};
