import React from "react";
import { TableBaseProps } from "./TableBase";
export interface ImsSimpleTableProps extends TableBaseProps {
    thead: Array<{
        className?: string;
        text: string;
    }>;
    tbody: Array<{
        className?: string;
        data: Array<{
            className: string;
            item: string | number | React.ReactNode;
        }>;
        actions?: React.ReactNode;
        onRowClick?: (e: React.MouseEvent<HTMLTableRowElement, MouseEvent>) => void;
    }>;
    active?: boolean;
    linear?: boolean;
}
declare const ImsSimpleTable: React.FC<ImsSimpleTableProps>;
export default ImsSimpleTable;
