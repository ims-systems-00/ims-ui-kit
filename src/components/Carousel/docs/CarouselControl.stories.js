import CarouselControl from "../CarouselControlBase"
export default {
  title: "components/CarouselControl",
  component: CarouselControl,
  parameters: {
    docs: {
      description: {
        component: ``,
      },
    },
  },
};
export const Default = CarouselControl;

Default.args = {
  children: "Click Here",
};
