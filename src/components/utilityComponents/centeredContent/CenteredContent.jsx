import "./centeredContent.scss";

const CenteredContent = ({ children, className }) => {
  return <div className={`centered-content ${className}`}>{children}</div>;
};

export default CenteredContent;
