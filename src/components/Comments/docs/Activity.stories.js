import SingleActivity from "../Examples/SingleActivity";
export default {
  title: "components/Activity",
  component: SingleActivity,
  parameters: {
    docs: {
      description: {
        component: `
[Bootstrap Text](https://getbootstrap.com/docs/5.3/utilities/text/)
All our text are customised from the default bootstrap texts. Only the customised portions are listed here.
        `,
      },
    },
  },
};
export const Activity = SingleActivity;

Activity.args = {
  children: "Click Here",
};
