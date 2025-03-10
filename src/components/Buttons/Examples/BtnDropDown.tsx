import React, { useState } from "react";
import ButtonDropdown from "../ButtonDropdownBase";
import DropdownToggle from "../../Dropdowns/DropdownToggleBase";
import DropdownMenu from "../../Dropdowns/DropdownMenuBase";
import DropdownItem from "../../Dropdowns/DropdownItemBase";

const BtnDropDown = ({}) => {
  const [dropdownOpen, setOpen] = useState(false);

  const toggle = () => setOpen(!dropdownOpen);
  return (
    <>
      <ButtonDropdown isOpen={dropdownOpen} toggle={toggle}>
        <DropdownToggle caret>Button Dropdown</DropdownToggle>
        <DropdownMenu>
          <DropdownItem header>Header</DropdownItem>
          <DropdownItem disabled>Action</DropdownItem>
          <DropdownItem>Another Action</DropdownItem>
          <DropdownItem divider />
          <DropdownItem>Another Action</DropdownItem>
        </DropdownMenu>
      </ButtonDropdown>
    </>
  );
};

export default BtnDropDown;
