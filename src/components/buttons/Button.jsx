import "./button.scss";

const Button = ({ children, text = "Read more", color = "" }) => {
  return (
    <button style={{ backgroundColor: color }} className="button">
      {children} {text}
    </button>
  );
};

export default Button;
