import Button from "../BtnBase";
export default {
  title: "components/Buttons",
  component: Button,
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
export const Buttons = Button;

Buttons.args = {
  children: "Click Here",
};
export { default as IconButton } from "../IconBtn";
export { default as ButtonSizes } from "../BtnsSize";
export { default as PrimaryButton } from "../PrimaryBtn";
export { default as SecondaryButton } from "../SecondaryBtn";
export { default as DangerButton } from "../DangerBtn";
export { default as DarkButton } from "../DarkBtn";
export { default as LinkButton } from "../LinkBtn";
