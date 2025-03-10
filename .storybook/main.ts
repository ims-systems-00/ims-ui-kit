module.exports = {
  // stories: ["../src/**/*.mdx", "../src/**/*.@(mdx|stories.@(js|jsx|ts|tsx))"],
  stories: ["../src/components/Alert/docs/Alert.stories.tsx",
    "../src/components/Alert/docs/UncontrolledAlert.stories.tsx",
    "../src/components/Badges/docs/Badge.stories.tsx",
    "../src/components/Accordion/docs/Accordion.stories.tsx",
    "../src/components/Accordion/docs/AccordionBody.stories.tsx",
    "../src/components/Activities/docs/Activity.stories.tsx",
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
