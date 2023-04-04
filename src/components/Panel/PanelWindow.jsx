import React from "react";
import { TabPane, TabContent } from "../../index";

const PanelWindow = ({ children, value, index, ...props }) => {
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`ims-tabpanel-${index}`}
      aria-labelledby={`ims-tab-${index}`}
      {...props}
    >
      {value === index && (
        <TabContent>
          <TabPane>{children}</TabPane>
        </TabContent>
      )}
    </div>
  );
};

export default PanelWindow;
