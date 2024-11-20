import React from "react";
import { Accordion, AccordionProps } from "reactstrap";

interface AccordionBaseProps extends AccordionProps {}

const AccordionBase: React.FC<AccordionBaseProps> = ({ children, ...rest }) => {
  return <Accordion {...rest}>{children}</Accordion>;
};

export default AccordionBase;
