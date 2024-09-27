import React from "react";
import DropdownToggle, {
  DropdownToggleBaseProps,
} from "../Dropdowns/DropdownToggleBase";
import classNames from "classnames";
interface DTRowActionsToggleProps extends DropdownToggleBaseProps {}
const DTRowActionsToggle: React.FC<DTRowActionsToggleProps> = ({
  children,
  className,
  ...rest
}) => {
  return (
    <DropdownToggle
      size="sm"
      outline
      className={classNames("border-0", className)}
    >
      {children}
    </DropdownToggle>
  );
};

export default DTRowActionsToggle;
