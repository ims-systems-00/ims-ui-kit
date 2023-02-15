import React from "react";
import { Input } from "reactstrap";


let InputBaseProps = Object.assign({}, Input.prototype.props);

/**
 *
 * @param {InputBaseProps} props
 * @returns
 */

const InputBase = ({ ...rest }) => {
  return <Input {...rest} />;
};

InputBase.propTypes = {
  ...(Input.propTypes && Input.propTypes),
};

export default InputBase;
