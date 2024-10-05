import classNames from "classnames";
import Button, { ButtonBaseProps } from "../Buttons/ButtonBase";
import React from "react";

interface PaginationLinkBaseProps extends ButtonBaseProps {}

const PaginationLinkBase: React.FC<PaginationLinkBaseProps> = ({
  children,
  ...rest
}) => {
  return (
    <Button className={classNames(`page-link ${rest.className}`, {})} {...rest}>
      {children}
    </Button>
  );
};

export default PaginationLinkBase;
