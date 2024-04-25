import React from "react";
import Divider from "../../utilityComponents/Divider";
import Button from "../../utilityComponents/buttons/Button";
import CenteredContent from "../../utilityComponents/centeredContent/CenteredContent";

const Pages = () => {
  return (
    <div>
      <h1 className="text-large">Pages</h1>
      <Divider />

      {/* verified domains */}
      <div className="mt-1 flex-between">
        <h3>Verified domains</h3>
        <Button color="green" text="Add a domain" />
      </div>

      <CenteredContent className={"border-primary mt-3"}>
        <h3>There are no verified domains</h3>
        <p className="text-muted text-medium">
          Verify domains to restrict who can publish GitHub Pages on them.
        </p>
      </CenteredContent>
    </div>
  );
};

export default Pages;
