import Drawer from "../Examples/Drawer";
export default {
  title: "components/Drawer",
  component: Drawer,
  parameters: {
    docs: {
      description: {
        component: `
This drawer component is build for containing complext views sliding from right side whils users 
still want to stay one a tabular view or a certain list view or any other usecases.
`,
      },
    },
  },
};
export const DefaultDrawer = Drawer;
DefaultDrawer.args = {};
