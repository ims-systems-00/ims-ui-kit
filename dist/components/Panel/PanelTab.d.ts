import React from "react";
interface PanelTabProps {
    children: React.ReactNode;
    onClick: (e: React.MouseEvent) => void;
    active: boolean;
    index: number;
    label: string;
    [key: string]: any;
}
declare const PanelTab: React.FC<PanelTabProps>;
export default PanelTab;
