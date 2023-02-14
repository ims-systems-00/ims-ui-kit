import DefaultModal from "../Examples/DefaultModal";

export default {
  title: "components/Modal",
  component: DefaultModal,
  parameters: {
    docs: {
      description: {
        component: `Modal is a component that is used to display content on top of the current page. It is used to display information that requires user interaction or to display a subtask within a workflow. It is also used to display a confirmation dialog before a user takes an action that cannot be undone. The modal dialog is a window overlaid on either the primary window or another dialog window. It is used to display information that is critical to the user's current task and requires a response, and prevent the user from interacting with the page behind the modal dialog.`,
      },
    },
  },
};

const Template = (args) => <DefaultModal {...args} />;
export const Default = Template.bind({});
Default.args = {};
