import React from "react";
import { TabPane, TabPaneProps } from "reactstrap";

interface PanelWindowProps extends TabPaneProps {
  tabId: string;
}

const PanelWindow: React.FC<PanelWindowProps> = ({ children, tabId }) => {
  return (
    <React.Fragment>
      <TabPane tabId={tabId}>{children}</TabPane>
    </React.Fragment>
  );
};

export default PanelWindow;
