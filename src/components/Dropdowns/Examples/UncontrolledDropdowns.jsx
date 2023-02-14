import React from "react";
import UncontrolledDropdown from "../UncontrolledDropdownBase";
import DropdownToggle from "../DropdownToggleBase";
import DropdownMenu from "../DropdownMenuBase";
import DropdownItem from "../DropdownItemBase";

const UncontrolledDropdowns = () => {
  return (
    <div>
      <UncontrolledDropdown>
        <DropdownToggle caret>Dropdown</DropdownToggle>
        <DropdownMenu>
          <DropdownItem header>Header</DropdownItem>
          <DropdownItem disabled>Action</DropdownItem>
          <DropdownItem>Another Action</DropdownItem>
          <DropdownItem divider />
          <DropdownItem>Another Action</DropdownItem>
        </DropdownMenu>
      </UncontrolledDropdown>
    </div>
  );
};

export default UncontrolledDropdowns;
