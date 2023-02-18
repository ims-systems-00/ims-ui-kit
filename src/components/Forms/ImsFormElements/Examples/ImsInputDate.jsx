import React, { useState } from "react";
import ImsInputDateBase from "../ImsInputDate";

const ImsInputDate = ({}) => {
  const [date, setDate] = useState("");
  return (
    <>
      <h2>Date Input</h2>
      <ImsInputDateBase
        value={date}
        label="Label Text"
        onChange={(e) => {
          setDate(e.currentTarget.value);
        }}
      />
    </>
  );
};

export default ImsInputDate;
