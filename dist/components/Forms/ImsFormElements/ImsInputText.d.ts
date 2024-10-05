import React from "react";
import { InputBaseProps } from "../Inputs/InputBase";
export interface ImsInputTextProps extends InputBaseProps {
    leftIcon?: string;
    rightIcon?: string;
    leftIconStyle?: string;
    rightIconStyle?: string;
    label?: string;
    mandatory?: boolean;
    error?: string;
    helperText?: string;
    valid?: boolean;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    labelCol?: string;
    inputCol?: string;
    value?: string;
    placeholder?: string;
}
declare const ImsInputText: React.FC<ImsInputTextProps>;
export default ImsInputText;
