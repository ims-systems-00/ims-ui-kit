import React from "react";
import { NavItem, NavLink } from "../../index";
import classNames from "classnames";

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
