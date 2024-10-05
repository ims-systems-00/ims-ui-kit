import React from "react";
import Nav from "../Nav/NavBase";
import TabContent from "../TabPane/TabContentBase";
import PanelWindow from "./PanelWindow";
import PanelTab from "./PanelTab";

interface PanelTabProps {
  onClick: () => void;
  active: boolean;
  index: number;
  [key: string]: any;
}

interface PanelWindowProps {
  [key: string]: any;
}

interface PanelTabsProps {
  children: React.ReactNode;
  activeTab?: number;
  variant?: "primary" | "secondary" | "outline";
  [key: string]: any;
}

const PanelTabs: React.FC<PanelTabsProps> = ({
  children,
  activeTab = 0,
  variant,
  ...props
}) => {
  const [value, setValue] = React.useState(activeTab);

  return (
    <React.Fragment>
      <div className="panel-tabs">
        <Nav tabs variant={variant}>
          <div className="d-flex gx-0 gy-3">
            {React.Children.map(children, (child, index) => {
              if (
                child &&
                React.isValidElement<PanelTabProps>(child) &&
                child.type === PanelTab
              ) {
                return React.cloneElement(child, {
                  onClick: () => setValue(index),
                  active: index === value,
                  index: index,
                  ...props,
                });
              }
              return null;
            })}
          </div>
        </Nav>
        <TabContent activeTab={value} className="panel-windows" {...props}>
          {React.Children.map(children, (child, index) => {
            if (
              child &&
              React.isValidElement<PanelWindowProps>(child) &&
              child.type === PanelWindow
            ) {
              return React.cloneElement(child, {
                ...props,
              });
            }
            return null;
          })}
        </TabContent>
      </div>
    </React.Fragment>
  );
};

export default PanelTabs;
