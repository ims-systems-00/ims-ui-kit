import LisInlineItem from "../ListInlineItemBase"
export default {
  title: "components/LisInlineItem",
  component: LisInlineItem,
  parameters: {
    docs: {
      description: {
        component: ``,
      },
    },
  },
};
export const Default = LisInlineItem;

Default.args = {
  children: "Click Here",
};
