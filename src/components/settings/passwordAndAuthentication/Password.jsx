import "./password.scss";
import Divider from "../../utilityComponents/Divider";
import Button from "../../utilityComponents/buttons/Button";
import InputField from "../../forms/InputField";
import CenteredContent from "../../utilityComponents/centeredContent/CenteredContent";
import { LiaUserLockSolid } from "react-icons/lia";
import { CiLock } from "react-icons/ci";

const Password = () => {
  return (
    <div className="password-auth">
      {/* change password */}
      <h3 className="text-large">Change password</h3>
      <Divider />

      <p className="text-normal mt-1 mb-4">Old password</p>
      <InputField text="" />
      <p className="text-normal mt-1 mb-4">New password</p>
      <InputField text="" />
      <p className="text-normal mt-1 mb-4">Confirm new password</p>
      <InputField text="" />

      <p className="text-small mt-1">
        Make sure it's at least 15 characters OR at least 8 characters including
        a number and a lowercase letter.{" "}
        <span className="text-color">Learn more.</span>
      </p>
      <div className="flex-left mt-5">
        <Button text="Update password" />
        <p className="text-color text-normal">I forgot my password</p>
      </div>

      {/* Passkeys */}
      <h3 className="text-large mt-40">Passkeys</h3>
      <Divider />
      <CenteredContent className={"border-primary mt-2"}>
        <LiaUserLockSolid color="gray" size={30} />
        <h3>Passwordles sign-in with passkeys</h3>
        <p className="text-normal">
          Passkeys are a password replacement that validates your identity using
          touch, facial recognition, a device password, or a PIN. Passkeys can
          be used for sign-in as a simple and secure alternative to your
          password and two-factor credentials.
        </p>
        <Button text="Add a passkey" />
      </CenteredContent>

      {/* two factor authentication */}
      <h3 className="text-large mt-40">Two-factor authentication</h3>
      <Divider />
      <CenteredContent className={"mt-2"}>
        <CiLock color="gray" size={30} />
        <h3>Two-factor authentication is not enabled yet.</h3>
        <p className="text-normal">
          Two-factor authentication adds an additional layer of security to your
          account by requiring more than just a password to sign in.
        </p>
        <Button color="green" text="Enable two-factor authentication" />
        <span className="text-normal text-color pointer">Learn more</span>
      </CenteredContent>
    </div>
  );
};

export default Password;
