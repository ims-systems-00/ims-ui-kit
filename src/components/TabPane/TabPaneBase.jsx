import React from "react";
import { TabPane } from "reactstrap";

const TabPaneBase = ({ children, ...rest }) => {
  return <TabPane {...rest}>{children}</TabPane>;
};

export default TabPaneBase;
