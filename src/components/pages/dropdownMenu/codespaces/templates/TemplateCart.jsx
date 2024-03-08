import githubLogo from "../../../../../assets/logo.png";
import Button from "../../../../buttons/Button";
import ImageCircle from "../../../../image/ImageCircle";
import "./templates.scss";

const TemplateCart = () => {
  return (
    <div className="template-cart">
      <div className="flex-between">
        <div>
          <h4>.NET</h4>
          <span className="text-small">By github</span>
        </div>
        <ImageCircle size={56} Img={githubLogo} />
      </div>
      <p className="text-small mt-4 mb-1 details">
        A full-stack web application template written in C# leveraging the power
        of .NET 8.
      </p>
      <Button text="Use this template" />
    </div>
  );
};

export default TemplateCart;
