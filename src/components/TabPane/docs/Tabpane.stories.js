import DefaultTabpane from "../Examples/DefaultTabpane";

export default {
  title: "components/TabPane",
  component: DefaultTabpane,
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
export const Tabpane = DefaultTabpane;
Tabpane.args = {};
