import Divider from "../../utilityComponents/Divider";
import Button from "../../utilityComponents/buttons/Button";
import Tag from "../../utilityComponents/tags/Tag";
const Copilot = () => {
  return (
    <div>
      <h1 className="text-large">GitHub Copilot</h1>
      <Divider />
      <div className="mt-1 p-1 border-primary flex-between">
        <div>
          <h1>Your AI Pair Programmer</h1>
          <p className="text-small mt-4">
            Trained on billions of lines of code,{" "}
            <span className="text-color underline">GitHub Copilot</span> turns
            natural language prompts into coding suggestions across dozens of
            languages.
          </p>

          <div className="flex-left mt-1">
            <Button text="Start free trial" />
            <p className="text-small">After that $10/month</p>
          </div>
        </div>
      </div>
      {/* Get Copilot from an organization */}
      <h1 className="text-large mt-1">Get Copilot from an organization</h1>
      <Divider />
      <p className="text-normal mt-2">
        Organizations can provide their members (including you) and their teams
        access to GitHub Copilot.{" "}
        <span className="text-color underline pointer">
          Organizations owned by enterprise accounts
        </span>{" "}
        are not currently listed.
      </p>

      <div className="p-1 border-primary mt-2 flex-between">
        <div>
          <div className="flex-left">
            <p className="text-bold">programming-hero-web-course2</p>
            <p className="text-small border-primary">
              Outside collaborator on 1 repository
            </p>
          </div>
          <p className="text-small mt-4 mb-1">
            Admins have enabled Copilot for this organization, but you don’t
            have access.
          </p>
        </div>
        <Button text="Ask admin for access" />
      </div>
    </div>
  );
};

export default Copilot;
