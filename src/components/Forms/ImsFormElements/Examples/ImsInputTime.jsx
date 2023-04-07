import React, { useState } from "react";
import ImsInputTimeBase from "../ImsInputTime";

const ImsInputTime = ({}) => {
  const [time, setTime] = useState("");
  return (
    <>
      <h2>Time Input</h2>
      <ImsInputTimeBase
        value={time}
        label="Label Text"
        onChange={(e) => {
          setTime(e.currentTarget.value);
        }}
      />
    </>
  );
};

export default ImsInputTime;
