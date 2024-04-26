import Divider from "../../utilityComponents/Divider";
import Button from "../../utilityComponents/buttons/Button";
const AuthorizedGitHubApps = () => {
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

      {/* github classroom  */}
      <Divider />
      <div className="flex-left mb-1">
        <img
          style={{ height: "56px", width: "56px", borderRadius: "50px" }}
          src="https://avatars.githubusercontent.com/in/68187?s=60&u=9d307562c01daa2c9997670c389656fb50160405&v=4"
          alt="GitHub Classroom logo"
        />
        <div className="w-full">
          <div className="flex-between">
            <h5 className="text-medium text-color pointer ">
              GitHub Classroom
            </h5>
            <Button text="Configure" />
          </div>
          <p className="text-small mt-5">
            Last used within the last 9 months · Owned by{" "}
            <span className="text-color underline">github</span>
          </p>
        </div>
      </div>

      {/* netlify  */}
      <Divider />

      <div className="flex-left">
        <img
          style={{ height: "56px", width: "56px", borderRadius: "50px" }}
          src="https://avatars.githubusercontent.com/in/13473?s=30&u=a8c6e35a15f833f7487d4a6abdbab66ce52041b0&v=4"
          alt="Netlify logo"
        />
        <div className="w-full">
          <div className="flex-between">
            <h5 className="text-medium text-color pointer ">Netlify</h5>
            <Button text="Configure" />
          </div>
          <p className="text-small mt-5">
            Last used within the last 3 months · Owned by
            <span className="text-color underline"> netlify</span>
          </p>
        </div>
      </div>

      {/* vercel  */}
      <Divider />

      <div className="flex-left">
        <img
          style={{ height: "56px", width: "56px", borderRadius: "50px" }}
          src="https://avatars.githubusercontent.com/in/8329?s=30&u=cd19897a18dc3e7a2b0b8be2c6ce135b726c5772&v=4"
          alt="Vercel logo"
        />
        <div className="w-full">
          <div className="flex-between">
            <h5 className="text-medium text-color pointer ">Vercel</h5>
            <Button text="Configure" />
          </div>
          <p className="text-small mt-5">
            Last used within the last 8 months · Owned by
            <span className="text-color underline"> vercel</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default AuthorizedGitHubApps;
