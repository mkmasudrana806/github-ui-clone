import "./profile.scss";
import userLogo from "../../../../assets/user.jpg";
import { BsEmojiFrown } from "react-icons/bs";
import IconWithText from "../../../iconsButtons/IconWithText";
import { TiStarOutline } from "react-icons/ti";
import { FaCircle } from "react-icons/fa";
import Button from "../../../buttons/Button";
import { LuUsers2 } from "react-icons/lu";
import InputField from "../../../forms/InputField";
import { BsBuilding } from "react-icons/bs";
import { GrLocation } from "react-icons/gr";
import { MdOutlineWatchLater } from "react-icons/md";
import { IoIosLink } from "react-icons/io";
import { useState } from "react";
import ContributionCalender from "./contribution calender/ContributionCalender";

const Profile = () => {
  const [editProfile, setEditProfile] = useState(false);

  // toggle edit profile button and cancel button
  const handleEditProfile = () => {
    setEditProfile(!editProfile);
  };

  return (
    <div className="profile-page">
      <div className="main-body">
        {/* profile picture  */}
        <div className="sidebar">
          <div className="profile">
            <div className="photo">
              <img src={userLogo} alt="" />
              <span className="icon-border">
                <BsEmojiFrown />
              </span>
            </div>
            {/* render based on edit profile status   */}
            {!editProfile && (
              <>
                <h3 className="mt-5">Md Masud Rana</h3>
                <p className="text-muted mb-1">mkmasudrana806</p>
                <div onClick={handleEditProfile}>
                  <Button text="Edit Profile" />
                </div>
              </>
            )}
          </div>
          {!editProfile && (
            <p className="text-normal mt-2">
              <LuUsers2 /> <span>1</span> following <span>. 2</span> following
            </p>
          )}
          {/* profile edit form  */}
          {editProfile && (
            <ProfileEditForm handleEditProfile={handleEditProfile} />
          )}
        </div>

        {/* main  */}
        <div className="main">
          <div className="flex-between">
            <p className="text-medium">Popular repositories</p>
            <p className="text-small">Customize your pins</p>
          </div>
          {/* repositories lists */}
          <div className="repositories mt-1">
            <RepoCart />
            <RepoCart />
            <RepoCart />
            <RepoCart />
            <RepoCart />
            <RepoCart />
          </div>

          {/* <ContributionCalender /> */}
          <ContributionCalender />
        </div>
      </div>
    </div>
  );
};

export default Profile;

// edit profile form
const ProfileEditForm = ({ handleEditProfile }) => {
  return (
    <div className="profile-edit-form">
      <div className="mt-3">
        <p className="text-medium mb-3">Name</p>
        <InputField size="100%" text="Name" />
      </div>
      <div className="mt-2">
        <p className="text-medium mb-3">Bio</p>
        <textarea
          name=""
          id=""
          cols="30"
          rows="5"
          placeholder="Add a bio"
        ></textarea>
      </div>
      <p className="text-small">
        You can @mention other users and organizations to link to them.
      </p>
      <div className="mt-5">
        <p className="text-normal">Pronouns</p>
        <select className="border-primary text-normal mt-5" name="" id="">
          <option value="">Don't specify</option>
          <option value="">they/them</option>
          <option value="">she/her</option>
          <option value="">he/him</option>
          <option value="">custom</option>
        </select>
      </div>
      <div className="flex-left mt-5">
        <BsBuilding />
        <InputField text="Company" size="100%" />
      </div>
      <div className="flex-left mt-5">
        <GrLocation />
        <InputField text="Location" size="100%" />
      </div>
      <div className="flex-left mt-5 text-normal">
        <MdOutlineWatchLater />
        <label className="flex-left" htmlFor="">
          <input type="checkbox" name="" id=" " /> Display current local time
        </label>
      </div>
      <div className="flex-left mt-5">
        <IoIosLink />
        <InputField text="Website" size="100%" />
      </div>
      <p className="mt-1 text-normal">Social accounts</p>
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
      <div className="flex-left mt-5">
        <IoIosLink />
        <InputField text="Link to social profile" size="100%" />
      </div>
      <div className="flex-left mt-2">
        <Button text="Save" color="green" />
        <div onClick={handleEditProfile}>
          <Button text="Cancel" />
        </div>
      </div>
    </div>
  );
};

// repo cart for the repositories list
const RepoCart = () => {
  return (
    <div className="repo-cart border-primary p-1">
      <div className="flex-between">
        <p className="text-color pointer">
          post-delete-comment-textchange-onclick
        </p>
        <span className="public-status  text-small">public</span>
      </div>
      <p className="text-small mt-3">
        in this repository i have completed some samll task like how to post,
        comment, delete some line, delete button when use press delete button
        course will delete
      </p>
      <div className="icons mt-3">
        <IconWithText icon={<FaCircle />} color="orange" text={"HTML"} />
        <IconWithText icon={<TiStarOutline />} color="gray" text={"1"} />
      </div>
    </div>
  );
};
