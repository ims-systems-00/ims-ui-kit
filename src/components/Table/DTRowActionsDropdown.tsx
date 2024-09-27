import React from "react";
import UncontrolledDropdown, {
  UncontrolledDropdownBaseProps,
} from "../Dropdowns/UncontrolledDropdownBase";
import classNames from "classnames";
interface DTRowActionsDropdownProps extends UncontrolledDropdownBaseProps {}
const DTRowActionsDropdown: React.FC<DTRowActionsDropdownProps> = ({
  children,
  className,
  ...rest
}) => {
  return (
    <UncontrolledDropdown
      className={classNames("dt-row-actions", className)}
      {...rest}
    >
      {children}
    </UncontrolledDropdown>
  );
};

export default DTRowActionsDropdown;
