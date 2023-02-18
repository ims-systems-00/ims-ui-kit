import React from "react";
import { InputGroup } from "reactstrap";

let InputGroupBaseProps = Object.assign({}, InputGroup.prototype.props);

/**
 *
 * @param {InputGroupBaseProps} props
 * @returns
 */

const InputGroupBase = ({ children, ...rest }) => {
  return <InputGroup {...rest}>{children}</InputGroup>;
};

InputGroupBase.propTypes = {
  ...(InputGroup.propTypes && InputGroup.propTypes),
};

export default InputGroupBase;
