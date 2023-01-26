import React from "react";
import PropTypes from "prop-types";
import { Button } from "reactstrap";

let BtnBaseProps = Object.assign(
  {
    leftIcon: "",
    rightIcon: "",
  },
  Button.prototype.props
);

/**
 *
 * @param {BtnBaseProps} props
 * @returns
 */
const BtnBase = (props) => {
  return (
    <Button {...props}>
      {props.leftIcon ? <i className={sicon + " mr-2"} /> : null}
      {props.children}
      {props.rightIcon ? <i className={eicon + " ml-2"} /> : null}
    </Button>
  );
};

BtnBase.propTypes = {
  leftIcon: PropTypes.string,
  rightIcon: PropTypes.string,
  ...(Button.propTypes && Button.propTypes),
};

export default BtnBase;
