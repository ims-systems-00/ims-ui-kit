import OffcanvasHeader from "../OffcanvasHeaderBase"
export default {
  title: "components/OffcanvasHeader",
  component: OffcanvasHeader,
  parameters: {
    docs: {
      description: {
        component: ``,
      },
    },
  },
};
export const Default = OffcanvasHeader;

Default.args = {
  children: "Click Here",
};
