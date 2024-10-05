import React from "react";
import useDrawer from "./store/useDrawer";

interface DrawerOpenerProps {
  drawerId?: string;
  onClick?: (e: React.MouseEvent) => void;
  children: React.ReactNode;
}

const DrawerOpener: React.FC<DrawerOpenerProps> = ({
  drawerId = "",
  children,
  onClick = () => {},
  ...rest
}) => {
  const { openDrawer } = useDrawer();
  return (
    <span
      onClick={(e) => {
        openDrawer(drawerId);
        onClick(e);
      }}
      {...rest}
    >
      {children}
    </span>
  );
};
export default DrawerOpener;
