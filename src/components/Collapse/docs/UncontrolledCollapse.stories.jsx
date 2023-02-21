import UncontrolledCollapse from "../Examples/DefaultCollapse";
export default {
  title: "components/UncontrolledCollapse",
  component: UncontrolledCollapse,
  parameters: {
    docs: {
      description: {
        component: `
[Bootstrap Collapse](https://getbootstrap.com/docs/5.3/components/collapse/)
All our collapse are customised from the default bootstrap collapse. Only the customised portions are listed here.
`,
      },
    },
  },
};

export const Collapses = UncontrolledCollapse;

Collapses.args = {};

export { default as UncontrolledCollapse } from "../Examples/UncontrolledCollapses";
