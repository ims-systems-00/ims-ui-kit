import React from "react";
import { InputBaseProps } from "../Inputs/InputBase";
interface ImsInputCheckProps extends InputBaseProps {
    label: string;
    mandatory?: boolean;
    unselected?: boolean;
    error?: string;
    helperText?: string;
}
declare const ImsInputCheck: React.FC<ImsInputCheckProps>;
export default ImsInputCheck;
