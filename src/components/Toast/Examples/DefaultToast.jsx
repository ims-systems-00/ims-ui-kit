import React from "react";
import Toast from "../ToastBase";
import ToastHeader from "../ToastHeaderBase";
import ToastBody from "../ToastBodyBase";

const DefaultToast = ({}) => {
  return (
    <div className="p-3 my-2 rounded">
      <Toast>
        <ToastHeader>Reactstrap</ToastHeader>
        <ToastBody>
          This is a toast on a white background — check it out!
        </ToastBody>
      </Toast>
    </div>
  );
};

export default DefaultToast;
