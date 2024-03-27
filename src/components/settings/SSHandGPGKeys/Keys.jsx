import Divider from "../../utilityComponents/Divider";
import "./keys.scss";

const Keys = () => {
  return (
    <div className="keys">
      {/* SSH keys  */}
      <h3 className="text-large">SSH Keys</h3>
      <Divider />

      <p className="text-normal mt-1">
        There are no SSH keys associated with your account.
      </p>
      <p className="text-normal mt-3">
        Check out our guide to{" "}
        <span className="text-color">connecting to GitHub using SSH keys</span>{" "}
        or troubleshoot <span className="text-color">common SSH problems.</span>
      </p>

      {/* GPG keys  */}
      <h3 className="text-large mt-40">GPG Keys</h3>
      <Divider />
      <p className="text-normal mt-1">
        There are no GPG keys associated with your account.
      </p>
      <p className="text-small mt-3">
        Learn how to{" "}
        <span className="text-color">
          generate a GPG key and add it to your account.
        </span>
      </p>

      {/* Vigilant mode  */}
      <h3 className="text-large mt-40">Vigilant mode</h3>
      <Divider />

      <div className="flex-left ">
        <input className="mb-1" type="checkbox" checked name="" id="" />
        <div>
          <p className="text-normal mt-1">
            Flag unsigned commits as unverified
          </p>
          <p className="text-small mt-5">
            This will include any commit attributed to your account but not
            signed with your GPG or S/MIME key. Note that this will include your
            existing unsigned commits.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Keys;
