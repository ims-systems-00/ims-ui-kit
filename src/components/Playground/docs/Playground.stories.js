import Playground from "../Playground";

export default {
  title: "components/Playground",
  component: Playground,
};
const Template = (args) => <Playground {...args} />;
export const PlayGround = Template;

PlayGround.args = {};

export { default as ModalPlayground } from "../Examples/ModalPlayground";
export { default as ProgressPlayground } from "../Examples/ProgressPlayground";
