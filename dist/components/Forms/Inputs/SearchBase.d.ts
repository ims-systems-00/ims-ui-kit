import React from "react";
import { AsyncProps } from "react-select/async";
interface SearchBaseProps extends AsyncProps<any, any, any> {
    isClearable?: boolean;
    isSearchable?: boolean;
    isDisabled?: boolean;
    isMulti?: boolean;
    isRtl?: boolean;
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
declare const SearchBase: React.FC<SearchBaseProps>;
export default SearchBase;
