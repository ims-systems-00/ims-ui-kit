import React from "react";
import { DateTimeBaseProps } from "../Inputs/DateTimeBase";
interface ImsInputTimeProps extends DateTimeBaseProps {
    label: string;
    name: string;
    value: string;
    onChange: (e: any) => void;
    error?: string;
    disabled?: boolean;
    helperText?: string;
}
declare const ImsInputTime: React.FC<ImsInputTimeProps>;
export default ImsInputTime;
