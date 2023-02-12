import React from "react";
import Dropdown from "../DropdownBase";
import DropdownToggle from "../DropdownToggleBase";

const DropdownBtnWithIcon = ({}) => {
  return (
    <>
      <div className="d-flex">
        <div>
          <Dropdown isOpen="false" toggle={() => {}}>
            <DropdownToggle startIcon={"fa-solid fa-home"}>
              Default
            </DropdownToggle>
          </Dropdown>
          <br /> <br />
          <Dropdown isOpen="false" toggle={() => {}}>
            <DropdownToggle
              startIcon={"fa-solid fa-home"}
              endIcon={"fa-solid fa-home"}
              color="primary"
            >
              Regular
            </DropdownToggle>
          </Dropdown>
          <br /> <br />
          <Dropdown isOpen="false" toggle={() => {}}>
            <DropdownToggle endIcon={"fa-solid fa-home"} color="secondary">
              Regular
            </DropdownToggle>
          </Dropdown>
          <br /> <br />
          <Dropdown isOpen="false" toggle={() => {}}>
            <DropdownToggle caret startIcon={"fa-solid fa-home"} color="dark">
              Regular
            </DropdownToggle>
          </Dropdown>
        </div>
        <div className="ms-5">
          <Dropdown isOpen="false" toggle={() => {}}>
            <DropdownToggle
              caret
              startIcon={"fa-solid fa-home"}
              endIcon={"fa-solid fa-home"}
              outline
            >
              Default
            </DropdownToggle>
          </Dropdown>
          <br /> <br />
          <Dropdown isOpen="false" toggle={() => {}}>
            <DropdownToggle
              endIcon={"fa-solid fa-home"}
              outline
              color="primary"
            >
              Regular
            </DropdownToggle>
          </Dropdown>
          <br /> <br />
          <Dropdown isOpen="false" toggle={() => {}}>
            <DropdownToggle
              startIcon={"fa-solid fa-home"}
              outline
              color="secondary"
            >
              Regular
            </DropdownToggle>
          </Dropdown>
          <br /> <br />
          <Dropdown isOpen="false" toggle={() => {}}>
            <DropdownToggle
              startIcon={"fa-solid fa-home"}
              endIcon={"fa-solid fa-home"}
              outline
              color="dark"
            >
              Regular
            </DropdownToggle>
          </Dropdown>
        </div>
      </div>
    </>
  );
};

export default DropdownBtnWithIcon;
DropdownBtnWithIcon.parameters = {
  docs: {
    description: {
      story: `
It is possible to add icons to the dropdown button. The \`startIcon\` and \`endIcon\` props are used to add icons to the left and right side of the button respectively. The \`startIcon\` and \`endIcon\` props accept the \`className\` of the icon to be added. The \`className\` of the icon can be found in the [Icons](/docs/components-icons--page) section.
`,
    },
  },
};
