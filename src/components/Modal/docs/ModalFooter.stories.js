import ModalFooter from "../ModalFooterBase"
export default {
    title: "components/ModalFooter",
    component: ModalFooter,
    parameters: {
        docs: {
            description: {
                component: ``,
            },
        },
    },
};
export const Default = ModalFooter;

Default.args = {
    children: "Click Here",
};
