import React from "react";
import { CloseButton, CloseButtonProps } from "reactstrap";

interface CloseButtonBaseProps extends CloseButtonProps {}

const CloseButtonBase: React.FC<CloseButtonBaseProps> = ({
  children,
  ...rest
}) => {
  return <CloseButton>{children}</CloseButton>;
};

export default CloseButtonBase;
