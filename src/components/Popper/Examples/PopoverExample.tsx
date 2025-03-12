import React, { useState } from "react";
import { Button } from "reactstrap";
import PopoverBase from "../PopoverBase";
import PopoverBodyBase from "../PopoverBodyBase";
import PopoverHeaderBase from "../PopoverHeaderBase";

const PopoverExample: React.FC = () => {
  const [popoverOpen, setPopoverOpen] = useState(false);

  const togglePopover = () => {
    setPopoverOpen(!popoverOpen);
  };

  return (
    <div className="d-flex justify-content-center mt-4">
      <Button id="PopoverButton" color="primary" onClick={togglePopover}>
        Toggle Popover
      </Button>
      <PopoverBase
        placement="bottom"
        isOpen={popoverOpen}
        target="PopoverButton"
        toggle={togglePopover}
      >
        <PopoverHeaderBase>Popover Title</PopoverHeaderBase>
        <PopoverBodyBase>
          This is a simple popover example using reusable components.
        </PopoverBodyBase>
      </PopoverBase>
    </div>
  );
};

export default PopoverExample;
