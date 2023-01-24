import "assets/css/nucleo-icons.css";
import "assets/css/ims-icons.css";
import "react-notifications-component/dist/theme.css";
import "assets/scss/app.scss";
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
