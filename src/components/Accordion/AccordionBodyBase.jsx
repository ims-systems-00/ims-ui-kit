import React from "react";
import { AccordionBody } from "reactstrap";

let AccordionBodyBaseProps = Object.assign({}, AccordionBody.prototype?.props);
/**
 * @param {AccordionBodyBaseProps} props
 * @returns
 * */

const AccordionBodyBase = ({ children, ...rest }) => {
  return <AccordionBody {...rest}>{children}</AccordionBody>;
};

AccordionBodyBase.propTypes = {
  ...(AccordionBody.propTypes && AccordionBody.propTypes),
};

export default AccordionBodyBase;
