import React from "react";
interface DrawerOpenerProps {
    drawerId?: string;
    onClick?: (e: React.MouseEvent) => void;
    children: React.ReactNode;
}
declare const DrawerOpener: React.FC<DrawerOpenerProps>;
export default DrawerOpener;
