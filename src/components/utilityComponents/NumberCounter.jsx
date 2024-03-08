import "./numberCounter.scss";

const NumberCounter = ({ children = 0 }) => {
  return <div className="value text-normal">{children}</div>;
};

export default NumberCounter;
