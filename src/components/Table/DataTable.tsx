import React from "react";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import { createColumnHelper, flexRender, getCoreRowModel, useReactTable } from "@tanstack/react-table";
import type { ColumnSizingState, VisibilityState, RowSelectionState, OnChangeFn } from "@tanstack/react-table";
import classNames from "classnames";
import Input, { InputBaseProps } from "../Forms/Inputs/InputBase";
import PerfectScrollbar from "react-perfect-scrollbar";

const columnHelper = createColumnHelper();
const VoidSpace = ({ minVoidspace = 3 }) => <div style={{ height: minVoidspace * 100 }}></div>;
const EmptyDataFallback = () => {
  return (
    <div className="p-5 d-flex justify-content-center align-items-center flex-column">
      <h4 className="mb-2">No results found.</h4>
      <p>Try adding some data or change filters.</p>
    </div>
  );
};
const MIN_DATA_LIMIT_FOR_VOID_SPACE = 3;
const COLUMN_SIZING_STORAGE_PREFIX = "ims-ui-kit:data-table:column-sizing:";
const getColumnSizingStorageKey = (tableKey: string) => `${COLUMN_SIZING_STORAGE_PREFIX}${tableKey}`;

const readColumnSizing = (storageKey: string): ColumnSizingState => {
  if (typeof window === "undefined") return {};

  try {
    const storedValue = window.localStorage.getItem(storageKey);
    if (!storedValue) return {};

    const parsedValue = JSON.parse(storedValue);
    return parsedValue && typeof parsedValue === "object" && !Array.isArray(parsedValue)
      ? (parsedValue as ColumnSizingState)
      : {};
  } catch {
    return {};
  }
};
const writeColumnSizing = (storageKey: string, columnSizing: ColumnSizingState) => {
  if (typeof window === "undefined") return;

  try {
    window.localStorage.setItem(storageKey, JSON.stringify(columnSizing));
  } catch {}
};
interface IndeterminateCheckboxProps extends InputBaseProps {
  indeterminate: boolean;
}
function IndeterminateCheckbox({ indeterminate, className = "", ...rest }: IndeterminateCheckboxProps) {
  const ref = React.useRef<HTMLInputElement | null>(null);
  React.useEffect(() => {
    if (ref.current && typeof indeterminate === "boolean") {
      ref.current.indeterminate = !rest.checked && indeterminate;
    }
  }, [ref, indeterminate, rest.checked]);
  return <Input className={classNames("mt-row-selector", className)} type="checkbox" innerRef={ref} {...rest} />;
}
const selectionColumn = columnHelper.accessor("", {
  id: "select",
  maxSize: 50, // has to be exactly 50
  header: ({ table }) => (
    <IndeterminateCheckbox
      {...{
        checked: table.getIsAllRowsSelected(),
        indeterminate: table.getIsSomeRowsSelected(),
        onChange: table.getToggleAllRowsSelectedHandler(),
      }}
    />
  ),
  cell: ({ row }) => (
    <IndeterminateCheckbox
      {...{
        checked: row.getIsSelected(),
        disabled: !row.getCanSelect(),
        indeterminate: row.getIsSomeSelected(),
        onChange: row.getToggleSelectedHandler(),
      }}
    />
  ),
});

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
const DataTable: React.FC<TableProps> = ({
  data = [],
  columns = [],
  disableMultiSelection = true,
  disableColumnResize = false,
  defaultSize = 300,
  minSize = 150,
  columnVisibility,
  rowSelection = {},
  tableKey,
  onRowClick = function () {},
  onRowSelectionChange = function () {},
  containerClass = "",
  emptyResultsFallback = null,
}) => {
  columns = disableMultiSelection ? [...columns] : [selectionColumn, ...columns];
  const shouldPersistColumnSizing = !!tableKey;
  const storageKey = shouldPersistColumnSizing ? getColumnSizingStorageKey(tableKey!) : null;

  const [columnSizing, setColumnSizing] = React.useState<ColumnSizingState>(() =>
    shouldPersistColumnSizing && storageKey ? readColumnSizing(storageKey) : {},
  );

  React.useEffect(() => {
    if (!shouldPersistColumnSizing || !storageKey) return;
    setColumnSizing(readColumnSizing(storageKey));
  }, [shouldPersistColumnSizing, storageKey]);

  React.useEffect(() => {
    if (!shouldPersistColumnSizing || !storageKey) return;
    writeColumnSizing(storageKey, columnSizing);
  }, [columnSizing, shouldPersistColumnSizing, storageKey]);

  const table = useReactTable({
    data,
    columns,
    state: {
      rowSelection,
      columnVisibility,
      columnSizing,
    },
    getRowId: (row) => row.id,
    columnResizeMode: "onChange",
    columnResizeDirection: "ltr",
    enableRowSelection: true,
    onRowSelectionChange,
    onColumnSizingChange: setColumnSizing,
    getCoreRowModel: getCoreRowModel(),
    defaultColumn: {
      size: defaultSize,
      minSize,
    },
  });
  const [tbodyRef] = useAutoAnimate();
  let voidSpace = null;
  if (data.length < MIN_DATA_LIMIT_FOR_VOID_SPACE) {
    voidSpace = <VoidSpace minVoidspace={Math.abs(MIN_DATA_LIMIT_FOR_VOID_SPACE - data.length)} />;
  }
  if (!data.length && !emptyResultsFallback) {
    emptyResultsFallback = <EmptyDataFallback />;
  }
  return (
    <div className={classNames("data-table", containerClass)}>
      <PerfectScrollbar>
        <table
          {...{
            className: "dt-table",
            style: {
              width: table.getCenterTotalSize(),
            },
          }}
        >
          <thead className="dt-thead -header">
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id} className="dt-tr">
                {headerGroup.headers.map((header) => (
                  <th
                    key={header.id}
                    {...{
                      colSpan: header.colSpan,
                      className: classNames("dt-th", {
                        "-cursor-pointer": header.column.getCanSort(),
                      }),
                      style: {
                        width: header.getSize(),
                      },
                    }}
                  >
                    <div>
                      {header.isPlaceholder ? null : flexRender(header.column.columnDef.header, header.getContext())}
                    </div>

                    {!disableColumnResize && (
                      <div
                        onMouseDown={header.getResizeHandler()}
                        onTouchStart={header.getResizeHandler()}
                        className="col-resizer"
                      >
                        <div className="h-100 col-sepration-indicator"></div>
                      </div>
                    )}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody className="dt-tbody" ref={tbodyRef}>
            {table.getRowModel().rows.map((row, i) => (
              <tr key={row.id} className="dt-tr">
                {row.getVisibleCells().map((cell) => (
                  <td
                    key={cell.id}
                    onClick={function (event) {
                      if (cell.column?.id === "select-row" || cell.column?.id === "actions") {
                        return;
                      }
                      onRowClick(row, event);
                    }}
                    {...{
                      style: {
                        width: cell.column.getSize(),
                      },
                      className: "dt-td",
                    }}
                  >
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
        {!data.length && emptyResultsFallback}
        {voidSpace}
      </PerfectScrollbar>
    </div>
  );
};

export default DataTable;
