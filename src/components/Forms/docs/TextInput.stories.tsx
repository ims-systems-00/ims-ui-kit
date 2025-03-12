import { Meta, StoryFn } from "@storybook/react/*";
import ImsInputText from "../ImsFormElements/ImsInputText";
import React from "react";

export default {
  title: "components/Forms/TextInput",
  component: ImsInputText,
  parameters: {
    docs: {
      description: {
        component: `
[Bootstrap TextInput](https://getbootstrap.com/docs/5.3/components/alerts/)
All our TextInput are customized from the default bootstrap alerts. Only the customized portions are listed here.
        `,
      },
    },
  },
} as Meta<typeof ImsInputText>;

// Define the type for the story
const Template: StoryFn<typeof ImsInputText> = (args: any) => (
  <ImsInputText {...args} />
);

Template.args = {
  label: "Label Text",
  placeholder: "Placeholder Text",
  value: "",
};

export { Template as ImsInputText };

// export { default as DefaultInputText } from "../TextInput/Examples/DefaultInputText";
// export { default as GroupInputText } from "../TextInput/Examples/GroupInputText";
// export { default as InvalidTextInput } from "../TextInput/Examples/InvalidTextInput";
// export { default as SizeVariantsTextInput } from "../TextInput/Examples/TextInputSizes.jsx";
