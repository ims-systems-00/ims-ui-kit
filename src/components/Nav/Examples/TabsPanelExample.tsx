import React from "react";
import NavBase from "../NavBase";
import NavItemBase from "../NavItemBase";
import NavLinkBase from "../NavLinkBase";
import TabContentBase from "../../TabPane/TabContentBase";
import TabPaneBase from "../../TabPane/TabPaneBase";
// import { Nav, NavItem, NavLink, TabPane, TabContent } from "../../../index";

const TabsPanelExample = ({}) => {
  const [activeTab, setActiveTab] = React.useState("1");
  return (
    <div>
      <NavBase tabs variant="outline">
        <NavItemBase>
          <NavLinkBase
            active={activeTab === "1"}
            onClick={(e: any) => {
              e.preventDefault();
              setActiveTab("1");
            }}
          >
            <i className="fa-solid fa-home me-2"></i>
            Home
          </NavLinkBase>
        </NavItemBase>
        <NavLinkBase>
          <NavLinkBase
            active={activeTab === "2"}
            onClick={(e: any) => {
              e.preventDefault();
              setActiveTab("2");
            }}
          >
            <i className="fa-solid fa-user me-2"></i>
            Profile
          </NavLinkBase>
        </NavLinkBase>
        <NavItemBase>
          <NavLinkBase
            active={activeTab === "3"}
            onClick={(e: any) => {
              e.preventDefault();
              setActiveTab("3");
            }}
          >
            <i className="fa-solid fa-envelope me-2"></i>
            Messages
          </NavLinkBase>
        </NavItemBase>
        <NavItemBase>
          <NavLinkBase
            active={activeTab === "4"}
            onClick={(e: any) => {
              e.preventDefault();
              setActiveTab("4");
            }}
          >
            <i className="fa-solid fa-cog me-2"></i>
            Settings
          </NavLinkBase>
        </NavItemBase>
      </NavBase>
      <br /> <br />
      <TabContentBase activeTab={activeTab}>
        <TabPaneBase tabId="1">
          <p>HELLO WORLD 1</p>
        </TabPaneBase>
        <TabPaneBase tabId="2">
          <p>HELLO WORLD 2</p>
        </TabPaneBase>
        <TabPaneBase tabId="3">
          <p>HELLO WORLD 3</p>
        </TabPaneBase>
        <TabPaneBase tabId="4">
          <p>HELLO WORLD 4</p>
        </TabPaneBase>
      </TabContentBase>
    </div>
  );
};

export default TabsPanelExample;
