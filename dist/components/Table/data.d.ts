import React from "react";
interface ITableData {
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
    }>;
}
export declare const data: ITableData;
export {};
