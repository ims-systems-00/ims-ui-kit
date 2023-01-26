import React from "react";
import PropTypes from "prop-types";
import { Button } from "reactstrap";

const BtnBase = ({ sicon, eicon, children, ...rest }) => {
  return (
    <Button {...rest}>
      {sicon ? <i className={sicon + " mr-2"} /> : null}
      {children}
      {eicon ? <i className={eicon + " ml-2"} /> : null}
    </Button>
  );
};
BtnBase.propTypes = {
  sicon: PropTypes.string,
  eicon: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.element,
  ]),
};

export default BtnBase;
