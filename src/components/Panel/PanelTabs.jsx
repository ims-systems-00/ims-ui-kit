import React from "react";
import Nav from "../Nav/NavBase";
import TabContent from "../TabPane/TabContentBase";
import PanelWindow from "./PanelWindow";
import PanelTab from "./PanelTab";

const PanelTabs = ({ children, activeTab = 0, variant, ...props }) => {
  const [value, setValue] = React.useState(activeTab);

  const handleChange = (e, index) => {
    setValue(index);
  };

  return (
    <React.Fragment>
      <div className="panel-tabs">
        <Nav tabs variant={variant && variant}>
          {React.Children.map(children, (child, index) => {
            if (child.type === PanelTab)
              return React.cloneElement(child, {
                onClick: (e) => handleChange(e, index),
                active: index === value,
                index: index,
                ...props,
              });
          })}
        </Nav>
        <TabContent activeTab={value} className="panel-windows" {...props}>
          {React.Children.map(children, (child, index) => {
            if (child.type === PanelWindow)
              return React.cloneElement(child, {
                ...props,
              });
          })}
        </TabContent>
      </div>
    </React.Fragment>
  );
};

export default PanelTabs;
