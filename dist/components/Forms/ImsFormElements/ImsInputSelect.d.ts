import React from "react";
import { SelectBaseProps } from "../Inputs/SelectBase";
interface ImsInputSelectProps extends SelectBaseProps {
    label: string;
    error?: string;
    name?: string;
    options: any[];
    mandatory?: boolean;
    helperText?: string;
    sideBtn?: React.ReactNode;
    defaultOpt?: string;
}
declare const ImsInputSelect: React.FC<ImsInputSelectProps>;
export default ImsInputSelect;
