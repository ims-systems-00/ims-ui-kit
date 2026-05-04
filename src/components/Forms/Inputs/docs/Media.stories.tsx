import { Meta, StoryFn } from "@storybook/react/*";
import Media from "../MediaBase";
import React from "react";
export default {
  title: "components/Media",
  component: Media,
  parameters: {
    docs: {
      description: {
        component: `
[Bootstrap Media](https://getbootstrap.com/docs/5.3/components/alerts/)
All our Media are customized from the default bootstrap alerts. Only the customized portions are listed here.
        `,
      },
    },
  },
} as Meta<typeof Media>;

// Define the type for the story
const Template: StoryFn<typeof Media> = (args: any) => <Media {...args} />;

Template.args = {
  children: "Click Here",
};

export { Template as Media };
