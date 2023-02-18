import React from "react";
import { Accordion } from "reactstrap";

let AccordionBaseProps = Object.assign({}, Accordion.prototype?.props);

/**
 * @param {AccordionBaseProps} props
 * @returns
 * */

const AccordionBase = ({ children, ...rest }) => {
  return <Accordion {...rest}>{children}</Accordion>;
};

AccordionBase.propTypes = {
  ...(Accordion.propTypes && Accordion.propTypes),
};

export default AccordionBase;
