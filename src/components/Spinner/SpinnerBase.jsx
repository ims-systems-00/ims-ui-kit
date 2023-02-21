import React from "react";
import { Spinner } from "reactstrap";

let SpinnerBaseProps = Object.assign({}, Spinner.prototype.props);

/**
 * @param {SpinnerBaseProps} props
 * @returns
 * */

const SpinnerBase = ({ children, ...rest }) => {
  return <Spinner {...rest}>{children}</Spinner>;
};

SpinnerBase.propTypes = {
  ...(Spinner.propTypes && Spinner.propTypes),
};

export default SpinnerBase;
