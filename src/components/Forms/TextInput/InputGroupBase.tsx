import React from "react";
import { InputGroup } from "reactstrap";

type InputGroupBaseProps = typeof InputGroup.prototype.props;

/**
 *
 * @param {InputGroupBaseProps} props
 * @returns
 */

const InputGroupBase = ({ children, ...rest }: InputGroupBaseProps) => {
  return <InputGroup {...rest}>{children}</InputGroup>;
};

InputGroupBase.propTypes = {
  ...(InputGroup.propTypes && InputGroup.propTypes),
};

export default InputGroupBase;
