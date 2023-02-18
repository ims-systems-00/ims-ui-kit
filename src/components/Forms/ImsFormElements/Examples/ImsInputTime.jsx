import React from "react";
import ImsInputTimeBase from "../ImsInputTime";

const ImsInputTime = () => {
  return (
    <>
      <h2>Time Input</h2>
      <ImsInputTimeBase label="Label Text" onChange={(e) => console.log(e)} />
    </>
  );
};

export default ImsInputTime;
