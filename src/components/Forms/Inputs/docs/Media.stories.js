import Media from "../MediaBase"
export default {
  title: "components/Media",
  component: Media,
  parameters: {
    docs: {
      description: {
        component: ``,
      },
    },
  },
};
export const Default = Media;

Default.args = {
  children: "Click Here",
};
