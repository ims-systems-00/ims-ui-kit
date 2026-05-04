import React from "react";
import Nav from "../NavBase";
import NavItem from "../NavItemBase";
import NavLink from "../NavLinkBase";
import { Meta, StoryFn } from "@storybook/react/*";

export default {
  title: "components/Tabs",
  component: Nav,
  parameters: {
    docs: {
      description: {
        component: `
[Bootstrap Nav](https://getbootstrap.com/docs/5.3/components/alerts/)
All our Nav are customized from the default bootstrap alerts. Only the customized portions are listed here.
        `,
      },
    },
  },
} as Meta<typeof Nav>;

// Define the type for the story
const Template: StoryFn<typeof Nav> = (args: any) => <Nav {...args} />;

Template.args = {
  tabs: true,
  children: (
    <>
      <NavItem>
        <NavLink active href="#">
          Tab 1
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink href="#">Tab 2</NavLink>
      </NavItem>
      <NavItem>
        <NavLink href="#">Tab 3</NavLink>
      </NavItem>
    </>
  ),
};

export { Template as Nav };

export { default as Tabs } from "../Examples/TabsVariants";
export { default as TabPanel } from "../Examples/TabsPanelExample";
