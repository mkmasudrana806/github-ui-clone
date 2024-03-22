import "./packages.scss";
import logo from "../../../../../assets/lean.png";
import ImageCircle from "../../../../utilityComponents/image/ImageCircle";
import Button from "../../../../utilityComponents/buttons/Button";

const Packages = () => {
  return (
    <div className="packages-page">
      {/* get started with github packages  */}
      <div className="get-started p-1">
        <ImageCircle Img={logo} size={56} />
        <h1 className="mt-3">Get started with GitHub Packages</h1>
        <p className="text-small mt-3">
          Safely publish packages, store your packages alongside your code, and
          share your packages privately with your team.
        </p>
      </div>
      <p className="text-muted choose">Choose a registry</p>
      <div className="packages">
        <PackageCart />
        <PackageCart />
        <PackageCart />
        <PackageCart />
        <PackageCart />
        <PackageCart />
      </div>
    </div>
  );
};

export default Packages;

// package cart
const PackageCart = () => {
  return (
    <div className="package-cart">
      <div className="flex-left">
        <ImageCircle size={20} Img={logo} />
        <p className="text-large">Docker</p>
      </div>
      <p className="text-small mt-4 mb-1 details">
        A full-stack web application template written in C# leveraging the power
        of .NET 8.
      </p>
      <Button text="Use this template" />
    </div>
  );
};
