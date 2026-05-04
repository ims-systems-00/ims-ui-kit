import React from "react";
import type { VisibilityState, RowSelectionState, OnChangeFn } from "@tanstack/react-table";
export interface TableProps {
    data: any[];
    columns: any[];
    disableMultiSelection: boolean;
    disableColumnResize: boolean;
    defaultSize: number;
    minSize: number;
    columnVisibility: VisibilityState;
    rowSelection: RowSelectionState;
    tableKey?: string;
    onRowSelectionChange: OnChangeFn<RowSelectionState>;
    onRowClick?: Function;
    containerClass?: string;
    emptyResultsFallback?: React.ReactNode | null;
}
declare const DataTable: React.FC<TableProps>;
export default DataTable;
