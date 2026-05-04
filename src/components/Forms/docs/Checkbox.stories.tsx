import { Meta, StoryFn } from "@storybook/react/*";
import ImsInputCheck from "../ImsFormElements/ImsInputCheck";
import React from "react";

export default {
  title: "components/Forms/Checkbox",
  component: ImsInputCheck,
  parameters: {
    docs: {
      description: {
        component: `
[Bootstrap ImsInputCheck](https://getbootstrap.com/docs/5.3/components/alerts/)
All our ImsInputCheck are customized from the default bootstrap alerts. Only the customized portions are listed here.
        `,
      },
    },
  },
} as Meta<typeof ImsInputCheck>;

// Define the type for the story
const Template: StoryFn<typeof ImsInputCheck> = (args: any) => (
  <ImsInputCheck {...args} />
);

Template.args = {
  label: "Label Text",
  value: "",
};

export { Template as ImsInputCheck };

export { default as ControlledCheckbox } from "../CheckboxInput/Examples/ControlledCheckbox";
export { default as DefaultCheckbox } from "../CheckboxInput/Examples/DefaultCheckbox";
export { default as UnselectedCheckbox } from "../CheckboxInput/Examples/UnselectedCheckbox";
