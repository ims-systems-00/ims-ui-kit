import DefaultBreadcrumb from "../Examples/DefaultBreadcrumb";

export default {
  title: "components/Breadcrumb",
  component: DefaultBreadcrumb,
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
export const Breadcrumbs = DefaultBreadcrumb;

Breadcrumbs.args = {};
