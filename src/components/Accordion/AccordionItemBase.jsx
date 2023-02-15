import React from "react";
import { AccordionItem } from "reactstrap";

let AccordionItemBaseProps = Object.assign({}, AccordionItem.prototype?.props);

/**
 * @param {AccordionItemBaseProps} props
 * @returns
 * */


const AccordionItemBase = ({ children, ...rest }) => {
  return <AccordionItem {...rest}>{children}</AccordionItem>;
};

AccordionItemBase.propTypes = {
  ...(AccordionItem.propTypes && AccordionItem.propTypes),
};
export default AccordionItemBase;
