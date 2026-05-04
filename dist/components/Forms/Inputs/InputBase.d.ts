import React from "react";
import { InputProps } from "reactstrap";
export interface InputBaseProps extends InputProps {
    variant?: "outline" | "filled";
}
declare const InputBase: React.FC<InputBaseProps>;
export default InputBase;
