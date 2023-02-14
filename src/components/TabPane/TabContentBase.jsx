import React from "react";
import { TabContent } from "reactstrap";

let TabContentBaseProps = Object.assign({}, TabContent.prototype?.props);

/**
 *
 * @param {TabContentBaseProps} props
 * @returns
 */
const TabContentBase = ({ children, ...rest }) => {
  return <TabContent {...rest}>{children}</TabContent>;
};

TabContentBase.propTypes = {
  ...(TabContent.propTypes && TabContent.propTypes),
};

export default TabContentBase;
