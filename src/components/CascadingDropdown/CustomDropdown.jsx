import React from "react";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";

const CustomDropdown = ({ label, options, selectedValue, onChange }) => {
  const [dropdownOpen, setDropdownOpen] = React.useState(false);

  const toggle = () => setDropdownOpen((prevState) => !prevState);

  return (
    <Dropdown isOpen={dropdownOpen} toggle={toggle}>
      <DropdownToggle caret>
        {selectedValue ? selectedValue : label}
      </DropdownToggle>
      <DropdownMenu>
        {options.map((option, index) => (
          <DropdownItem key={index} onClick={() => onChange(option)}>
            {option}
          </DropdownItem>
        ))}
      </DropdownMenu>
    </Dropdown>
  );
};

export default CustomDropdown;
