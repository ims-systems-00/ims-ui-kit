import React from "react";
import { Dropdown, DropdownMenu, DropdownToggle } from "reactstrap";

const ActionsDropdown = ({
  actions = {},
  checkedIds = [],
}) => {
  const [dropdownOpenState, setDropdownOpenState] = React.useState(false);
  const toggle = () => setDropdownOpenState((prevState) => !prevState);

  return (
    <div className="d-flex ">
      <Dropdown
        isOpen={dropdownOpenState}
        toggle={checkedIds.length > 0 ? () => {} : toggle}
        className="table-actions"
      >
        <DropdownToggle caret className="d-flex align-items-center ">
          <i className="fa-solid fa-ellipsis-vertical three-dots-2 mt-2"></i>
        
        </DropdownToggle>
        <DropdownMenu className={`${!dropdownOpenState ? "d-none" : ""}`}>
          {actions}
        </DropdownMenu>
      </Dropdown>
    </div>
  );
};

export default ActionsDropdown;
