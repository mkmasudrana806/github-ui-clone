import "./button.scss";

const Button = ({ text = "Read more", color = "" }) => {
  return (
    <button style={{ backgroundColor: color }} className="button">
      {text}
    </button>
  );
};

export default Button;
