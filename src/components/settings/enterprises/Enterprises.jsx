import "./enterprises.scss";
import CenteredContent from "../../utilityComponents/centeredContent/CenteredContent";
import { RiPlanetLine } from "react-icons/ri";
import Button from "../../utilityComponents/buttons/Button";

const Enterprises = () => {
  return (
    <div>
      <h3 className="text-large mb-3">Enterprises</h3>

      <CenteredContent className={"border-primary mt-2"}>
        <RiPlanetLine color="gray" size={30} />
        <h3>You don't have any enterprises</h3>
        <p className="text-medium text-muted">
          Designed for businesses or teams who collaborate on GitHub.com
        </p>
        <Button color="green" text="Start free trial" />
        <p className="text-normal text-color">Learn more about enterprises</p>
      </CenteredContent>
    </div>
  );
};

export default Enterprises;
