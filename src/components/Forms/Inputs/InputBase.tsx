import React from "react";
import classNames from "classnames";
import { Input, InputProps } from "reactstrap";

export interface InputBaseProps extends InputProps {
  variant?: "outline" | "filled";
}

const variants = {
  outline: "outline",
  filled: "filled",
};

const InputBase: React.FC<InputBaseProps> = ({
  variant = variants.outline,
  ...props
}) => {
  return (
    <Input
      {...props}
      className={classNames(props.className || "", {
        "form-control-filled": variant === variants.filled,
      })}
    >
      {props.children}
    </Input>
  );
};

export default InputBase;
