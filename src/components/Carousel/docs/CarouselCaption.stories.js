import CarouselCaption from "../CarouselCaptionBase"
export default {
  title: "components/CarouselCaption",
  component: CarouselCaption,
  parameters: {
    docs: {
      description: {
        component: ``,
      },
    },
  },
};
export const Default = CarouselCaption;

Default.args = {
  children: "Click Here",
};
