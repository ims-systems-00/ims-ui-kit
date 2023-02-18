import DropdownItem from "../DropdownItemBase"
export default {
  title: "components/DropdownItem",
  component: DropdownItem,
  parameters: {
    docs: {
      description: {
        component: ``,
      },
    },
  },
};
export const Default = DropdownItem;

Default.args = {
  children: "Click Here",
};
