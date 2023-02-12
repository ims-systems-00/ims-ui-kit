import React from "react";
import Dropdown from "../DropdownBase";
import DropdownToggle from "../DropdownToggleBase";

const DropdownBtnIcon = ({}) => {
  return (
    <>
      <Dropdown isOpen="false" toggle={() => {}}>
        <DropdownToggle outline className="border border-0 rounded-pill">
          <i className="fa-solid fa-home" />
        </DropdownToggle>
      </Dropdown>
    </>
  );
};

export default DropdownBtnIcon;
DropdownBtnIcon.parameters = {
  docs: {
    description: {
      story: `
It is dropdown button which will have only icon like three dots.
`,
    },
  },
};

