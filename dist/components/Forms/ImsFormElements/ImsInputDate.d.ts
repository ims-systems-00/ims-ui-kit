import React from "react";
import { Moment } from "moment";
import { DateTimeBaseProps } from "../Inputs/DateTimeBase";
type OnChangeParams = React.FormEvent<HTMLInputElement> | Event | string | Moment;
interface ImsInputDateProps extends DateTimeBaseProps {
    label: string;
    name: string;
    value: string;
    error?: string;
    mandatory?: boolean;
    disabled?: boolean;
    helperText?: string;
    onChange: (e: OnChangeParams) => void;
}
declare const ImsInputDate: React.FC<ImsInputDateProps>;
export default ImsInputDate;
