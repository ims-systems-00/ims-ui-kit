import Offcanvas from "../OffcanvasBase"
export default {
  title: "components/Offcanvas",
  component: Offcanvas,
  parameters: {
    docs: {
      description: {
        component: ``,
      },
    },
  },
};
export const Default = Offcanvas;

Default.args = {
  children: "Click Here",
};
