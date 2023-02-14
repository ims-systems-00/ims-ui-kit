import React from "react";
import { AccordionItem } from "reactstrap";

let AccordionItemBaseProps = Object.assign({}, AccordionItem.prototype?.props);

const AccordionItemBase = ({ children, ...rest }) => {
  return <AccordionItem {...rest}>{children}</AccordionItem>;
};

AccordionItemBase.propTypes = {
  ...(AccordionItemBase.propTypes && AccordionItemBase.propTypes),
};
export default AccordionItemBase;
