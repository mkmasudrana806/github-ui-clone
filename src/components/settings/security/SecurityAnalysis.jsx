import "./securityAnalysis.scss";
import Divider from "../../utilityComponents/Divider";
import Button from "../../utilityComponents/buttons/Button";

const SecurityAnalysis = () => {
  return (
    <div className="security-analysis">
      {/* Code security and analysis */}
      <h1 className="text-large">Code security and analysis</h1>
      <Divider />
      <p className="text-normal mt-1">
        Security and analysis features help keep your repositories secure and
        updated. By enabling these features, you're granting us permission to
        perform read-only analysis on your repositories.
      </p>

      {/* User */}
      <h1 className="text-large mt-40">User</h1>
      <p className="text-normal text-muted">
        Security and analysis features help keep you secure and updated,
        wherever you are.
      </p>
      <Divider />
      <div className="mt-40 flex-between">
        <div>
          <h4 className="text-bold">Push protection for yourself</h4>
          <p className="text-normal mt-4">
            Block commits that contain{" "}
            <span className="text-color underline">supported secrets</span>{" "}
            across all public repositories on GitHub.
          </p>
        </div>
        <button className="red-btn">Disable</button>
      </div>

      {/* Repositories */}
      <h1 className="text-large mt-40 text-medium">Repositories</h1>
      <p className="text-normal text-muted">
        Security and analysis features help keep your repositories secure and
        updated.
      </p>
      <Divider />

      {/* Private vulnerability reporting  */}
      <h5 className="mt-40 text-medium">Private vulnerability reporting</h5>
      <p className="text-normal mt-5">
        Allow your community to privately report potential security
        vulnerabilities to maintainers and repository owners.{" "}
        <span className="text-color underline">
          Learn more about private vulnerability reporting.
        </span>
      </p>
      <div className="mt-4 flex-left">
        <button className="red-btn">Disable all</button>
        <Button text="Enable all" />
      </div>
      <div className="checkbox mt-4 text-bold mb-1">
        <input type="checkbox" name="" id="" />
        <p>Automatically enable for new public repositories</p>
      </div>
      <Divider />

      {/* Dependency graph  */}
      <h5 className="mt-40 text-medium">Dependency graph</h5>
      <p className="text-normal mt-5">Understand your dependencies.</p>
      <div className="mt-4 flex-left">
        <button className="red-btn">Disable all</button>
        <Button text="Enable all" />
      </div>
      <div className="checkbox mt-4 text-bold mb-1">
        <input type="checkbox" name="" id="" />
        <p>Automatically enable for new public repositories</p>
      </div>
      <Divider />

      {/* Dependabot  */}
      <h5 className="mt-40 text-medium">Dependabot</h5>
      <p className="text-normal mt-5">
        Keep your dependencies secure and up-to-date.{" "}
        <span className="text-color underline">
          Learn more about Dependabot.
        </span>
        .
      </p>

      {/* Dependabot alerts  */}
      <h5 className="mt-40 text-medium">Dependabot alerts</h5>
      <p className="text-normal mt-5">
        Receive alerts for vulnerabilities that affect your dependencies and
        manually generate Dependabot pull requests to resolve these
        vulnerabilities.{" "}
        <span className="text-color underline">
          Configure alert notifications
        </span>
        .
      </p>
      <div className="mt-4 flex-left">
        <button className="red-btn">Disable all</button>
        <Button text="Enable all" />
      </div>
      <div className="checkbox mt-4 text-bold mb-1">
        <input type="checkbox" name="" id="" />
        <p>Automatically enable for new public repositories</p>
      </div>

      {/* Dependabot security updates
       */}
      <h5 className="mt-40 text-medium">Dependabot security updates</h5>
      <p className="text-normal mt-5">
        Enabling this option will result in Dependabot automatically attempting
        to open pull requests to resolve every open Dependabot alert with an
        available patch.
      </p>
      <div className="mt-4 flex-left">
        <button className="red-btn">Disable all</button>
        <Button text="Enable all" />
      </div>
      <div className="checkbox mt-4 text-bold mb-1">
        <input type="checkbox" name="" id="" />
        <p>Automatically enable for new public repositories</p>
      </div>

      {/* Grouped security updates
       */}
      <h5 className="mt-40 text-medium">Grouped security updates</h5>
      <p className="text-normal mt-5">
        Groups all available updates that resolve a Dependabot alert into one
        pull request (per package manager and directory of requirement
        manifests). This option may be overridden by group rules specified in
        dependabot.yml - learn more here
      </p>
      <div className="mt-4 flex-left">
        <button className="red-btn">Disable all</button>
        <Button text="Enable all" />
      </div>
      <div className="checkbox mt-4 text-bold mb-1">
        <input type="checkbox" name="" id="" />
        <p>Automatically enable for new public repositories</p>
      </div>

      {/* Dependabot on Actions runners

       */}
      <h5 className="mt-40 text-medium">Dependabot on Actions runners</h5>
      <p className="text-normal mt-5">
        Run Dependabot security and version updates on Actions runners.
      </p>
      <div className="mt-4 flex-left">
        <button className="red-btn">Disable all</button>
        <Button text="Enable all" />
      </div>
    </div>
  );
};

export default SecurityAnalysis;
