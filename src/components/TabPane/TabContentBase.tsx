import React from "react";
import { TabContent, TabContentProps } from "reactstrap";

interface TabContentBaseProps extends TabContentProps {}

const TabContentBase: React.FC<TabContentBaseProps> = ({
  children,
  ...rest
}) => {
  return <TabContent {...rest}>{children}</TabContent>;
};

export default TabContentBase;
