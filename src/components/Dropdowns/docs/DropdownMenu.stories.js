import DropdownMenu from "../DropdownMenuBase"
export default {
  title: "components/DropdownMenu",
  component: DropdownMenu,
  parameters: {
    docs: {
      description: {
        component: ``,
      },
    },
  },
};
export const Default = DropdownMenu;

Default.args = {
  children: "Click Here",
};
