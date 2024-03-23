import "./appearance.scss";
import Divider from "../../utilityComponents/Divider";
import ThemeMode from "./themeMode/ThemeMode";
import { IoMdCheckmark } from "react-icons/io";

const Appearance = () => {
  return (
    <div className="appearance">
      {/* theme preferences */}
      <div className="">
        <div className="flex-between">
          <h3 className="text-large">Theme preferences</h3>
          <IoMdCheckmark color="green" />
        </div>
        <Divider />
        <p className="text-normal mt-1">
          Choose how GitHub looks to you. Select a single theme, or sync with
          your system and automatically switch between day and night themes.
        </p>
      </div>

      {/* theme mode carts*/}
      <p className="text-bold mt-1">Theme mode</p>
      <div className="flex-left">
        <select name="" id="" className="btn-primary  mt-5">
          <option value="">Synce with system</option>
          <option value="">single theme</option>
        </select>
        <p className="text-small">
          GitHub theme will match your system active settings
        </p>
      </div>
      <ThemeMode />

      {/* Emoji skin tone preference */}
      <div className="mt-40">
        <div className="flex-between">
          <h3 className="text-large">Emoji skin tone preference</h3>
          <IoMdCheckmark color="green" />
        </div>
        <Divider />
        <p className="text-normal mt-2">Preferred default emoji skin tone</p>
      </div>

      {/* tab size preference */}
      <div className="mt-40">
        <h3 className="text-large">Tab size preference</h3>
        <Divider />
        <p className="text-normal mt-2">
          Choose the number of spaces a tab is equal to when rendering code
        </p>
        <select name="" id="" className="btn-primary  mt-5">
          <option value="">1</option>
          <option value="">2</option>
          <option value="">3</option>
          <option value="">4</option>
          <option value="">5</option>
          <option value="">6</option>
          <option value="">7</option>
          <option selected value="">
            8 (Default)
          </option>
          <option value="">9</option>
          <option value="">10</option>
          <option value="">11</option>
          <option value="">12</option>
        </select>
      </div>

      {/* Markdown editor preference */}
      <div className="mt-40">
        <h3 className="text-large">Markdown editor font preference</h3>
        <Divider />
        <p className="text-small mt-2">
          Font preference for plain text editors that support Markdown styling
          (e.g. pull request and issue descriptions, comments.)
        </p>

        <div className="flex-left mt-5">
          <input type="checkbox" name="" id="" />
          <p className="text-normal">
            {" "}
            Use a fixed-width (monospace) font when editing Markdown
          </p>
        </div>
      </div>
    </div>
  );
};

export default Appearance;
