import React from "react";
import { TabContent } from "reactstrap";

const TabContentBase = ({ children, ...rest }) => {
  return <TabContent {...rest}>{children}</TabContent>;
};

export default TabContentBase;
