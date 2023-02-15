import Toast from "../Examples/DefaultToast";
export default {
  title: "components/Toast",
  component: Toast,
  parameters: {
    docs: {
      description: {
        component: `
[Bootstrap Toast](https://getbootstrap.com/docs/5.3/components/toasts/)
All our toasts are customised from the default bootstrap toasts. Only the customised portions are listed here.
        `,
      },
    },
  },
};
export const Toasts = Toast;
Toasts.args = {};
