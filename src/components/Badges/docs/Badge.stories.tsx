import type { Meta, StoryFn } from "@storybook/react";
import Badge from "../Examples/DefaultBadge";
import React from "react";

export default {
  title: "components/Badges",
  component: Badge,
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
} as Meta<typeof Badge>;

// Define the type for the story
const Template: StoryFn<typeof Badge> = (args: any) => <Badge {...args} />;

Template.args = {
  children: "Default",
};

export { Template as Badge };

export { default as BadgeVariants } from "../Examples/BadgeVariants";
export { default as PillBadge } from "../Examples/PillBadges";
export { default as LinkBadges } from "../Examples/LinkBadges";
export { default as OutlineBadge } from "../Examples/OutlineBadges";
export { default as FadeBadge } from "../Examples/FadeBadges";
export { default as IconBadge } from "../Examples/IconBadges";
export { default as BadgeSizes } from "../Examples/BadgeSizes";
export { default as ButtonBadge } from "../Examples/ButtonBadge";
