import UncontrolledAccordion from "../UncontrolledAccordionBase"
export default {
  title: "components/UncontrolledAccordion",
  component: UncontrolledAccordion,
  parameters: {
    docs: {
      description: {
        component: ``,
      },
    },
  },
};
export const Default = UncontrolledAccordion;

Default.args = {
  children: "Click Here",
};
