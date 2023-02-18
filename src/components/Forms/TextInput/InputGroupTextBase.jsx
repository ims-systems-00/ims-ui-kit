import React from "react";
import { InputGroupText } from "reactstrap";
import { handleGroupFocus } from "./utility";

let InputGroupTextBaseProps = Object.assign({}, InputGroupText.prototype.props);

/**
 *
 * @param {InputGroupTextBaseProps} props
 * @returns
 */

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

InputGroupTextBase.propTypes = {
  ...(InputGroupText.propTypes && InputGroupText.propTypes),
};

export default InputGroupTextBase;
