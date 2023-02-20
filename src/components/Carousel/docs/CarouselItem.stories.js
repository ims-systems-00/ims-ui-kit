import CarouselItem from "../CarouselItemBase"
export default {
  title: "components/CarouselItem",
  component: CarouselItem,
  parameters: {
    docs: {
      description: {
        component: ``,
      },
    },
  },
};
export const Default = CarouselItem;

Default.args = {
  children: "Click Here",
};
