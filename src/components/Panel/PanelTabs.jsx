import React from "react";
import { Nav } from "../../index";

const PanelTabs = ({ children, onChange, value, ...props }) => {
  return (
    <React.Fragment>
      <div className="panel-tabs">
        <Nav tabs>
          {React.Children.map(children, (child, index) => {
            return React.cloneElement(child, {
              onClick: (e) => onChange(e, index),
              active: index === value,
              index: index,
              ...props,
            });
          })}
        </Nav>
      </div>
    </React.Fragment>
  );
};

export default PanelTabs;
