import React from "react";
import { DatetimepickerProps } from "react-datetime";
declare const variants: {
    outline: string;
    filled: string;
};
export interface DateTimeBaseProps extends DatetimepickerProps {
    variant?: typeof variants;
}
declare const DateTimeBase: React.FC<DateTimeBaseProps>;
export default DateTimeBase;
