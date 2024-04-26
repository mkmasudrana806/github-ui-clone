import Divider from "../../utilityComponents/Divider";
import Button from "../../utilityComponents/buttons/Button";
const InstalledApps = () => {
  return (
    <div className="mt-1">
      <p className="text-normal   mb-1">
        GitHub Apps augment and extend your workflows on GitHub with commercial,
        open source, and homegrown tools.
      </p>

      {/* netlify  */}
      <Divider />
      <div className="flex-between mb-1">
        <div className="flex-left">
          <img
            style={{ height: "56px", width: "56px", borderRadius: "50px" }}
            src="https://avatars.githubusercontent.com/in/13473?s=30&u=a8c6e35a15f833f7487d4a6abdbab66ce52041b0&v=4"
            alt="Netlify logo"
          />
          <h5>Netlify</h5>
        </div>
        <Button text="Configure" />
      </div>

      {/* vercel  */}
      <Divider />
      <div className="flex-between">
        <div className="flex-left">
          <img
            style={{ height: "56px", width: "56px", borderRadius: "50px" }}
            src="https://avatars.githubusercontent.com/in/8329?s=30&u=cd19897a18dc3e7a2b0b8be2c6ce135b726c5772&v=4"
            alt="Vercel logo"
          />
          <h5>Vercel</h5>
        </div>
        <Button text="Configure" />
      </div>
    </div>
  );
};

export default InstalledApps;
