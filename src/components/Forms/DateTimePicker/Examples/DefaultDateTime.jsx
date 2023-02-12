import { useState } from "react";
import DateTime from "../DateTimeBase";

const DefaultDateTime = ({}) => {
  
  return (
    <>
      <h4>Default</h4>
      <DateTime />
      <br /> <br />
      <h4>With Placeholder</h4>
      <DateTime inputProps={{ placeholder: "Select Date and Time" }} />
      <br /> <br />
      <h4>Full Disabled</h4>
      <DateTime
        inputProps={{
          placeholder: "Select Date and Time",
          disabled: true,
          required: true,
          name: "date",
        }}
      />
      <br /> <br />
      <h4>Controlled</h4>
     
    </>
  );
};

export default DefaultDateTime;
