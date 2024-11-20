import React from "react";
import classNames from "classnames";
import { DropdownToggle, DropdownToggleProps } from "reactstrap";

export interface DropdownToggleBaseProps extends DropdownToggleProps {
  startIcon?: string | undefined;
}

const DropdownToggleBase: React.FC<DropdownToggleBaseProps> = ({
  children,
  startIcon,
  ...rest
}) => {
  return (
    <>
      <DropdownToggle {...rest}>
        {startIcon && <i className={classNames(startIcon, "me-2")}></i>}
        {children}
      </DropdownToggle>
    </>
  );
};

export default DropdownToggleBase;
