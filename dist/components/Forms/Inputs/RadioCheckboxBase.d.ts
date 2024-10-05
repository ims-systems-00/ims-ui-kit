import React from "react";
import { InputBaseProps } from "./InputBase";
export interface RadioCheckboxBaseProps extends InputBaseProps {
    label: string;
    mandatory?: boolean;
    unselected?: boolean;
}
declare const RadioCheckboxBase: React.FC<RadioCheckboxBaseProps>;
export default RadioCheckboxBase;
