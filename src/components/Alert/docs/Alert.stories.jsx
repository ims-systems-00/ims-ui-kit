import Alert from "../UncontrolledAlertBase";
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
Alerts.args = {
  children: "This is an alert",
};
export { default as UncontrolledAlerts } from "../UncontrolledAlertBase";
