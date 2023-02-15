import AccordionItem from "../AccordionItemBase"
export default {
  title: "components/AccordionItem",
  component: AccordionItem,
  parameters: {
    docs: {
      description: {
        component: ``,
      },
    },
  },
};
export const Default = AccordionItem;

Default.args = {
  children: "Click Here",
};
