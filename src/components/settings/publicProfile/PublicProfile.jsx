import "./publicProfile.scss";
import Divider from "../../utilityComponents/Divider";
import InputField from "../../forms/InputField";
import Button from "../../utilityComponents/buttons/Button";
import { LiaConnectdevelop } from "react-icons/lia";
import { IoIosLink } from "react-icons/io";
import ImageCircle from "../../utilityComponents/image/ImageCircle";
import userLogo from "../../../assets/user.jpg";
import { FaPen } from "react-icons/fa";

const PublicProfile = () => {
  return (
    <div className="publicProfile">
      <h2 className="text-large">Public Profile</h2>
      <Divider />
      {/* Public profile part  */}
      <div className="profile">
        {/* profile body  */}
        <div className="content">
          <p className="mb-4 mt-5 text-normal">Name</p>
          <InputField size="440px" />
          <p className="text-small mt-5">
            Your name may appear around GitHub where you contribute or are
            mentioned. You can remove it at any time.
          </p>

          <p className="text-normal mt-2 mb-4">Public email</p>
          <select name="" id="" className="btn-primary">
            <option value="">Select a verified email to display</option>
          </select>
          <p className="text-small mt-5">
            You have set your email address to private. To toggle email privacy,
            go to <span className="text-color pointer">email settings</span> and
            uncheck "Keep my email address private."
          </p>

          <p className="text-normal mt-2 mb-4">Bio</p>
          <textarea
            className="bio border-primary"
            name=""
            id=""
            cols="30"
            rows="5"
            placeholder="Tell us a little bit about yourself"
          ></textarea>
          <p className="text-small mt-5">
            You can @mention other users and organizations to link to them.
          </p>

          <p className="text-normal mt-2 mb-4">Pronouns</p>
          <select name="" id="" className="btn-primary w-440px">
            <option value="">Don't specify</option>
            <option value="">They/them</option>
            <option value="">She/her</option>
            <option value="">He/him</option>
          </select>

          <p className="mb-4 mt-2 text-normal">URL</p>
          <InputField size="440px" />

          <p className="mb-4 mt-2 text-normal">ORCID iD</p>
          <p className="text-small mb-1">
            ORCID provides a persistent identifier - an ORCID iD - that
            distinguishes you from other researchers. Learn more at{" "}
            <span className="text-color">ORCID.org.</span>
          </p>

          <Button text="Connect your ORCID iD">
            <LiaConnectdevelop color="green" />
          </Button>

          {/* social accounts links */}
          <div className="flex-left mt-1">
            <IoIosLink />
            <InputField text="Link to social profile" size="100%" />
          </div>
          <div className="flex-left mt-5">
            <IoIosLink />
            <InputField text="Link to social profile" size="100%" />
          </div>
          <div className="flex-left mt-5">
            <IoIosLink />
            <InputField text="Link to social profile" size="100%" />
          </div>
          <div className="flex-left mt-5">
            <IoIosLink />
            <InputField text="Link to social profile" size="100%" />
          </div>

          <p className="mb-4 mt-2 text-normal">Company</p>
          <InputField size="440px" />
          <p className="text-small mt-5">
            You can <strong>@mention</strong> your company’s GitHub organization
            to link it.
          </p>
          <Divider />

          <p className="mb-4 mt-2 text-normal">Location</p>
          <InputField size="440px" />
          <div className="flex-left mt-5">
            <input type="checkbox" name="" id="" />
            <div className="mt-3">
              <p className="text-normal">Display current local time</p>
              <p className="text-small">
                Other users will see the time difference from their local time.
              </p>
            </div>
          </div>

          <p className="text-small mt-1 mb-3">
            All of the fields on this page are optional and can be deleted at
            any time, and by filling them out, you're giving us consent to share
            this data wherever your user profile appears. Please see our{" "}
            <span className="text-color">privacy statement</span> to learn more
            about how we use this information.
          </p>
          <Button text="Update profile" color="green" />
        </div>
        {/* photo side  */}
        <div className="photo">
          <p className="text-normal mb-3">Profile picture</p>
          <div className="profile-picture">
            <ImageCircle Img={userLogo} size={"200"} />
            <button className="edit-btn border-primary flex-left btn-primary">
              <FaPen /> Edit
            </button>
          </div>
        </div>
      </div>

      {/* Contributios and activity  */}
      <div className="contributions">
        <h2 className="text-large">Contributions & Activity</h2>
        <Divider />

        <div className="flex-left mt-5">
          <input type="checkbox" name="" id="" />
          <div className="mt-3">
            <p className="text-normal">
              Make profile private and hide activity
            </p>
            <p className="text-small">
              Enabling this will hide your contributions and activity from your
              GitHub profile and from social features like followers, stars,
              feeds, leaderboards and releases.
            </p>
          </div>
        </div>

        <div className="flex-left mt-5 mb-1">
          <input type="checkbox" name="" id="" />
          <div className="mt-3">
            <p className="text-normal">
              Include private contributions on my profile
            </p>
            <p className="text-small">
              Your contribution graph, achievements, and activity overview will
              show your private contributions without revealing any repository
              or organization information.{" "}
              <span className="text-color">Read more.</span>
            </p>
          </div>
        </div>

        <Button text="Update preferences" />
      </div>

      {/* Profile settings  */}
      <div className="profile-settings">
        <h2 className="text-large">Profile settings</h2>
        <Divider />

        <div className="flex-left mt-5 mb-1">
          <input type="checkbox" checked={true} name="" id="" />
          <div className="mt-3">
            <p className="text-normal">Show Achievements on my profile</p>
            <p className="text-small">
              Your achievements will be shown on your profile.
            </p>
          </div>
        </div>
        <Button text="Update preferences" />
      </div>

      {/* GitHub Developer Program */}
      <div className="developer-program">
        <h3 className="text-large">GitHub Developer Program</h3>
        <div className="border-primary p-1 mt-4">
          <p className="text-normal">
            Building an application, service, or tool that integrates with
            GitHub?
            <span className="text-color">
              {" "}
              Join the GitHub Developer Program
            </span>
            , or read more about it at our{" "}
            <span className="text-color">GitHub developer program.</span>
          </p>
        </div>
      </div>

      {/* Jobs profile */}
      <div className="jobs-profile">
        <h3 className="text-large">Jobs profile</h3>
        <Divider />
        <div className="flex-left mt-5 mb-1">
          <input type="checkbox" name="" id="" />
          <p className="text-normal">Show Achievements on my profile</p>
        </div>
        <Button text="Save jobs profile" />
      </div>

      {/* Trending settings */}
      <div className="trendings">
        <h3 className="text-large">Jobs profile</h3>
        <Divider />
        <p className="text-normal mt-2 mb-4">Pronouns</p>
        <select name="" id="" className="btn-primary w-440px">
          <option value="">No preference</option>
          <option value="">They/them</option>
          <option value="">She/her</option>
          <option value="">He/him</option>
        </select>
      </div>
    </div>
  );
};

export default PublicProfile;
