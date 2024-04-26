import Divider from "../../utilityComponents/Divider";
import Button from "../../utilityComponents/buttons/Button";

const AuthorizedOAuthApps = () => {
  return (
    <div className="mt-1">
      <div className="flex-between">
        <p className="text-normal mb-1">
          You have granted 3 applications access to your account.
        </p>
        <div>
          <Button text="Revoke all" />
        </div>
      </div>

      {/* Git Credential Manager  */}
      <Divider />
      <div className="flex-left mb-1">
        <img
          style={{ height: "56px", width: "56px", borderRadius: "50px" }}
          src="https://avatars.githubusercontent.com/in/68187?s=60&u=9d307562c01daa2c9997670c389656fb50160405&v=4"
          alt="Git Credential Manager logo"
        />
        <div className="w-full">
          <div className="flex-between">
            <h5 className="text-medium text-color pointer ">
              Git Credential Manager
            </h5>
            <Button text="Configure" />
          </div>
          <p className="text-small mt-5">
            Last used within the last week · Owned by{" "}
            <span className="text-color underline">git-ecosystem</span>
          </p>
        </div>
      </div>

      {/* GitHub for VS Code  */}
      <Divider />

      <div className="flex-left">
        <img
          style={{ height: "56px", width: "56px", borderRadius: "50px" }}
          src="https://avatars.githubusercontent.com/in/13473?s=30&u=a8c6e35a15f833f7487d4a6abdbab66ce52041b0&v=4"
          alt="GitHub for VS Code logo"
        />
        <div className="w-full">
          <div className="flex-between">
            <h5 className="text-medium text-color pointer ">
              GitHub for VS Code
            </h5>
            <Button text="Configure" />
          </div>
          <p className="text-small mt-5">
            Last used within the last 5 weeks · Owned by
            <span className="text-color underline"> GitHub for VS Code</span>
          </p>
        </div>
      </div>

      {/* WakaTime  */}
      <Divider />

      <div className="flex-left">
        <img
          style={{ height: "56px", width: "56px", borderRadius: "50px" }}
          src="https://avatars.githubusercontent.com/in/8329?s=30&u=cd19897a18dc3e7a2b0b8be2c6ce135b726c5772&v=4"
          alt="WakaTime logo"
        />
        <div className="w-full">
          <div className="flex-between">
            <h5 className="text-medium text-color pointer ">WakaTime</h5>
            <Button text="Configure" />
          </div>
          <p className="text-small mt-5">
            Last used within the last 2 months · Owned by
            <span className="text-color underline"> WakaTime</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default AuthorizedOAuthApps;
