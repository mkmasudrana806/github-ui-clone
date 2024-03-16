import "./sponsorsContainer.scss";
import { IoMdArrowDropdown } from "react-icons/io";
import { TiHeartOutline } from "react-icons/ti";
import Divider from "../../../../../utilityComponents/Divider";
import { FaAngleLeft } from "react-icons/fa6";
import IconWithText from "../../../../../iconsButtons/IconWithText";
import { FaAngleRight } from "react-icons/fa";
import ImageCircle from "../../../../../image/ImageCircle";
import ButtonIcon from "../../../../../iconsButtons/ButtonIcon";

const SponsorsContainers = () => {
  return (
    <div className="left">
      {/* most viewed button  */}
      <div className="most-viewed flex-between">
        <div>
          <h3>
            <span className="text-muted">124</span> developers who maintain your
            dependencies
          </h3>
          <p className="text-small mt-5">
            Download your <span className="text-color">results as CSV</span>
          </p>
        </div>
        <button className="btn-primary">
          Most used <IoMdArrowDropdown />{" "}
        </button>
      </div>
      {/* get started button  */}
      <div className="get-started border-primary mt-1 flex-between">
        <p className="text-normal flex-left">
          <TiHeartOutline />
          <strong>Bulk Sponsor </strong>
          Sponsor multiple maintainers in one easy transaction.
        </p>
        <button>Get Started</button>
      </div>
      {/* sponsors carts  */}
      <div className="sponsors-container mt-1 border-primary">
        {Array.from({ length: 6 }).map((_, index) => {
          return index !== 5 ? (
            <div key={index}>
              <SponsorCart Img="https://avatars.githubusercontent.com/u/170270?v=4" />
              <Divider />
            </div>
          ) : (
            <SponsorCart
              key={index}
              Img="https://avatars.githubusercontent.com/u/170270?v=4"
            />
          );
        })}
      </div>

      {/* paginations */}
      <div className="paginations mt-1">
        <div className="btns-container flex-left">
          <IconWithText text={"Previous"} icon={<FaAngleLeft />} />
          <div className="btns">
            <button>1</button>
            <button className="active">2</button>
            <button>...</button>
            <button>13</button>
            <button>14</button>
          </div>
          <button className="text-normal flex-left pointer next">
            Next <FaAngleRight />{" "}
          </button>
        </div>
      </div>
    </div>
  );
};

export default SponsorsContainers;

const SponsorCart = ({ Img }) => {
  return (
    <div className="sponsor-cart">
      <p className="flex-left text-normal">
        <TiHeartOutline /> Your depend on 133 repositories they own or maintain
      </p>
      <div className="flex-between mt-5">
        <div className="flex-left">
          <ImageCircle size={60} Img={Img} />
          <div>
            <h3 className="pointer">sindresorhus</h3>
            <p className="text-small">
              workos and 267 others sponsor, including 3 organizations
            </p>
          </div>
        </div>
        <ButtonIcon Img={<TiHeartOutline />} text="Sponsor" />
      </div>
    </div>
  );
};
