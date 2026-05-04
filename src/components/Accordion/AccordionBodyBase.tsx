import React from "react";
import { AccordionBody, AccordionBodyProps } from "reactstrap";

interface AccordionBodyBaseProps extends AccordionBodyProps {}

const AccordionBodyBase: React.FC<AccordionBodyBaseProps> = ({
  children,
  ...rest
}) => {
  return <AccordionBody {...rest}>{children}</AccordionBody>;
};

export default AccordionBodyBase;
