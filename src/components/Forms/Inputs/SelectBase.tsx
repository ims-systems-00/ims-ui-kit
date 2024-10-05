import React from "react";
import classNames from "classnames";
import ReactSelect, { Props as ReactSelectProps } from "react-select";

const variants = {
  outline: "outline",
  filled: "filled",
};

export interface SelectBaseProps extends ReactSelectProps {
  variant?: typeof variants;
  isClearable?: boolean;
  isSearchable?: boolean;
  isDisabled?: boolean;
  isMulti?: boolean;
  isRtl?: boolean;
  isOptionDisabled?: any;
  isOptionSelected?: any;
  isOptionFocused?: any;
  isFocused?: boolean;
  isLoading?: boolean;
  isInvalid?: boolean;
  isRequired?: boolean;
  isCreatable?: boolean;
  isMenuOpen?: boolean;
  isMenuFixed?: boolean;
  isMenuPortal?: boolean;
  isMenuPositioned?: boolean;
  isMenuPositionFixed?: boolean;
  isMenuAutoFocused?: boolean;
  isControlled?: boolean;
  isFocusedOption?: boolean;
  isHidden?: boolean;
  size?: "sm" | "lg";
  word?: string;
}

const SelectBase: React.FC<SelectBaseProps> = ({
  variant = variants.outline,
  ...rest
}) => {
  return (
    <ReactSelect
      {...rest}
      classNamePrefix="react-select"
      className={classNames("react-select " + rest.className, {
        "react-select-filled": variant === variants.filled,
      })}
    />
  );
};

export default SelectBase;
