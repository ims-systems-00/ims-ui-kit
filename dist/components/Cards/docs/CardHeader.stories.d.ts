import { StoryFn } from "@storybook/react/*";
import CardHeader from "../CardHeaderBase";
import React from "react";
declare const _default: {
    title: string;
    component: React.FC<import("../CardHeaderBase").CardHeaderBaseProps>;
    parameters: {
        docs: {
            description: {
                component: string;
            };
        };
    };
};
export default _default;
declare const Template: StoryFn<typeof CardHeader>;
export { Template as CardHeader };
