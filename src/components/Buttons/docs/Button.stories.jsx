import Button from "../ButtonBase";
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
export { default as ButtonSizes } from "../Examples/BtnsSize";
export { default as DangerButton } from "../Examples/DangerBtn";
export { default as DarkButton } from "../Examples/DarkBtn";
export { default as IconButton } from "../Examples/IconBtn";
export { default as LinkButton } from "../Examples/LinkBtn";
export { default as PrimaryButton } from "../Examples/PrimaryBtn";
export { default as SecondaryButton } from "../Examples/SecondaryBtn";
export { default as ButtonGroup } from "../Examples/BtnGroup";
export { default as ToggleButton } from "../Examples/BtnToggle";
export { default as ButtonToolbar } from "../Examples/BtnToolbar";
export { default as CloseButton } from "../Examples/CloseBtn";
export { default as ButtonDropdown } from "../Examples/BtnDropDown";
export {default as DisabledButton} from "../Examples/DisabledButton";
