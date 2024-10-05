import React from "react";
import { SelectBaseProps } from "../Inputs/SelectBase";
interface ImsInputSelectProps extends SelectBaseProps {
    label: string;
    error?: string;
    name: string;
    mandatory?: boolean;
    helperText?: string;
    sideBtn?: React.ReactNode;
    onChange: (e: any) => void;
}
declare const ImsInputSelect: React.FC<ImsInputSelectProps>;
export default ImsInputSelect;
