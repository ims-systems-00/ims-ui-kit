import Texteditor from "../Index";
export default {
  title: "components/TextEdior",
  component: Texteditor,
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
export const Default = Texteditor;

Default.args = {
  mentionSuggestions: [
    {
      _id: "182973aSJLsddkhsd",
      name: "Reyad Hossain",
      profileImageUrl: "https://picsum.photos/200/300",
    },
    {
      _id: "182973sadadkhsd",
      name: "Samin israr",
      profileImageUrl: "https://picsum.photos/200/300",
    },
  ],
};
