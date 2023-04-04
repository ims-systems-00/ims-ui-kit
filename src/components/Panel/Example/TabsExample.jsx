import React from "react";
import PanelTab from "../PanelTab";
import PanelTabs from "../PanelTabs";
import PanelWindow from "../PanelWindow";

const TabsExample = () => {
  const [tabValue, setTabValue] = React.useState(1);

  const handleChange = (event, newTabValue) => {
    setTabValue(newTabValue);
  };
  return (
    <div>
      <PanelTabs
        value={tabValue}
        onChange={handleChange}
        aria-label="basic tabs example"
      >
        <PanelTab label="Overview">
          <i className="fa-solid fa-house me-2"></i>
          Overview
        </PanelTab>
        <PanelTab label="Details">
          <i className="fa-solid fa-edit me-2"></i>
          Details
        </PanelTab>
        <PanelTab label="Activity">
          <i
            className="fa-solid fa-share
          me-2"
          ></i>
          Activity
        </PanelTab>
        <PanelTab label="Life Cycle">
          <i className="fa-solid fa-address-book me-2"></i>
          Life Cycle
        </PanelTab>
      </PanelTabs>

      <PanelWindow value={tabValue} index={1}>
        Hello Details
      </PanelWindow>
      <PanelWindow value={tabValue} index={0}>
        Hello Overview
      </PanelWindow>
      <PanelWindow value={tabValue} index={2}>
        Hello Activity
      </PanelWindow>
      <PanelWindow value={tabValue} index={3}>
        Hello Life Cycle
      </PanelWindow>
    </div>
  );
};

export default TabsExample;
