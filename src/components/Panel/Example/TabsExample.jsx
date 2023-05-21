import React from "react";
import PanelTab from "../PanelTab";
import PanelTabs from "../PanelTabs";
import PanelWindow from "../PanelWindow";

const TabsExample = ({}) => {
  return (
    <React.Fragment>
      <PanelTabs activeTab={1} variant={"outline"} >
        <PanelTab>
          <i className="fa-solid fa-house me-2"></i>
          Overview
        </PanelTab>
        <PanelTab>
          <i className="fa-solid fa-edit me-2"></i>
          Details
        </PanelTab>
        <PanelTab>
          <i
            className="fa-solid fa-share
          me-2"
          ></i>
          Activity
        </PanelTab>
        <PanelTab>
          <i className="fa-solid fa-address-book me-2"></i>
          Life Cycle
        </PanelTab>
        <PanelTab>
          <i className="fa-solid fa-address-book me-2"></i>
          Life 
        </PanelTab>
        <PanelTab>
          <i className="fa-solid fa-address-book me-2"></i>
           Cycle
        </PanelTab>
        <PanelTab>
          <i className="fa-solid fa-address-book me-2"></i>
          Test
        </PanelTab>
        <PanelWindow tabId={0}>
          <h1>Hello Overview</h1>
        </PanelWindow>
        <PanelWindow tabId={1}>
          <h1>Hello Details</h1>
        </PanelWindow>
        <PanelWindow tabId={2}>
          <h1>Hello Activity</h1>
        </PanelWindow>
        <PanelWindow tabId={3}>
          <h1>Hello Life Cycle..</h1>
        </PanelWindow>
      </PanelTabs>
    </React.Fragment>
  );
};

export default TabsExample;
