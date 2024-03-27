import Divider from "../../utilityComponents/Divider";
import "./codespaces.scss";
import { GoRepo } from "react-icons/go";
import CenteredContent from "../../utilityComponents/centeredContent/CenteredContent";
import Button from "../../utilityComponents/buttons/Button";

const Codespaces = () => {
  return (
    <div className="codespaces-page">
      <h3 className="text-large">Dotfiles</h3>
      <Divider />

      <div className="checkbox">
        <input type="checkbox" name="" id="" />
        <div>
          <p className="text-normal">Automatically install dotfiles</p>
          <p className="text-small">
            Codespaces can automatically install your dotfiles into every
            codespace you create.{" "}
            <span className="text-color">
              Learn how to set up your dotfiles for Codespaces.
            </span>
          </p>
        </div>
      </div>

      <select className="btn-primary" name="" id="">
        <option value="">
          <p>
            <GoRepo /> Select repository
          </p>
        </option>
      </select>

      {/* codespaces secrets */}
      <div className="mt-40">
        <h3 className="text-large">Codespaces secret</h3>
        <Divider />
        <p className="text-normal mt-2">
          Development environment secrets are environment variables that are
          encrypted. They are available to any codespace you create using
          repositories with access to that secret.
        </p>
        <CenteredContent className="p-1 border-primary mt-1">
          There are no Codespaces secrets.
        </CenteredContent>
      </div>

      {/* GPG verification */}
      <h3 className="text-large mt-40">GPG verification</h3>
      <Divider />
      <p className="text-normal mt-2">
        Codespaces can have GPG commit signing capabilities so that GitHub can
        verify that commits made in the codespace come from a trusted source.
        When enabled, this setting will be applied to your list of trusted
        repositories.
      </p>
      <div className="checkbox mt-1">
        <input type="checkbox" checked name="" id="" />
        <div>
          <p className="text-normal">Enable</p>
          <p className="text-small">
            GPG signing will be available in Codespaces
          </p>
        </div>
      </div>

      {/*Settings Sync*/}
      <h3 className="text-large mt-40">Settings Sync</h3>
      <Divider />
      <p className="text-normal mt-2">
        By enabling, your codespaces will be able to pull from VS Code Settings
        Sync service and push only for the trusted repositories you specify.
        Only enable this for repositories that you trust.
      </p>
      <div className="checkbox mt-1">
        <input type="checkbox" name="" id="" />
        <div>
          <p className="text-normal">Enable</p>
          <p className="text-small">
            VS Code Settings Sync will be available in Codespaces
          </p>
        </div>
      </div>

      {/*Tristed repositories*/}
      <h3 className="text-large mt-40">Tristed repositories</h3>
      <Divider />
      <p className="text-normal mt-2">
        The following repositories will be referenced by GPG verification and
        Settings Sync.
      </p>
      <div className="checkbox mt-1">
        <input type="radio" name="" id="" />
        <div>
          <p className="text-normal">All repositories</p>
          <p className="text-small">
            GPG signing and VS Code Settings Sync will be available for
            codespaces for all repositories
          </p>
        </div>
      </div>
      <div className="checkbox mt-1">
        <input type="radio" name="" id="" />
        <div>
          <p className="text-normal">Se;ected repositories</p>
          <p className="text-small">
            GPG signing and VS Code Settings Sync will be available for
            codespaces from the selected repositories
          </p>
        </div>
      </div>
      <select className="btn-primary mt-3" name="" id="">
        <option value="">
          <p>
            <GoRepo /> Selected repository
          </p>
        </option>
      </select>

      {/*Access and security*/}
      <h3 className="text-large mt-40">Access and security</h3>
      <Divider />
      <p className="text-normal mt-2">
        Codespaces you create for your personal account can either be restricted
        to accessing the repository it was opened for, or granted read access to
        other repositories you own.
      </p>
      <div className="checkbox mt-1">
        <input type="radio" name="" id="" />
        <div>
          <p className="text-normal">Disabled</p>
          <p className="text-small">
            Limit access of personal Codespaces to the repository they were
            opened for
          </p>
        </div>
      </div>
      <div className="checkbox mt-1">
        <input type="radio" name="" id="" />
        <div>
          <p className="text-normal">All repositories</p>
          <p className="text-small">
            All Codespaces can access other repositories I own
          </p>
        </div>
      </div>

      {/*Editor preference preference*/}
      <h3 className="text-large mt-40">Editor preference</h3>
      <Divider />
      <div className="checkbox mt-1">
        <input type="radio" name="" id="" />
        <div>
          <p className="text-normal">Visual Studio Code</p>
          <p className="text-small">
            Connect to the cloud from your local desktop client. Requires{" "}
            <span className="text-color">Visual Studio Code</span> with the
            GitHub <span className="text-color">Codespaces</span> extension.
          </p>
        </div>
      </div>
      <div className="checkbox mt-1">
        <input type="radio" name="" id="" />
        <div>
          <p className="text-normal">Visual Studio Code for the Web</p>
          <p className="text-small">
            Edit and preview changes straight from the browser.
          </p>
        </div>
      </div>
      <div className="checkbox mt-1">
        <input type="radio" name="" id="" />
        <div>
          <p className="text-normal">JetBrains Gateway</p>
          <p className="text-small">
            Connect to the cloud from your local desktop client. Requires the
            <span className="text-color">JetBrains Gateway</span>
            with the <span className="text-color">GitHub Codespaces</span>{" "}
            plugin, and a JetBrains license. with the GitHub extension.
          </p>
        </div>
      </div>
      <div className="checkbox mt-1">
        <input type="radio" name="" id="" />
        <div>
          <p className="text-normal">JupyterLab</p>
          <p className="text-small">
            Edit and run notebooks from the browser with JupyterLab.
          </p>
        </div>
      </div>

      {/*Default idle timeout */}
      <h3 className="text-large mt-40">Default idle timeout</h3>
      <Divider />
      <p className="text-normal mt-1">
        A codespace will suspend after a period of inactivity. You can specify a
        default idle timeout value, which will apply to all codespaces created
        after the default is changed. You will be charged for the entire time
        your codespace is running, even if it is idle. The maximum value is 240
        minutes (4 hours).
      </p>
      <div className="flex-left mt-3">
        <Button text="30 minutes" />
        <Button text="Save" />
      </div>

      {/*Default retention period */}
      <h3 className="text-large mt-40">Default retention period</h3>
      <Divider />
      <p className="text-normal mt-1">
        Inactive codespaces are automatically deleted 30 days after the last
        time they were stopped. A shorter retention period can be set, and will
        apply to all codespaces created going forward. The default and maximum
        value is 30 days.{" "}
        <span className="text-color pointer">
          Learn about retention setting
        </span>
      </p>
      <div className="flex-left mt-3">
        <Button text="30 minutes" />
        <Button text="Save" />
      </div>

      {/*Host image version preference */}
      <h3 className="text-large mt-40">Host image version preference</h3>
      <Divider />
      <div className="checkbox mt-1">
        <input type="radio" name="" id="" />
        <div>
          <p className="text-normal">Visual Studio Code</p>
          <p className="text-small">
            The host image defines the operating system in which development
            containers run. These images receive periodic upgrades for security,
            functionality, and performance. GitHub Codespaces offers early
            access to beta images to ensure compatibility with existing
            development container configurations. Any codespace created or
            resumed after changing this setting will use the specified image
            configuration. Learn more about host images.
          </p>
        </div>
      </div>
      <div className="checkbox mt-1">
        <input type="radio" checked name="" id="" />
        <div>
          <p className="text-normal">Stable</p>
          <p className="text-small">
            Always use the latest stable configuration.
          </p>
        </div>
      </div>
      <div className="checkbox mt-1">
        <input type="radio" name="" id="" />
        <div>
          <p className="text-normal">JetBrains Gateway</p>
          <p className="text-small">
            Connect to the cloud from your local desktop client. Requires the
            <span className="text-color">JetBrains Gateway</span>
            with the <span className="text-color">GitHub Codespaces</span>{" "}
            plugin, and a JetBrains license. with the GitHub extension.
          </p>
        </div>
      </div>
      <div className="checkbox mt-1">
        <input type="radio" name="" id="" />
        <div>
          <p className="text-normal">Beta</p>
          <p className="text-small">
            Always use the latest stable configuration.
          </p>
        </div>
      </div>

      {/*Region */}
      <h3 className="text-large mt-40">Region</h3>
      <Divider />

      <div className="checkbox mt-1">
        <input type="radio" checked name="" id="" />
        <div>
          <p className="text-normal">Set automatically</p>
          <p className="text-small">
            We will determine the closest available region based on your
            location (IP address) at codespace creation time.
          </p>
        </div>
      </div>
      <div className="checkbox mt-1">
        <input type="radio" name="" id="" />
        <div>
          <p className="text-normal">Set manually</p>
          <p className="text-small">choose your default region</p>
        </div>
      </div>
    </div>
  );
};

export default Codespaces;
