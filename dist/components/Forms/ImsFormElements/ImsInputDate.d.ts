import React from "react";
import { DateTimeBaseProps } from "../Inputs/DateTimeBase";
interface ImsInputDateProps extends DateTimeBaseProps {
    label?: string;
    name?: string;
    value?: string;
    error?: string;
    mandatory?: boolean;
    disabled?: boolean;
    helperText?: string;
    onChange?: (e: unknown) => void;
}
declare const ImsInputDate: React.FC<ImsInputDateProps>;
export default ImsInputDate;
