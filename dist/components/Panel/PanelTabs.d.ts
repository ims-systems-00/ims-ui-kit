import React from "react";
interface PanelTabsProps {
    children: React.ReactNode;
    activeTab?: number;
    variant?: "primary" | "secondary" | "outline";
    [key: string]: any;
}
declare const PanelTabs: React.FC<PanelTabsProps>;
export default PanelTabs;
