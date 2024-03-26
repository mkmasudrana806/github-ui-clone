import Divider from "../../utilityComponents/Divider";
import Button from "../../utilityComponents/buttons/Button";
import "./emails.scss";
import { MdDeleteOutline } from "react-icons/md";
import InputField from "../../forms/InputField";

const Emails = () => {
  return (
    <div className="emails">
      {/* Emails title */}
      <h3 className="text-large">Emails</h3>
      <Divider />

      <div className="border-primary p-1 mt-2">
        <div className="flex-between">
          <p className="text-medium">
            mkmasudrana806@gmail.com – <span className="primary">Primary</span>
          </p>
          <div className="icon-border">
            <MdDeleteOutline />
          </div>
        </div>
        <p className="text-small mt-5">
          This email will be used for account-related notifications and can also
          be used for password resets.
        </p>

        <ul className="text-small">
          <li className="mt-4">
            Not visible in emails This email will not be used as the 'from'
            address for web-based Git operations, e.g., edits and merges. We
            will instead use 86706671+mkmasudrana806@users.noreply.github.com.
          </li>
          <li className="mt-4">
            Receives notifications This email address is the default used for
            GitHub notifications, i.e., replies to issues, pull requests, etc.
          </li>
        </ul>
      </div>

      {/* add email address  */}
      <p className="text-bold mt-1">Add email address</p>
      <div className="flex-left mt-5">
        <InputField />
        <Button text="Add" />
      </div>
      <Divider />

      {/* primary email address  */}
      <p className="text-bold mt-1">Primary email address</p>
      <p className="text-normal mt-3">
        Because you have email privacy enabled, mkmasudrana806@gmail.com will be
        used for account-related notifications as well as password resets.
        86706671.{" "}
        <span className="text-small-white">
          +mkmasudrana806@users.noreply.github.com
        </span>{" "}
        will be used for web-based Git operations, e.g., edits and merges.
      </p>
      <div className="flex-left">
        <select className="btn-primary mt-3 mb-3">
          <option value="">mkmasudrana806@gmail.com</option>
        </select>
        <Button text="Save" />
      </div>
      <Divider />

      {/* backup email address  */}
      <p className="text-bold mt-1">Backup email address</p>
      <p className="text-normal mt-3">
        Your backup GitHub email address will be used as an additional
        destination for security-relevant account notifications and can also be
        used for password resets.
      </p>
      <div className="flex-between">
        <select className="btn-primary mt-3 mb-3">
          <option value="">Allow all verified emails</option>
          <option value="">Only allow primary email</option>
        </select>
        <Button text="Save" />
      </div>
      <p className="text-small">
        Please add a verified email, in addition to your primary email, in order
        to choose a backup email address.
      </p>
      <Divider />

      <div className="flex-left">
        <input className="mb-3" type="checkbox" checked name="" id="" />
        <div className="mt-1">
          <p className="text-normal">Keep my email addresses private</p>
          <p className="text-small">
            We’ll remove your public profile email and use
            86706671+mkmasudrana806@users.noreply.github.com when performing
            web-based Git operations (e.g. edits and merges) and sending email
            on your behalf. If you want command line Git operations to use your
            private email you must set your email in Git. Previously authored
            commits associated with a public email will remain public.
          </p>
        </div>
      </div>
      <div className="flex-left">
        <input className="mb-3" type="checkbox" checked name="" id="" />
        <div className="mt-1">
          <p className="text-normal">
            Block command line pushes that expose my email
          </p>
          <p className="text-small">
            When you push to GitHub, we’ll check the most recent commit. If the
            author email on that commit is a private email on your GitHub
            account, we will block the push and warn you about exposing your
            private email.
          </p>
        </div>
      </div>

      {/* email preferences  */}
      <h1 className="mt-40 text-large">Email preferences</h1>
      <p className="text-small mt-5">
        Subscriptions through our various marketing platforms. Each email
        address has its own subscriptions.
      </p>
      <Divider />

      <div className="border-primary flex-between mt-2 manage">
        <p className="text-normal">mkmasudrana806@gmail.com</p>
        <button className="btn-primary text-normal">manage</button>
      </div>
    </div>
  );
};

export default Emails;
