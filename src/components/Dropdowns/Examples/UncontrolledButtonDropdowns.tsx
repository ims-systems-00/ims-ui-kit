import React from "react";
import UncontrolledButtonDropdown from "../UncontrolledButtonDropdownBase";
import DropdownToggle from "../DropdownToggleBase";
import DropdownMenu from "../DropdownMenuBase";
import DropdownItem from "../DropdownItemBase";

const UncontrolledButtonDropdowns = () => {
  return (
    <UncontrolledButtonDropdown>
      <DropdownToggle caret>Dropdown</DropdownToggle>
      <DropdownMenu>
        <DropdownItem header>Header</DropdownItem>
        <DropdownItem disabled>Action</DropdownItem>
        <DropdownItem>Another Action</DropdownItem>
        <DropdownItem divider />
        <DropdownItem>Another Action</DropdownItem>
      </DropdownMenu>
    </UncontrolledButtonDropdown>
  );
};

export default UncontrolledButtonDropdowns;
