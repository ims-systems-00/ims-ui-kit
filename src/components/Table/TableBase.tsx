import React from "react";
import { Table, TableProps } from "reactstrap";

export interface TableBaseProps extends TableProps {}

const TableBase: React.FC<TableBaseProps> = ({ children, ...rest }) => {
  return <Table {...rest}>{children}</Table>;
};

export default TableBase;
