import React from "react";
import { Button } from "reactstrap";
export default {
  title: "components/Button",
  component: Button,
};
const Template = (args) => <Button {...args} />;
export const Default = Template.bind({});
Default.args = {
  color: "primary",
  children: "Button",
};
export const Subtle = Template.bind({});
Subtle.args = {
  children: "Button",
};
