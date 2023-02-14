import Alert from "../Examples/DefaultAlert";
export default {
  title: "components/Alert",
  component: Alert,
  parameters: {
    docs: {
      description: {
        component: `
[Bootstrap Alert](https://getbootstrap.com/docs/5.3/components/alerts/)
All our alerts are customised from the default bootstrap alerts. Only the customised portions are listed here.
        `,
      },
    },
  },
};
export const Alerts = Alert;
Alerts.args = {};

export { default as UncontrolledAlert } from "../Examples/UncontrolledAlerts";
