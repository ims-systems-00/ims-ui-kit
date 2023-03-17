import "../src/assets/css/nucleo-icons.css";
import "../src/assets/css/ims-icons.css";
import "react-notifications-component/dist/theme.css";
import "../src/assets/css/font-awesome-icons.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "../src/assets/scss/app.scss";
export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  backgrounds: {
    default: "iMS light mode",
    values: [
      {
        name: "iMS dark mode",
        value: "#1e1e2f",
      },
      {
        name: "iMS light mode",
        value: "#ffffff",
      },
    ],
  },
};
