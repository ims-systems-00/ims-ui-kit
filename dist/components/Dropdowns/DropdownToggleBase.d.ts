import React from "react";
import { DropdownToggleProps } from "reactstrap";
interface DropdownToggleBaseProps extends DropdownToggleProps {
    startIcon?: string | undefined;
}
declare const DropdownToggleBase: React.FC<DropdownToggleBaseProps>;
export default DropdownToggleBase;
