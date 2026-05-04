import type { Meta, StoryFn } from "@storybook/react";
import React from "react";

// Define the type for the component meta
export default {
  title: "components/Typography",
  parameters: {
    docs: {
      description: {
        component: `
[Bootstrap Text](https://getbootstrap.com/docs/5.3/utilities/text/)
All our text are customized from the default bootstrap texts. Only the customized portions are listed here.
        `,
      },
    },
  },
};

export { default as Headers } from "../Headers";
export { default as BodyText } from "../BodyText";
