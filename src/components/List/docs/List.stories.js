import DefaultList from "../Examples/DefaultList";

export default {
  title: "components/Lists",
  component: DefaultList,
  parameters: {
    docs: {
      description: {
        component: `
[Bootstrap Dropdown](https://getbootstrap.com/docs/5.3/components/dropdowns/#overview)
All our dropdowns are customised from the default bootstrap dropdowns. Only the customised portions are listed here.
        `,
      },
    },
  },
};
export const List = DefaultList;
List.args = {};

export { default as ListGroup } from "../Examples/ListGroup";
export { default as InlineList } from "../Examples/InlineList";
