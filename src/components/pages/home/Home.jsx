import LeftNavbar from "../../navbar/LeftNavbar";
import RightNavbar from "../../navbar/RightNavbar";
import "./home.scss";

const Home = () => {
  return (
    <div className="home-container">
      <LeftNavbar />
      <RightNavbar />
    </div>
  );
};

export default Home;
