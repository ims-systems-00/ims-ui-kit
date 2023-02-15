import React from "react";
import { AccordionHeader } from "reactstrap";

let AccordionHeaderBaseProps = Object.assign(
  {},
  AccordionHeader.prototype?.props
);

const AccordionHeaderBase = ({ children, ...rest }) => {
  return <AccordionHeader {...rest}>{children}</AccordionHeader>;
};

AccordionHeaderBase.propTypes = {
  ...(AccordionHeaderBase.propTypes && AccordionHeaderBase.propTypes),
};

export default AccordionHeaderBase;
