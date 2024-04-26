import Divider from "../../utilityComponents/Divider";

const Reminders = () => {
  return (
    <div>
      <h1 className="text-large">Scheduled reminders</h1>
      <Divider />

      <p className="text-normal mt-1">
        Reminders allow you to push certain events to authorized instances of
        Microsoft Teams or Slack.
      </p>

      <div className="p-1 mt-1 border-primary text-center">No reminders</div>
    </div>
  );
};

export default Reminders;
