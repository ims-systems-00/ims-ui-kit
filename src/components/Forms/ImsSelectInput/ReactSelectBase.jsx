import React from "react";
import ReactSelect from "react-select";
import PropTypes from "prop-types";
import IndicatorSeparator from "./SelectComponents/IndicatorSeparator";

const ReactSelectBase = ({ height = 36, ...rest }) => {
  const style = {
    control: (provided, state) => ({
      ...provided,
      height: `${height}px`,
      border: `1px solid ${state.isFocused ? "#1D8BF8" : "#CED4DA"}`,
      boxShadow: state.isFocused ? "0 0 0 1px #1D8BF8" : "none",
      "&:hover": {
        borderColor: `${state.isFocused ? "#1D8BF8" : "#CED4DA"}`,
      },
    }),
  };

  return (
    <>
      <ReactSelect
        styles={style}
        components={{
          IndicatorSeparator,
          ...(rest.components || {}),
        }}
        {...rest}
      />
    </>
  );
};

ReactSelect.propTypes = {
  // ...ReactSelect.propTypes,
  isClearable: PropTypes.bool,
  isSearchable: PropTypes.bool,
  isDisabled: PropTypes.bool,
  isMulti: PropTypes.bool,
  isRtl: PropTypes.bool,
  isOptionDisabled: PropTypes.func,
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
};

export default ReactSelectBase;
