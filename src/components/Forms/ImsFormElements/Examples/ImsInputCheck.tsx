import React from "react";
import ImsInputCheckBase from "../ImsInputCheck";

const ImsInputCheck = ({}) => {
  return (
    <>
      <ImsInputCheckBase
        defaultChecked={true}
        label="I agree to the Terms and Conditions"
      />
      <ImsInputCheckBase label="Get notified about new products" />
    </>
  );
};

export default ImsInputCheck;
