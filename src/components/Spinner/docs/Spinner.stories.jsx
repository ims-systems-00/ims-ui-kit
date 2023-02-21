import Spinner from "../SpinnerBase";
import Example from "../Example";

export default {
  title: "components/Spinner",
  component: Spinner,
  parameters: {
    docs: {
      description: {
        component: `
[Bootstrap Spinner](https://getbootstrap.com/docs/5.3/components/spinners/)
All our spinner are customised from the default bootstrap spinner. Only the customised portions are listed here.
`,
      },
    },
  },
};

export const Spinners = Spinner;
export const ExampleWithText = Example;
