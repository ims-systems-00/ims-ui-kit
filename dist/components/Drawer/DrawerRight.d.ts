import React from "react";
interface DrawerRightProps {
    drawerId?: string;
    children: React.ReactNode;
    size?: number;
    zIndex?: number;
    toolbar?: React.ReactNode;
    containerRef?: React.RefObject<HTMLDivElement>;
    onDrawerClose?: () => void;
    onScroll?: () => void;
}
declare const DrawerRight: React.FC<DrawerRightProps>;
export default DrawerRight;
