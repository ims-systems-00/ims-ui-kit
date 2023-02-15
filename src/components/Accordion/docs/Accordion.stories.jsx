import Accordion from "../Examples/DefaultAccordion";
export default {
  title: "components/Accordion",
  component: Accordion,
  parameters: {
    docs: {
      description: {
        component: `
[Bootstrap Accordion](https://getbootstrap.com/docs/5.3/components/accordion/)
All our accordions are customised from the default bootstrap accordions. Only the customised portions are listed here.
`,
      },
    },
  },
};
export { default as Accordion } from "../Examples/DefaultAccordion";
export { default as UncontrolledAccordion } from "../Examples/DefaultUncontrolledAccordion";
