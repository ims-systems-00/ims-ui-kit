import React from "react";
import Dropdown from "../DropdownBase";
import DropdownBtn from "../DropdownToggleBase";
import DropdownMenu from "../DropdownMenuBase";
import DropdownItem from "../DropdownItemBase";

const ActionMenu = ({}) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const toggle = () => setIsOpen(!isOpen);
  return (
    <>
      <Dropdown isOpen={isOpen} toggle={toggle}>
        <DropdownBtn outline className="border border-0 rounded-pill">
          <i className="fa-solid fa-home" />
        </DropdownBtn>
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
          >
            Item 3
          </DropdownItem>
          <DropdownItem
            leftIcon="fa-solid fa-user"
            rightIcon="fa-solid fa-chevron-right"
            leftIconStyle="text-primary"
          >
            Item 3
          </DropdownItem>
          <DropdownItem
            leftIcon="fa-solid fa-user"
            rightIcon="fa-solid fa-chevron-right"
            leftIconStyle="text-primary"
          >
            Item 3
          </DropdownItem>
          <DropdownItem
            leftIcon="fa-solid fa-user"
            rightIcon="fa-solid fa-chevron-right"
            leftIconStyle="text-primary"
          >
            Item 3
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </>
  );
};

export default ActionMenu;
