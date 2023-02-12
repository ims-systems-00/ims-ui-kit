import React from "react";
import Dropdown from "../DropdownBase";
import DropdownToggle from "../DropdownToggleBase";

const DropdownBtnRegular = ({}) => {
  return (
    <>
      <div className="d-flex">
        <div>
          <Dropdown isOpen="false" toggle={() => {}}>
            <DropdownToggle caret>Default</DropdownToggle>
          </Dropdown>
          <br /> <br />
          <Dropdown isOpen="false" toggle={() => {}}>
            <DropdownToggle caret color="primary">
              Regular
            </DropdownToggle>
          </Dropdown>
          <br /> <br />
          <Dropdown isOpen="false" toggle={() => {}}>
            <DropdownToggle caret color="secondary">
              Regular
            </DropdownToggle>
          </Dropdown>
          <br /> <br />
          <Dropdown isOpen="false" toggle={() => {}}>
            <DropdownToggle caret color="dark">
              Regular
            </DropdownToggle>
          </Dropdown>
        </div>
        <div className="ms-5">
          <Dropdown isOpen="false" toggle={() => {}}>
            <DropdownToggle caret outline>
              Default
            </DropdownToggle>
          </Dropdown>
          <br /> <br />
          <Dropdown isOpen="false" toggle={() => {}}>
            <DropdownToggle caret outline color="primary">
              Regular
            </DropdownToggle>
          </Dropdown>
          <br /> <br />
          <Dropdown isOpen="false" toggle={() => {}}>
            <DropdownToggle caret outline color="secondary">
              Regular
            </DropdownToggle>
          </Dropdown>
          <br /> <br />
          <Dropdown isOpen="false" toggle={() => {}}>
            <DropdownToggle caret outline color="dark">
              Regular
            </DropdownToggle>
          </Dropdown>
        </div>
      </div>
    </>
  );
};

export default DropdownBtnRegular;

DropdownBtnRegular.parameters = {
  docs: {
    description: {
      story: `
It is dropdown button which will have only text like "Default", "Regular" etc.
`,
    },
  },
};

