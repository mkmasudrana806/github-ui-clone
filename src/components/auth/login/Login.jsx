import "./login.scss";
import githubLogo from "../../../assets/logo.png";
import InputField from "../../forms/InputField";
import Footer from "../../footer/Footer";
import ImageCircle from "../../utilityComponents/image/ImageCircle";
import Button from "../../utilityComponents/buttons/Button";

const Login = () => {
  return (
    <div className="login mt-1">
      <div className="login-form">
        <div className="logo mb-1">
          <ImageCircle Img={githubLogo} size={48} />
        </div>

        <h2 className="mb-1">Add an account</h2>
        <div className="input-field border-primary p-1">
          <p className="text-normal mb-3">Username or email address</p>
          <InputField text="" size="100%" />
          <div className="flex-between text-normal mt-1 mb-3">
            <p>Password</p>
            <p className="text-color pointer">Forgot password</p>
          </div>
          <InputField text="" size="100%" />
          <div className="mt-3 btn-login">
            <Button text="Sign in" color="green" />
          </div>
        </div>

        <div className="border-primary p-1 mt-1">
          <p className="text-normal mb-3">Sign in with passkey</p>
          <p className="text-normal">
            Want to create an account?{" "}
            <span className="text-color">Sign out</span>
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Login;
