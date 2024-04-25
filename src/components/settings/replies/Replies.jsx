import React from "react";
import Divider from "../../utilityComponents/Divider";
import InputField from "../../forms/InputField";
const Replies = () => {
  return (
    <div>
      <h1 className="text-large">Saved replies</h1>
      <Divider />
      <p className="text-normal mt-2">
        Saved replies are re-usable text snippets that you can use throughout
        GitHub comment fields. Saved replies can save you time if you’re often
        typing similar responses.{" "}
        <span className="text-color underline">
          Learn more about working with saved replies.
        </span>
      </p>
      <p className="text-center text-small mt-1">no saved replies yet</p>

      <h1 className="text-large">Add a saved reply</h1>
      <Divider />
      <p className="text-normal mt-2 mb-3">Sved reply title</p>
      <InputField size="100%" text="Add a short title to your reply" />
    </div>
  );
};

export default Replies;
