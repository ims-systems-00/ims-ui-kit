import React from "react";
import {
  UncontrolledButtonDropdown,
  UncontrolledButtonDropdownProps,
} from "reactstrap";

interface UncontrolledButtonDropdownBaseProps
  extends UncontrolledButtonDropdownProps {}

const UncontrolledButtonDropdownBase: React.FC<UncontrolledButtonDropdownBaseProps> =
  ({ children, ...rest }) => {
    return (
      <UncontrolledButtonDropdown {...rest}>
        {children}
      </UncontrolledButtonDropdown>
    );
  };

export default UncontrolledButtonDropdownBase;
