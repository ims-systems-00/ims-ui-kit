import React from "react";
import { SelectBaseProps } from "../Inputs/SelectBase";
interface ImsInputSelectWithIconProps extends SelectBaseProps {
    label: string;
    error?: string;
    icon: string;
    name?: string;
    options?: any[];
    mandatory?: boolean;
    helperText?: string;
    onChange: (e: any) => void;
    defaultOpt?: string;
}
declare const ImsInputSelectWithIcon: React.FC<ImsInputSelectWithIconProps>;
export default ImsInputSelectWithIcon;
