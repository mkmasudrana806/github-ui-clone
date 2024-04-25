import SearchFieldLeftIcon from "../../forms/SearchFieldLeftIcon";
import Divider from "../../utilityComponents/Divider";
import Button from "../../utilityComponents/buttons/Button";
import "./packages.scss";

const Packages = () => {
  return (
    <div>
      <h3 className="text-large">Packages permissions</h3>
      <Divider />
      {/* default packages  */}
      <h3 className="mt-1">Default Package Setting</h3>
      <p className="text-normal mt-2">
        This setting will be applied to new Container, npm, rubygems and NuGet
        packages.
      </p>
      <div className="flex-left mt-3 mb-1">
        <input type="checkbox" checked name="" id="" />
        <p className="text-bold">Inherit access from source repository</p>
      </div>
      <Button text="Save" />

      {/* deleted packages  */}
      <h3 className="mt-1">Deleted Packages</h3>
      <p className="text-normal mt-2 mb-1">
        These are packages that have been previously deleted belonging to you.
        You can restore a package deleted within the last 30 days.
      </p>

      <SearchFieldLeftIcon text="Search deleted packages" />

      <p className="text-bold p-1 mt-2 text-center b-1 border-primary">
        No recoverable packages were found for mkmasudrana806.
      </p>
    </div>
  );
};

export default Packages;
