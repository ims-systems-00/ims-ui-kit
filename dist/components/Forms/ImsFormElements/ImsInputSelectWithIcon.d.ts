import React from "react";
import { SelectBaseProps } from "../Inputs/SelectBase";
interface ImsInputSelectWithIconProps extends SelectBaseProps {
    label: string;
    error?: string;
    icon: string;
    name: string;
    mandatory?: boolean;
    helperText?: string;
    onChange: (e: any) => void;
}
declare const ImsInputSelectWithIcon: React.FC<ImsInputSelectWithIconProps>;
export default ImsInputSelectWithIcon;
