import React from "react";
interface ImsInputRadioBaseProps {
    label: string;
    name: string;
    values: any[];
    defaultChecked?: any;
    error?: string;
    mandatory?: boolean;
    helperText?: string;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
declare const ImsInputRadioBase: React.FC<ImsInputRadioBaseProps>;
export default ImsInputRadioBase;
