import PropTypes from "prop-types";
import ReactSelect from "react-select";

const ReactSelectBase = ({ ...rest }) => {
  return (
    <ReactSelect
      classNamePrefix="react-select"
      className="react-select"
      {...rest}
    />
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
  size: PropTypes.oneOf(["sm", "lg"]),
  word: PropTypes.string,
};

export default ReactSelectBase;
