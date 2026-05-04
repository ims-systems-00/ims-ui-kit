import { Input } from "reactstrap";
import ImsInputTextDemo from "../ImsFormElements/Examples/ImsInputTextDemo";
import { Meta, StoryFn } from "@storybook/react/*";
import React from "react";

export default {
  title: "components/Forms/ImsFormElements",
  component: ImsInputTextDemo,
  parameters: {
    docs: {
      description: {
        component: `
[Bootstrap Alert](https://getbootstrap.com/docs/5.3/components/alerts/)
All our alerts are customized from the default bootstrap alerts. Only the customized portions are listed here.
        `,
      },
    },
  },
} as Meta<typeof ImsInputTextDemo>;

// Define the type for the story
const Template: StoryFn<typeof ImsInputTextDemo> = (args: any) => <ImsInputTextDemo {...args} />;

Template.args = {};

export { Template as InputText}

export { default as ImsInputTextWithIcon } from "../ImsFormElements/Examples/ImsInputTextWithIcon";
export { default as ImsInputSelect } from "../ImsFormElements/Examples/ImsInputSelect";
export { default as ImsInputSelectWithIcon } from "../ImsFormElements/Examples/ImsInputSelectWithIcon";
export { default as ImsInputTime } from "../ImsFormElements/Examples/ImsInputTime";
export { default as ImsInputDateAndTime } from "../ImsFormElements/Examples/ImsInputDateAndTime";
export { default as ImsInputDate } from "../ImsFormElements/Examples/ImsInputDate";
export { default as ImsDropZone } from "../ImsFormElements/Examples/ImsInputFileDropzone";
export { default as ImsInputRadio } from "../ImsFormElements/Examples/ImsInputRadio";
export { default as ImsInputCheckbox } from "../ImsFormElements/Examples/ImsInputCheck";
// export { default as ImsTextEditor } from "../ImsFormElements/Examples/ImsTextEditor";
