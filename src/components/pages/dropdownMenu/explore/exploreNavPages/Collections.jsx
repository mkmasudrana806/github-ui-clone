/* eslint-disable react/prop-types */
import ExploreNavbar from "../ExploreNavbar";
import "./collections.scss";
import { TiStarOutline } from "react-icons/ti";
import Divider from "../../../../utilityComponents/Divider";
import TopicIntroCart from "./TopicIntroCart";
// data import from data folder
import {
  featuredCollections,
  collectionsTntro,
  collections,
} from "./data/data";

const Collections = () => {
  return (
    <div className="collections">
      {/* navbar  */}
      <div className="navbar">
        <ExploreNavbar />
      </div>

      {/* intro box  */}
      <TopicIntroCart intro={collectionsTntro} />

      {/* collections carts  */}
      <div className="carts-collections  ">
        <div className="carts-container">
          {/* single cart  */}
          {collections.map((collection) => (
            <div key={collection.id} className="cart">
              {collection.image ? (
                <img src={collection.image} alt="" />
              ) : (
                <div className="no-image">#</div>
              )}
              <h3>{collection.name}</h3>
              <p className="text-small mt-3">{collection.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* featured collections*/}
      <div className="featured-collections">
        {/* featured collections */}
        <div className="featured-collections">
          <div className="featured-carts">
            {/* single featured cart  */}
            {featuredCollections.map((cart) => (
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
      </div>
    </div>
  );
};

export default Collections;

const FeaturedTopicCart = ({ topic }) => {
  const { title, description, logo } = topic;
  return (
    <div className="cart flex-left mt-1 mb-1">
      <div className="image">
        {logo ? <img src={logo} alt="" /> : <div className="no-logo">#</div>}
      </div>
      <div>
        <h3>{title}</h3>
        <p className="text-small mt-5">{description}</p>
      </div>
    </div>
  );
};
