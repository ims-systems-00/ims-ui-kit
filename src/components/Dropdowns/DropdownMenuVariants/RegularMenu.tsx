import React from "react";
import Dropdown from "../DropdownBase";
import DropdownBtn from "../DropdownToggleBase";
import DropdownMenu from "../DropdownMenuBase";
import DropdownItem from "../DropdownItemBase";

const RegularMenu = ({}) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const toggle = () => setIsOpen(!isOpen);
  return (
    <>
      <Dropdown isOpen={isOpen} toggle={toggle}>
        <DropdownBtn>Regular Menu</DropdownBtn>
        <DropdownMenu>
          <DropdownItem leftIcon="fa-solid fa-home">Item 1</DropdownItem>
          <DropdownItem
            leftIcon="fa-solid fa-user"
            rightIcon="fa-solid fa-chevron-right"
          >
            Item 2
          </DropdownItem>
          <DropdownItem
            leftIcon="fa-solid fa-user"
            rightIcon="fa-solid fa-chevron-right"
            leftIconStyle="text-primary"
            rightIconStyle="text-info"
          >
            Item 3
          </DropdownItem>
          <DropdownItem
            leftIcon="fa-solid fa-user"
            rightIcon="fa-solid fa-chevron-right"
            leftIconStyle="text-danger"
            rightIconStyle="text-warning"
          >
            Item 3
          </DropdownItem>
          <DropdownItem
            leftIcon="fa-solid fa-user"
            rightIcon="fa-solid fa-chevron-right"
            leftIconStyle="text-success"
            rightIconStyle="text-danger"
          >
            Item 3
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </>
  );
};

export default RegularMenu;
