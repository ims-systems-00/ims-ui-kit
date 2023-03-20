import Badge from "../BadgeBase";

export default {
  title: "components/Badges",
  component: Badge,
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
};
export const Badges = Badge;

Badges.args = {
  children: "Default",
};

export { default as DefaultBadge } from "../Examples/DefaultBadge";
export { default as BadgeVariants } from "../Examples/BadgeVariants";
export { default as PillBadge } from "../Examples/PillBadges";
export { default as LinkBadges } from "../Examples/LinkBadges";
export { default as OutlineBadge } from "../Examples/OutlineBadges";
export { default as FadeBadge } from "../Examples/FadeBadges";
export { default as IconBadge } from "../Examples/IconBadges";
export { default as BadgeSizes } from "../Examples/BadgeSizes";
export { default as ButtonBadge } from "../Examples/ButtonBadge";
