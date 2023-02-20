import Carousel from "../CarouselBase"
export default {
  title: "components/Carousel",
  component: Carousel,
  parameters: {
    docs: {
      description: {
        component: ``,
      },
    },
  },
};
export const Default = Carousel;

Default.args = {
  children: "Click Here",
};
