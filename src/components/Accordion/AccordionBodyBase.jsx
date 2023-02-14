import React from "react";
import { AccordionBody } from "reactstrap";

let AccordionBodyBaseProps = Object.assign({}, AccordionBody.prototype?.props);

const AccordionBodyBase = ({ children, ...rest }) => {
  return <AccordionBody {...rest}>{children}</AccordionBody>;
};

AccordionBodyBase.propTypes = {
  ...(AccordionBodyBase.propTypes && AccordionBodyBase.propTypes),
};

export default AccordionBodyBase;
