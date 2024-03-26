import Divider from "../../utilityComponents/Divider";
import "./accessibility.scss";
import Button from "../../utilityComponents/buttons/Button";

const Accessibility = () => {
  return (
    <div className="accessibility">
      {/* accessibility */}
      <h3 className="text-large">Accessibility</h3>
      <Divider />
      <h3>Keyboard shortcuts</h3>
      <p className="text-medium mt-3">General</p>

      {/* general keys  */}
      <div className="flex-left">
        <input className="mb-3" type="checkbox" checked name="" id="" />
        <div className="mt-1">
          <p className="text-normal">Character keys</p>
          <p className="text-small">
            Enable <span className="text-color">GitHub shortcuts</span> that
            don't use modifier keys in their activation. For example, the gn
            shortcut to navigate notifications, or question mark? to view
            context relevant shortcuts.{" "}
            <span className="text-color">
              Learn more about character key shortcuts.
            </span>
          </p>
        </div>
      </div>

      <p className="text-medium mt-1">Command platte</p>
      <p className="text-small mt-3">
        Modify the shortcuts to trigger the Command Palette for the default
        search mode and the command mode
      </p>

      {/* command platte  */}
      <div className="flex-left mt-3">
        <div>
          <p className="text-normal">Search mode</p>
          <select name="" id="" className="btn-primary  mt-5">
            <option value="">Synce with system</option>
            <option value="">single theme</option>
          </select>
        </div>
        <div>
          <p className="text-normal">Search mode</p>
          <select name="" id="" className="btn-primary  mt-5">
            <option value="">Synce with system</option>
            <option value="">single theme</option>
          </select>
        </div>
      </div>
      <div className="mt-1">
        <Button text="Save keyboard shortcut preference" />
      </div>

      {/* Motion */}
      <h3 className="mt-40">Motion</h3>
      <p className="text-medium mt-1">Autoplay animated images</p>

      <p className="text-small mt-5">
        Select whether animated images hould play automatically
      </p>

      <div className="flex-left mt-2">
        <input className="mb-3" type="radio" name="" id="   " />
        <div>
          <p className="text-normal">Sync with system</p>
          <p className="text-small">
            adopts our system preference for reduced motion
          </p>
        </div>
      </div>
      <div className="flex-left mt-2">
        <input className="mb-3" type="radio" name="" id="   " />
        <div>
          <p className="text-normal">Enabled</p>
          <p className="text-small">Automatically plays animated images</p>
        </div>
      </div>
      <div className="flex-left mt-2">
        <input className="mb-3" type="radio" name="" id="   " />
        <div>
          <p className="text-normal">Disabled</p>
          <p className="text-small">
            Prevents animiated images from playing automatically
          </p>
        </div>
      </div>

      <div className="mt-1">
        <Button text="Save motion preference" />
      </div>

      {/* content */}
      <h3 className="  mt-40">Content</h3>
      <p className="text-medium mt-3">Link underlines</p>

      <p className="text-small mt-5">
        show or hide underlines for links within text blocks. Something isn't
        working as expected? <span className="text-color">Let use know</span>
      </p>

      <div className="flex-left mt-2">
        <input type="radio" name="link" id="" />
        <p className="text-normal">Hide link underlines</p>
      </div>
      <div className="flex-left mt-2 mb-1">
        <input type="radio" name="link" id="" />
        <p className="text-normal">Show link underlines</p>
      </div>
      <Button text="Save" />

      {/* Editor settings */}
      <h3 className=" mt-40">Editor settings</h3>
      <p className="text-medium mt-3">URL paste behavior</p>

      <p className="text-small mt-5">
        Select if URLs should be formatted on paste. You can use control shift
        and VCtrl ⇧ V to paste a link in the opposite way.
      </p>

      <div className="flex-left">
        <input type="radio" checked name="editor" id="" />
        <div className="mt-1">
          <p className="text-normal">Formatted link</p>
          <p className="text-small">
            Pasting a URL while having text selected will format to a Markdown
            link
          </p>
        </div>
      </div>

      <div className="flex-left mb-1">
        <input type="radio" checked name="editor" id="" />
        <div className="mt-1">
          <p className="text-normal">Plain text</p>
          <p className="text-small">
            Pasting a URL while having text selected will replace the text
          </p>
        </div>
      </div>

      <Button text="Save editor settings" />
    </div>
  );
};

export default Accessibility;
