import Nav from "../../Nav/NavBase";
import NavItem from "../../Nav/NavItemBase";
import NavLink from "../../Nav/NavLinkBase";
export default {
  title: "components/Tabs",
  component: Nav,
};
const Template = (args) => <Nav {...args} />;
export const DefaultTab = Template;
DefaultTab.args = {
  tabs: true,
  children: (
    <>
      <NavItem>
        <NavLink active href="#">Tab 1</NavLink>
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

export { default as FullTabs } from "../Examples/FullTabs";
export { default as IndividualTabs } from "../Examples/IndividualTabs";
