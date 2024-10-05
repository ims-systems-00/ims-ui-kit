import React from "react";
import { AccordionHeader, AccordionHeaderProps } from "reactstrap";

interface AccordionHeaderBaseProps extends AccordionHeaderProps {}

const AccordionHeaderBase: React.FC<AccordionHeaderBaseProps> = ({
  children,
  ...rest
}) => {
  return <AccordionHeader {...rest}>{children}</AccordionHeader>;
};

export default AccordionHeaderBase;
