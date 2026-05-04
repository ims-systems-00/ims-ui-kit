import { Meta, StoryFn } from "@storybook/react/*";
import ImsCardExample from "../Examples/ImsCardExample";
import React from "react";

export default {
  title: "components/ImsCard",
  component: ImsCardExample,
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
} as Meta<typeof ImsCardExample>;

// Define the type for the story
const Template: StoryFn<typeof ImsCardExample> = (args: any) => (
  <ImsCardExample {...args} />
);

Template.args = {};

export { Template as ImsCard };
