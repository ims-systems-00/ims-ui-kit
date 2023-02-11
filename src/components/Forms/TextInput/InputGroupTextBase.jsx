import React from "react";
import { InputGroupText } from "reactstrap";
import { handleGroupFocus } from "./utility";

const InputGroupTextBase = ({ children, onClick, ...rest }) => {
  return (
    <InputGroupText
      onClick={(e) => {
        if (!onClick) handleGroupFocus(e);
        else onClick(e);
      }}
      {...rest}
    >
      {children}
    </InputGroupText>
  );
};

export default InputGroupTextBase;
