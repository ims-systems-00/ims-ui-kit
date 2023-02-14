import React from "react";
import { UncontrolledAccordion } from "reactstrap";

let AccordionUncontrolledBaseProps = Object.assign(
  {},
  UncontrolledAccordion.prototype?.props
);

const UncontrolledAccordionBase = ({ children, ...rest }) => {
  return <UncontrolledAccordion {...rest}>{children}</UncontrolledAccordion>;
};

UncontrolledAccordionBase.propTypes = {
  ...(UncontrolledAccordionBase.propTypes &&
    UncontrolledAccordionBase.propTypes),
};

export default UncontrolledAccordionBase;
