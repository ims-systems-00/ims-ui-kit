import { Meta, StoryFn } from "@storybook/react/*";
import Offcanvas from "../OffcanvasBase";
import React from "react";
export default {
  title: "components/Offcanvas",
  component: Offcanvas,
  parameters: {
    docs: {
      description: {
        component: `
[Bootstrap Offcanvas](https://getbootstrap.com/docs/5.3/components/alerts/)
All our Offcanvas are customized from the default bootstrap alerts. Only the customized portions are listed here.
        `,
      },
    },
  },
} as Meta<typeof Offcanvas>;

// Define the type for the story
const Template: StoryFn<typeof Offcanvas> = (args: any) => (
  <Offcanvas {...args} />
);

Template.args = {
  children: "Click Here",
};

export { Template as Alert };
