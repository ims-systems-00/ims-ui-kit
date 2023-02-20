import CardImg from "../CardImgBase"
export default {
  title: "components/CardImg",
  component: CardImg,
  parameters: {
    docs: {
      description: {
        component: ``,
      },
    },
  },
};
export const Default = CardImg;

Default.args = {
  children: "Click Here",
};
