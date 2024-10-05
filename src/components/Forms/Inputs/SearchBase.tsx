import React, { useState } from "react";
import AsyncSelect, { AsyncProps } from "react-select/async";

interface SearchBaseProps extends AsyncProps<any, any, any> {
  isClearable?: boolean;
  isSearchable?: boolean;
  isDisabled?: boolean;
  isMulti?: boolean;
  isRtl?: boolean;
  // isOptionDisabled?: any;
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

const SearchBase: React.FC<SearchBaseProps> = ({ loadOptions, ...rest }) => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const onInputChange = (value: string) => {
    if (value.length > 0) {
      setMenuIsOpen(true);
    } else {
      setMenuIsOpen(false);
    }
  };
  return (
    <>
      <AsyncSelect
        className="react-select"
        classNamePrefix="react-select"
        loadOptions={loadOptions}
        onInputChange={onInputChange}
        menuIsOpen={menuIsOpen}
        {...rest}
      />
    </>
  );
};

export default SearchBase;
