import React from "react";
import Dropdown from "./DropdownBase";
import DropdownToggle from "./DropdownToggleBase";
import DropdownMenu from "./DropdownMenuBase";
import DropdownItem from "./DropdownItemBase";
import propTypes from "prop-types";

const Example = ({}) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const toggle = () => setIsOpen(!isOpen);
  return (
    <Dropdown isOpen={isOpen} toggle={toggle}>
      <DropdownToggle caret>Default</DropdownToggle>
      <DropdownMenu>
        <DropdownItem>Item 1</DropdownItem>
        <DropdownItem>Item 2</DropdownItem>
        <DropdownItem>Item 3</DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
};

Example.propTypes = {};

export default Example;

