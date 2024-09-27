import React from "react";
import { VisibilityState, RowSelectionState, OnChangeFn } from "@tanstack/react-table";
export interface TableProps {
    data: any[];
    columns: any[];
    disableMultiSelection: boolean;
    disableColumnResize: boolean;
    defaultSize: number;
    minSize: number;
    columnVisibility: VisibilityState;
    rowSelection: RowSelectionState;
    onRowSelectionChange: OnChangeFn<RowSelectionState>;
}
declare const DataTable: React.FC<TableProps>;
export default DataTable;
