import React from "react";
import PropTypes from "prop-types";
import { Button } from "reactstrap";

const BtnBase = ({ ficon, eicon, children, ...rest }) => {
  return (
    <Button {...rest}>
      {ficon ? <i className={ficon + " mr-2"} /> : null}
      {children}
      {eicon ? <i className={eicon + " ml-2"} /> : null}
    </Button>
  );
};
BtnBase.propTypes = {
  ficon: PropTypes.string,
  eicon: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.element,
  ]),
};

export default BtnBase;
