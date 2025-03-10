import type { Meta, StoryObj } from '@storybook/react';
import UncontrolledAlert from "../UncontrolledAlertBase";
import React from 'react';

// Define the type for the component meta
export default {
  title: "components/UncontrolledAlert",
  component: UncontrolledAlert,
  parameters: {
    docs: {
      description: {
        component: ``,
      },
    },
  },
} as Meta<typeof UncontrolledAlert>;

// Define the type for the story
const Default: StoryObj<typeof UncontrolledAlert> = {
  render: (args) => (
    <UncontrolledAlert {...args} />
  ),
  args: {
    children: "Click Here",
  }
};

export { Default };
