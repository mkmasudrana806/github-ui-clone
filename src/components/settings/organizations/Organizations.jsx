import "./organizations.scss";
import Divider from "../../utilityComponents/Divider";
import Button from "../../utilityComponents/buttons/Button";

const Organizations = () => {
  return (
    <div className="organizations">
      {/* organizations  */}
      <h3 className="text-large">Organizations</h3>
      <div className="border-primary mt-3 p-1">
        <div className="flex-between">
          <div className="flex-left">
            <div className="image">
              <img
                src="https://avatars.githubusercontent.com/u/88097931?v=4"
                alt=""
              />
            </div>
            <p className="text-normal text-color pointer">
              programming-hero-web
            </p>
            <div
              style={{ padding: "0px 10px", borderRadius: "50px" }}
              className="text-small border-primary"
            >
              Outside collaborator on 1 repository
            </div>
          </div>
          <button className="leave btn-primary">leave</button>
        </div>
      </div>

      {/* transform account */}
      <h3 className="text-large mt-40">Transform account</h3>
      <Divider />
      <div className="mt-1">
        <Button text="Turn mkmasudrana806 into an organization" />
      </div>
    </div>
  );
};

export default Organizations;
