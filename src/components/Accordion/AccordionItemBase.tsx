import React from "react";
import { AccordionItem, AccordionItemProps } from "reactstrap";

interface AccordionItemBaseProps extends AccordionItemProps {}

const AccordionItemBase: React.FC<AccordionItemBaseProps> = ({
  children,
  ...rest
}) => {
  return <AccordionItem {...rest}>{children}</AccordionItem>;
};

export default AccordionItemBase;
