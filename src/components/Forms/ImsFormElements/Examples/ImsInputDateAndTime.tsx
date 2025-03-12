import React, { useState } from "react";
import ImsInputDateAndTimeBase from "../ImsInputDateAndTime";
const ImsInputDateAndTime = ({}) => {
  const [time, setTime] = useState("");
  return (
    <>
      <h2>Date and time input</h2>
      <ImsInputDateAndTimeBase />
    </>
  );
};

export default ImsInputDateAndTime;
