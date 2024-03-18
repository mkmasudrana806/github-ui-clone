import "./overlay.scss";

// this component will create a overlay whole body
const Overlay = ({ children, handleClose }) => {
  return (
    <div onClick={handleClose} className="overlay">
      {children}
    </div>
  );
};

export default Overlay;
