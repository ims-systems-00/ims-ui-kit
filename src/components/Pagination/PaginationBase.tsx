import React from "react";
import classNames from "classnames";
import { Pagination, PaginationProps } from "reactstrap";

interface PaginationBaseProps extends PaginationProps {
  separated?: boolean;
}

const PaginationBase: React.FC<PaginationBaseProps> = ({
  children,
  separated = true,
  ...rest
}) => {
  return (
    <Pagination
      className={classNames(rest.className, {
        "pagination-separated": separated,
      })}
      {...rest}
    >
      {children}
    </Pagination>
  );
};

export default PaginationBase;
