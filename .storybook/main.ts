module.exports = {
  // stories: ["../src/**/*.mdx", "../src/**/*.@(mdx|stories.@(js|jsx|ts|tsx))"],
  stories: ["../src/components/Alert/docs/Alert.stories.tsx",
    "../src/components/Alert/docs/UncontrolledAlert.stories.tsx",
    "../src/components/Accordion/docs/Accordion.stories.tsx",
    "../src/components/Accordion/docs/AccordionBody.stories.tsx",
    "../src/components/Activities/docs/Activity.stories.tsx",
    "../src/components/Badges/docs/Badge.stories.tsx",
    "../src/components/Breadcrumb/docs/Breadcrumb.stories.tsx",
    "../src/components/Buttons/docs/Button.stories.tsx",
    "../src/components/Cards/docs/Card.stories.tsx",
    "../src/components/Progress/docs/Progress.stories.tsx",
    "../src/components/Spinner/docs/Spinner.stories.tsx",
    "../src/components/Typography/docs/Typography.stories.tsx",
    "../src/components/Tooltip/docs/Tooltip.stories.tsx",
    "../src/components/Toast/docs/Toast.stories.tsx",
    "../src/components/TabPane/docs/Tabpane.stories.tsx",
  ],
  staticDirs: ["public"],

  addons: [
    "@storybook/addon-docs",
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/preset-create-react-app",
    "@chromatic-com/storybook",
  ],

  framework: {
    name: "@storybook/react-webpack5",
    options: {},
  },

  docs: {
    autodocs: true,
  },
};
