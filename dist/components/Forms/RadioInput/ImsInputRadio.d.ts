import React from "react";
import { InputBaseProps } from "../Inputs/InputBase";
interface ImsInputRadioProps extends InputBaseProps {
    label: string;
    mandatory?: boolean;
    unselected?: boolean;
}
declare const ImsRadioCheckbox: React.FC<ImsInputRadioProps>;
export default ImsRadioCheckbox;
