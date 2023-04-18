import DefaultCarousel from "../Example/DefaultCarousel";

export default {
  title: "components/Carousel",
  component: DefaultCarousel,
  parameters: {
    docs: {
      description: {
        component: ``,
      },
    },
  },
};
export const Default = DefaultCarousel;

Default.args = {};

export { default as ImsCarousel } from "../Example/ImsCarouselExample";
