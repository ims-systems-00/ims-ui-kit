import React from "react";
import { TabPaneProps } from "reactstrap";
interface PanelWindowProps extends TabPaneProps {
    tabId: string;
}
declare const PanelWindow: React.FC<PanelWindowProps>;
export default PanelWindow;
