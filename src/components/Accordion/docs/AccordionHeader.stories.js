import AccordionHeader from "../AccordionHeaderBase"
export default {
  title: "components/AccordionHeader",
  component: AccordionHeader,
  parameters: {
    docs: {
      description: {
        component: ``,
      },
    },
  },
};
export const Default = AccordionHeader;

Default.args = {
  children: "Click Here",
};
