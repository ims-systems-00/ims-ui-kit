import ImsCardExample from "../Examples/ImsCardExample";

export default {
  title: "components/ImsCard",
  component: ImsCardExample,
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
export const ImsCard = (args) => <ImsCardExample {...args} />;

ImsCard.args = {};
