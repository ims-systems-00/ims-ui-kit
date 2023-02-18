import ModalHeader from "../ModalHeaderBase"
export default {
    title: "components/ModalHeader",
    component: ModalHeader,
    parameters: {
        docs: {
            description: {
                component: ``,
            },
        },
    },
};
export const Default = ModalHeader;

Default.args = {
    children: "Click Here",
};
