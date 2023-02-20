import OffcanvasBody from "../OffcanvasBodyBase"
export default {
  title: "components/OffcanvasBody",
  component: OffcanvasBody,
  parameters: {
    docs: {
      description: {
        component: ``,
      },
    },
  },
};
export const Default = OffcanvasBody;

Default.args = {
  children: "Click Here",
};
