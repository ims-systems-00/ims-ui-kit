import React from "react";
import { Nav, NavItem, NavLink, TabPane, TabContent } from "../../../index";

const TabsPanelExample = ({}) => {
  const [activeTab, setActiveTab] = React.useState("1");
  return (
    <div>
      <Nav tabs variant="outline">
        <NavItem>
          <NavLink
            active={activeTab === "1"}
            onClick={(e) => {
              e.preventDefault();
              setActiveTab("1");
            }}
          >
            <i className="fa-solid fa-home me-2"></i>
            Home
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            active={activeTab === "2"}
            onClick={(e) => {
              e.preventDefault();
              setActiveTab("2");
            }}
          >
            <i className="fa-solid fa-user me-2"></i>
            Profile
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            active={activeTab === "3"}
            onClick={(e) => {
              e.preventDefault();
              setActiveTab("3");
            }}
          >
            <i className="fa-solid fa-envelope me-2"></i>
            Messages
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            active={activeTab === "4"}
            onClick={(e) => {
              e.preventDefault();
              setActiveTab("4");
            }}
          >
            <i className="fa-solid fa-cog me-2"></i>
            Settings
          </NavLink>
        </NavItem>
      </Nav>
      <br /> <br />
      <TabContent activeTab={activeTab}>
        <TabPane tabId="1">
          <p>HELLO WORLD 1</p>
        </TabPane>
        <TabPane tabId="2">
          <p>HELLO WORLD 2</p>
        </TabPane>
        <TabPane tabId="3">
          <p>HELLO WORLD 3</p>
        </TabPane>
        <TabPane tabId="4">
          <p>HELLO WORLD 4</p>
        </TabPane>
      </TabContent>
    </div>
  );
};

export default TabsPanelExample;
