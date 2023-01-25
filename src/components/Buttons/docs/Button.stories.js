import DefaultBtn from "../DefaultBtn";
export default {
  title: "components/Buttons",
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
export const DefaultButton = DefaultBtn;
export { default as PrimaryButton } from "../PrimaryBtn";
export { default as SecondaryButton } from "../SecondaryBtn";
