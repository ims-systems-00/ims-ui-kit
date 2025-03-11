import React from "react";
import PlaceholderBase from "../PlaceholderBase"; // Adjust the import path as necessary
import PlaceholderButtonBase from "../PlaceholderButtonBase"; // Adjust the import path as necessary

const PlaceholderComponent: React.FC = () => {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Example Component</h1>
      <PlaceholderBase color="secondary" style={{ height: 150 }}>
        <PlaceholderBase type="text" />
      </PlaceholderBase>
      <div style={{ marginTop: "20px" }}>
        <PlaceholderButtonBase color="primary">
          Primary Button
        </PlaceholderButtonBase>
        <PlaceholderButtonBase color="secondary" style={{ marginLeft: "10px" }}>
          Secondary Button
        </PlaceholderButtonBase>
      </div>
    </div>
  );
};

export default PlaceholderComponent;
