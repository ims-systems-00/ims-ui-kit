import React from "react";
import { UncontrolledAccordion } from "reactstrap";

let AccordionUncontrolledBaseProps = Object.assign(
  {},
  UncontrolledAccordion.prototype?.props
);

/**
 * @param {AccordionUncontrolledBaseProps} props
 * @returns
 * */

const UncontrolledAccordionBase = ({ children, ...rest }) => {
  return <UncontrolledAccordion {...rest}>{children}</UncontrolledAccordion>;
};

UncontrolledAccordionBase.propTypes = {
  ...(UncontrolledAccordion.propTypes &&
    UncontrolledAccordion.propTypes),
};

export default UncontrolledAccordionBase;
