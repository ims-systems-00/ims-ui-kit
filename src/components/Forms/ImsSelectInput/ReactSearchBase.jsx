import PropTypes from "prop-types";
import React from "react";
import AsyncSelect from "react-select/async";
import { style } from "./utility";

const ReactSearchBase = ({ loadOptions, ...rest }) => {
  const [menuIsOpen, setMenuIsOpen] = React.useState(false);
  const onInputChange = (value) => {
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

ReactSearchBase.propTypes = {
  // ...ReactSelect.propTypes,
  isClearable: PropTypes.bool,
  isSearchable: PropTypes.bool,
  isDisabled: PropTypes.bool,
  isMulti: PropTypes.bool,
  isRtl: PropTypes.bool,
  //   isOptionDisabled: PropTypes.func,
  isOptionSelected: PropTypes.func,
  isOptionFocused: PropTypes.func,
  isFocused: PropTypes.bool,
  isLoading: PropTypes.bool,
  isInvalid: PropTypes.bool,
  isRequired: PropTypes.bool,
  isCreatable: PropTypes.bool,
  isMenuOpen: PropTypes.bool,
  isMenuFixed: PropTypes.bool,
  isMenuPortal: PropTypes.bool,
  isMenuPositioned: PropTypes.bool,
  isMenuPositionFixed: PropTypes.bool,
  isMenuAutoFocused: PropTypes.bool,
  isControlled: PropTypes.bool,
  isFocusedOption: PropTypes.bool,
  isHidden: PropTypes.bool,
  size: PropTypes.oneOf(["sm", "lg"]),
  word: PropTypes.string,
};

export default ReactSearchBase;
