import { Meta, StoryFn } from "@storybook/react/*";
import Example from "../Example";
import React from "react";

export default {
  title: "components/Dropdowns",
  component: Example,
  parameters: {
    docs: {
      description: {
        component: `
[Bootstrap Dropdown](https://getbootstrap.com/docs/5.3/components/dropdowns/#overview)
All our dropdowns are customized from the default bootstrap dropdowns. Only the customized portions are listed here.
        `,
      },
    },
  },
} as Meta<typeof Example>;

// Define the type for the story
const Template: StoryFn<typeof Example> = (args: any) => <Example {...args} />;

Template.args = {
  children: <></>,
  isOpen: false,
  toggle: () => {},
  direction: "down",
  size: "md",
  color: "primary",
  caret: true,
  startIcon: "fa-solid fa-home",
  endIcon: "fa-solid fa-home",
};

export { Template as Dropdown };

export { default as DropdownRegularButton } from "../DropdownBtnVariants/DropdownBtnsRegular";
export { default as DropdownIconButton } from "../DropdownBtnVariants/DropdownBtnIcon";
export { default as DropdownButtonWithIcon } from "../DropdownBtnVariants/DropdownBtnWithIcon";
export { default as RegularMenu } from "../DropdownMenuVariants/RegularMenu";
export { default as ActionMenu } from "../DropdownMenuVariants/ActionMenu";
export { default as UncontrolledDropdown } from "../Examples/UncontrolledDropdowns";
export { default as UncontrolledButtonDropdown } from "../Examples/UncontrolledButtonDropdowns";
