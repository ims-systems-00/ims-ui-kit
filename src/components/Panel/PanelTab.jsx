import classNames from "classnames";
import React from "react";
import NavItem from "../Nav/NavItemBase";
import NavLink from "../Nav/NavLinkBase";

const PanelTab = ({ children, onClick, active, index, label, ...props }) => {
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
