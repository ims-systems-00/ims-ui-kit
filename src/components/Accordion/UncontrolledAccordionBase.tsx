import React from "react";
import { UncontrolledAccordion, AccordionProps } from "reactstrap";

interface AccordionUncontrolledBaseProps extends AccordionProps {}

const UncontrolledAccordionBase: React.FC<AccordionUncontrolledBaseProps> = ({
  children,
  ...rest
}) => {
  return <UncontrolledAccordion {...rest}>{children}</UncontrolledAccordion>;
};

export default UncontrolledAccordionBase;
