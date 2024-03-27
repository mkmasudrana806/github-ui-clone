import "./sessions.scss";
import Divider from "../../utilityComponents/Divider";
import { FiMonitor } from "react-icons/fi";
import { FaCircle } from "react-icons/fa";

const Sessions = () => {
  return (
    <div className="sessions">
      {/* web sessions  */}
      <h3 className="text-large">Web sessions</h3>
      <Divider />

      <p className="text-normal mt-1 mb-3">
        This is a list of devices that have logged into your account. Revoke any
        sessions that you do not recognize.
      </p>

      <div className="history">
        <div className="flex-between">
          <div>
            <FaCircle size={10} color="green" />
            <FiMonitor size={32} color="gray" />
            <div>
              <p className="text-normal">Kanchan 103.159.255.1</p>
              <span className="text-small">Your current session</span>
            </div>
          </div>
          <button>see more</button>
        </div>
        <p className="text-normal mt-5">Seen in BD</p>
      </div>

      {/* github mobile  sessions  */}
      <h3 className="text-large mt-40">GitHub mobile sessions</h3>
      <Divider />
      <p className="text-normal mt-1">
        GitHub Mobile can be used to verify your identity when signing in from a
        new device and as a two-factor authentication method.{" "}
        <span className="text-color">
          Learn more about authentication with GitHub Mobile.
        </span>
      </p>
      <p className="text-normal mt-5">
        To get started, install GitHub Mobile for{" "}
        <span className="text-color">iOS</span> or{" "}
        <span className="text-color">Android</span> and sign in to your account.
      </p>
    </div>
  );
};

export default Sessions;
