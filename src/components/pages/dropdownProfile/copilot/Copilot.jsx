import "./copilot.scss";
import Button from "../../../buttons/Button";
import Divider from "../../../utilityComponents/Divider";
import copilotLogo from "../../../../assets/copilot.png";
import ImageCircle from "../../../image/ImageCircle";

const Copilot = () => {
  return (
    <div className="copilot">
      <div className="hero">
        <div className="img-copilot">
          <ImageCircle size={80} Img={copilotLogo} />
        </div>
        <h1 className="text-muted mt-1">GitHub Copilot Individual</h1>
        <p className="text-muted mt-3">
          The world's most widely adopted AI developer tool.
        </p>
      </div>
      <div className="signup-box border-primary p-1 ">
        <h1 className="text-large">Start your 30-day free trial</h1>
        <p className="text-muted text-gray mt-1">
          GitHub Copilot is powered by generative AI to help you code faster and
          happier!
        </p>
        <ul className="text-gray mt-1">
          <li>
            Get code suggestions as you type in more than a dozen coding
            languages, including Python, JavaScript, TypeScript, Go, and Ruby
          </li>
          <li className="mt-2">
            Chat with Copilot for assistance on a wide variety of scenarios,
            such as project-specific code explanations or help with debugging
          </li>
          <li className="mt-2">
            Plugs into IDEs, including VS Code, Visual Studio, JetBrains IDEs,
            and Neovim
          </li>
          <li className="mt-2">
            Cancel anytime before the trial ends to avoid getting billed
          </li>
        </ul>
        <h1 className="text-large mt-1">Pay frequency after trial</h1>
        {/* plans boxes  */}
        <div className="plans mt-1 flex-between">
          <div className="border-primary p-1">
            <div className="flex-left">
              <input type="radio" name="" id="monthly" />
              <p>Monthly plan</p>
            </div>
            <h2 className="mt-3">
              $10 <span className="text-small">USD /month</span>
            </h2>
          </div>
          <div className="border-primary p-1">
            <div className="flex-left">
              <input type="radio" name="" id="yearly" />
              <p>
                Yearly plan <span className="text-color">save 20%!</span>
              </p>
            </div>
            <h2 className="mt-3">
              $100 <span className="text-small">USD /month</span>
            </h2>
          </div>
        </div>

        <Button color="green" text={"Get access to GitHub copilot"} />
        <p className="text-gray mt-2">Next: Confirm your payment details </p>
        <Divider />
        <p className="text-small">
          GitHub Copilot is free for maintainers of popular open source software
          on GitHub and verified students. Check out the{" "}
          <span className="text-color pointer">free use FAQ</span> for more
          details.
        </p>
      </div>
    </div>
  );
};

export default Copilot;
