import React from "react";
import { AccordionHeader } from "reactstrap";

let AccordionHeaderBaseProps = Object.assign(
  {},
  AccordionHeader.prototype?.props
);

/**
 * @param {AccordionHeaderBaseProps} props
 * @returns
 * */

const AccordionHeaderBase = ({ children, ...rest }) => {
  return <AccordionHeader {...rest}>{children}</AccordionHeader>;
};

AccordionHeaderBase.propTypes = {
  ...(AccordionHeader.propTypes && AccordionHeader.propTypes),
};

export default AccordionHeaderBase;
