import Dropdown from "../DropdownBase";
import DropdownToggle from "../DropdownBtnBase";

export default {
  title: "components/Dropdowns",
  component: Dropdown,
  parameters: {
    docs: {
      description: {
        component: `
[Bootstrap Dropdown](https://getbootstrap.com/docs/5.3/components/dropdowns/#overview)
All our dropdowns are customised from the default bootstrap dropdowns. Only the customised portions are listed here.
        `,
      },
    },
  },
};
export const Dropdowns = Dropdown;

Dropdowns.args = {
  children: (
    <>
      <DropdownToggle caret>Dropdown</DropdownToggle>
    </>
  ),
  isOpen: false,
  toggle: () => {},
};

export { default as DropdownRegularButton } from "../DropdownBtnVariants/DropdownBtnsRegular";
export { default as DropdownIconButton } from "../DropdownBtnVariants/DropdownBtnIcon";
export { default as DropdownButtonWithIcon } from "../DropdownBtnVariants/DropdownBtnWithIcon";
