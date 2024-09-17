import React from "react";
import { InputGroupBaseProps } from "../Inputs/InputGroupBase";
interface ImsInputTextWithIconProps extends InputGroupBaseProps {
    label: string;
    icon: string;
    type?: string;
    mandatory?: boolean;
    error?: string;
    defaultOpt?: string;
    helperText?: string;
}
declare const ImsInputTextWithIcon: React.FC<ImsInputTextWithIconProps>;
export default ImsInputTextWithIcon;
