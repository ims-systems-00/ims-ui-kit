import React from "react";
import classNames from "classnames";
import NavItem from "../Nav/NavItemBase";
import NavLink from "../Nav/NavLinkBase";

interface PanelTabProps {
  children: React.ReactNode;
  onClick: (e: React.MouseEvent) => void;
  active: boolean;
  index: number;
  label: string;
  [key: string]: any;
}

const PanelTab: React.FC<PanelTabProps> = ({
  children,
  onClick,
  active,
  index,
  label,
  ...props
}) => {
  return (
    <React.Fragment>
      <NavItem {...props}>
        <NavLink
          data-toggle="tab"
          href="#"
          className={classNames("nav-link", {
            " active": active,
          })}
          onClick={onClick}
          id={`ims-tab-${index}`}
          aria-controls={`ims-tabpanel-${index}`}
          {...props}
        >
          {children}
        </NavLink>
      </NavItem>
    </React.Fragment>
  );
};

export default PanelTab;
