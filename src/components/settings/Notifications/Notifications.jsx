import "./notifications.scss";
import Divider from "../../utilityComponents/Divider";

const Notifications = () => {
  return (
    <div className="notifications">
      {/* notifications */}
      <h3 className="text-large">Notifications</h3>
      <Divider />

      {/* Default notifications email  */}
      <div className="border-primary p-1 mt-2">
        <p className="text-medium">Default notifications email</p>
        <p className="text-small mt-5">
          Choose where you'd like emails to be sent. You can add more email
          addresses. Use custom routes to specify different email addresses to
          be used for individual organizations.
        </p>
        <div className="flex-left mt-3">
          <select name="" id="" className="btn-primary w-440px">
            <option value="">Don't specify</option>
            <option value="">They/them</option>
            <option value="">She/her</option>
            <option value="">He/him</option>
          </select>
          <select name="" id="" className="btn-primary w-440px">
            <option value="">Don't specify</option>
            <option value="">They/them</option>
            <option value="">She/her</option>
            <option value="">He/him</option>
          </select>
        </div>
      </div>

      {/* Default notifications email  */}
      <div className="flex-between mt-1 switch">
        <div className="border-primary p-1">
          <p className="text-medium">Automatically watch repositories</p>
          <p className="text-small mt-5">
            When you're given push access to a repository, automatically receive
            notifications for it.
          </p>
        </div>
        <div className="border-primary p-1">
          <p className="text-medium">Automatically watch teams</p>
          <p className="text-small mt-5">
            Anytime you join a new team, you will automatically be subscribed to
            updates and receive notification when that team is @mentioned.
          </p>
        </div>
      </div>

      {/* subscriptions  */}
      <div className="border-primary mt-1 p-1">
        <p className="text-medium mb-1">Subscriptions</p>
        <Divider />
        <div>
          <p className="text-medium">Watching</p>
          <p className="text-small mt-5">
            Notifications for all repositories, teams, or conversations you're
            watching.{" "}
            <span className="text-color">View watched repositories.</span>
          </p>
          <button className="btn-primary mt-5 text-small mb-3">
            Notify me: <span>on GtiHub, Email</span>
          </button>
          <Divider />

          <p className="text-medium">Participating, @mentions and custom</p>
          <p className="text-small mt-5">
            Notifications for the conversations you are participating in, or if
            someone cites you with an @mention. Also for all activity when
            subscribed to specific events.
          </p>
          <button className="btn-primary mt-5 text-small mb-3">
            Notify me: <span>on GtiHub, Email</span>
          </button>
          <Divider />

          <p className="text-medium">Customize email updates</p>
          <p className="text-small mt-5">
            Choose which additional events you'll receive emails for when
            participating or watching.
          </p>
          <button className="btn-primary mt-5 text-small mb-3">
            Revies, Pushes, Comments
          </button>
          <Divider />

          <p className="text-medium mt-5">Ignored repositories</p>
          <p className="text-small mt-5">
            You'll never be notified.{" "}
            <span className="text-color">View ignored repositories</span>
          </p>
        </div>
      </div>

      {/* system  */}
      <div className="border-primary mt-1 p-1">
        <p className="text-medium mb-1">System</p>
        <Divider />
        <div>
          <p className="text-medium">Actions</p>
          <p className="text-small mt-5">
            Notifications for workflow runs on repositories set up with{" "}
            <span className="text-color">GitHub Actions.</span>
          </p>
          <button className="btn-primary mt-5 text-small mb-3">
            Notify me: <span>Email. (Failed workflows only)</span>
          </button>
          <Divider />

          <p className="text-medium">Dependabot alerts: New vulnerabilities</p>
          <p className="text-small mt-5">
            When you're given access to{" "}
            <span className="text-color">Dependabot alerts</span> automatically
            receive notifications when a new vulnerability is found in one of
            your dependencies.
          </p>
          <button className="btn-primary mt-5 text-small mb-3">
            Notify me: <span>on GitHub, Email, CLl</span>
          </button>
          <Divider />

          <p className="text-medium">Email weekly digest</p>
          <p className="text-small mt-5">
            Email a weekly summary summarizing alerts for up to 10 of your
            repositories.
          </p>
          <select className="btn-primary mt-3 mb-3">
            <option value="">
              <strong>Don't send</strong>
            </option>
            <option>
              <strong>Send weekly</strong>
            </option>
            <option>
              <strong>Send daily</strong>
            </option>
          </select>
          <Divider />

          <p className="text-medium mt-5">Ignored repositories</p>
          <p className="text-small mt-5">
            You'll never be notified.{" "}
            <span className="text-color">View ignored repositories</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Notifications;
