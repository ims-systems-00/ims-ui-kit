import { Meta, StoryFn } from "@storybook/react/*";
import DefaultCarousel from "../Example/DefaultCarousel";
declare const _default: Meta<typeof DefaultCarousel>;
export default _default;
declare const Template: StoryFn<typeof DefaultCarousel>;
export { Template as Carousel };
export { default as ImsCarousel } from "../Example/ImsCarouselExample";
