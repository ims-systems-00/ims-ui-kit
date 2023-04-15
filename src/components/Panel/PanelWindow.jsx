import React from "react";
import { TabPane } from "reactstrap";
const PanelWindow = ({ children, tabId }) => {
  return (
    <React.Fragment>
      <TabPane tabId={tabId}>{children}</TabPane>
    </React.Fragment>
  );
};

export default PanelWindow;
