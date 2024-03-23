import "./account.scss";
import Divider from "../../utilityComponents/Divider";
import Button from "../../utilityComponents/buttons/Button";
import { BsQuestionCircle } from "react-icons/bs";
import { SiPatreon } from "react-icons/si";
import SearchFieldLeftIcon from "../../forms/SearchFieldLeftIcon";
import { LuUser2 } from "react-icons/lu";

const Account = () => {
  return (
    <div className="account">
      {/* Jobs profile */}
      <div className="change-username">
        <h3 className="text-large">Change username</h3>
        <Divider />
        <p className="text-normal mt-1 mb-3">
          Changing your username can have{" "}
          <span className="text-color">unintended side effects.</span>
        </p>
        <Button text="Save jobs profile" />
        <p className="text-small flex-left mt-2">
          {" "}
          <BsQuestionCircle />
          Looking to manage account security settings? You can find them in the
          <span className="text-color">Password and authentication</span> page.
        </p>
      </div>

      {/* link patreon account */}
      <div className="patreon-account">
        <h3 className="text-large">Link Patreon account</h3>
        <Divider />
        <p className="text-normal mt-1 mb-3">
          Connect a Patreon account for{" "}
          <span className="text-color">@mkmasudrana806</span> to sponsor
          maintainers with. Get recognition on GitHub for sponsorships made on
          Patreon when the sponsored person has linked Patreon and GitHub, too,
          and has a public GitHub Sponsors profile.
        </p>
        <Button text="Connect with Patreon">
          <SiPatreon />
        </Button>
      </div>

      {/* export account data */}
      <div className="export-account">
        <h3 className="text-large">Export account data</h3>
        <Divider />
        <p className="text-normal mt-1 mb-3">
          Export all repositories and profile metadata for @mkmasudrana806.
          Exports will be available for 7 days.
        </p>
        <Button text="Start export" />
      </div>

      {/* successor settings */}
      <div className="successor-settings">
        <h3 className="text-large">Successor settings</h3>
        <Divider />
        <p className="text-small mt-1 mb-3">
          By clicking "Add Successor" below, I acknowledge that I am the owner
          of the @mkmasudrana806 account, and am authorizing GitHub to transfer
          content within that account to my GitHub Successor, designated below,
          in the event of my death. I understand that this appointment of a
          successor does not override legally binding next-of-kin rules or
          estate laws of any relevant jurisdiction, and does not create a
          binding will.{" "}
          <span className="text-color">
            Learn more about account successors.
          </span>
        </p>
      </div>

      {/* search by username, full name or email  */}
      <p className="mt-1">Search by username, full name, or email address</p>
      <div className="search-by-username">
        <div className="search">
          <input type="text" />
          <span className="start">
            <LuUser2 />
          </span>
        </div>
        <button>Add Successor</button>
      </div>

      <div className="border-primary p-1 mt-1">
        You have not designated a successor.
      </div>

      {/* delete account */}
      <div className="delete-account">
        <h3 className="text-large red">Delete account</h3>
        <Divider />
        <p className="text-normal mt-1 mb-3">
          Once you delete your account, there is no going back. Please be
          certain.
        </p>
        <div className="red">
          <Button text="Delete your account" />
        </div>
      </div>
    </div>
  );
};

export default Account;
