import TemplateCart from "./TemplateCart";
import "./templates.scss";

const Templates = () => {
  return (
    <div className="choose-templates mt-1">
      <h1 className="text-large">Choose a template</h1>
      <p className="text-small mt-5">
        Start a codespace from a template and get to developing with the power
        of a virtual machine in the cloud.
      </p>
      {/* template cart  */}
      <div className="templates">
        <TemplateCart />
        <TemplateCart />
        <TemplateCart />
        <TemplateCart />
        <TemplateCart />
        <TemplateCart />
        <TemplateCart />
        <TemplateCart />
        <TemplateCart />
      </div>
    </div>
  );
};

export default Templates;
