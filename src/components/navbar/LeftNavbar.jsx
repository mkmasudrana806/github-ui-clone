import InputField from "../forms/InputField";
import ButtonIcon from "../iconsButtons/ButtonIcon";
import "./leftNavbar.scss";
import ButtonImg from "../iconsButtons/ButtonImg";

const LeftNavbar = () => {
  return (
    <aside className="left-home">
      <div className="flex-between">
        <h5 className="text-bold">Top Repositories</h5>
        <span className="text-medium">
          <ButtonIcon />
        </span>
      </div>
      <div className="mt-4">
        <InputField size="100%" text="Find a repository..." />
      </div>
      <div className="top-repos mt-2">
        <ButtonImg text="mkmasudrana806/Redux" />
        <ButtonImg text="mkmasudrana806/Job-seeker-career-hub" />
        <ButtonImg text="mkmasudrana806/JavaScript-Mastering" />
        <ButtonImg text="mkmasudrana806/learn-programming-client-side" />
        <ButtonImg text="mkmasudrana806/modern-ui-bank-app" />
        <ButtonImg text="mkmasudrana806/nodejs-pratice" />
        <ButtonImg text="mkmasudrana806/multi-filtering-react-app" />
      </div>
      <p className="text-small mt-1 pointer">Show more</p>

      <p className="text-bold mt-1">Recent activity</p>
      <div className="recent-activity text-small mt-4">
        when you take actions across GitHub, we'll provide links to that
        activity here.
      </div>
    </aside>
  );
};

export default LeftNavbar;
