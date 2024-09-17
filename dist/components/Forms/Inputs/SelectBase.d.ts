import React from "react";
import { Props as ReactSelectProps } from "react-select";
declare const variants: {
    outline: string;
    filled: string;
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
declare const SelectBase: React.FC<SelectBaseProps>;
export default SelectBase;
