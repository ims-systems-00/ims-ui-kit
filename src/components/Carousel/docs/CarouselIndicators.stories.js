import CarouselIndicators from "../CarouselIndicatorsBase"
export default {
  title: "components/CarouselIndicators",
  component: CarouselIndicators,
  parameters: {
    docs: {
      description: {
        component: ``,
      },
    },
  },
};
export const Default = CarouselIndicators;

Default.args = {
  children: "Click Here",
};
