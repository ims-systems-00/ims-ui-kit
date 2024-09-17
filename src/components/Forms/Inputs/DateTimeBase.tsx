import React from "react";
import classNames from "classnames";
import Datetime, { DatetimepickerProps } from "react-datetime";

const variants = {
  outline: "outline",
  filled: "filled",
};

export interface DateTimeBaseProps extends DatetimepickerProps {
  variant?: typeof variants;
}

const DateTimeBase: React.FC<DateTimeBaseProps> = ({
  variant = variants.outline,
  ...rest
}) => {
  return (
    <Datetime
      className={classNames(rest.className || "", {
        "form-control-filled": variant === variants.filled,
      })}
      {...rest}
    />
  );
};

export default DateTimeBase;
