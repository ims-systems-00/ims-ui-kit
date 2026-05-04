import React from "react";
import { TabPane, TabPaneProps } from "reactstrap";

interface TabPaneBaseProps extends TabPaneProps {}

const TabPaneBase: React.FC<TabPaneBaseProps> = ({ children, ...rest }) => {
  return <TabPane {...rest}>{children}</TabPane>;
};

export default TabPaneBase;
