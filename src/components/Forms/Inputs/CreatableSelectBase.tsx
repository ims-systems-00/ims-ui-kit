import React from "react";
import CreatableSelect, { CreatableProps } from "react-select/creatable";
import { formatCreateLabel } from "./utility";

export interface CreatableSelectBaseProps
  extends CreatableProps<any, any, any> {
  leftPhrase?: string;
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

const CreatableSelectBase: React.FC<CreatableSelectBaseProps> = ({
  leftPhrase = "Add",
  ...rest
}) => {
  return (
    <>
      <CreatableSelect
        className="react-select"
        classNamePrefix="react-select"
        formatCreateLabel={(inputValue) =>
          formatCreateLabel(leftPhrase, inputValue)
        }
        {...rest}
      />
    </>
  );
};

export default CreatableSelectBase;
