import React from "react";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
  VisibilityState,
  RowSelectionState,
  OnChangeFn,
} from "@tanstack/react-table";
import classNames from "classnames";
import Input, { InputBaseProps } from "../Forms/Inputs/InputBase";
import PerfectScrollbar from "react-perfect-scrollbar";

const columnHelper = createColumnHelper();
interface IndeterminateCheckboxProps extends InputBaseProps {
  indeterminate: boolean;
}
function IndeterminateCheckbox({
  indeterminate,
  className = "",
  ...rest
}: IndeterminateCheckboxProps) {
  const ref = React.useRef<HTMLInputElement | null>(null);
  React.useEffect(() => {
    if (ref.current && typeof indeterminate === "boolean") {
      ref.current.indeterminate = !rest.checked && indeterminate;
    }
  }, [ref, indeterminate, rest.checked]);
  return (
    <Input
      className={"mt-row-selector"}
      type="checkbox"
      innerRef={ref}
      {...rest}
    />
  );
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
  onRowSelectionChange: OnChangeFn<RowSelectionState>;
  onRowClick?: Function;
  containerClass?: string;
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
  onRowClick = function () {},
  onRowSelectionChange = function () {},
  containerClass = "",
}) => {
  columns = disableMultiSelection
    ? [...columns]
    : [selectionColumn, ...columns];
  const table = useReactTable({
    data,
    columns,
    state: {
      rowSelection,
      columnVisibility,
    },
    getRowId: (row) => row.id, // if deves provide id key in row data it will be picked here
    columnResizeMode: "onChange",
    columnResizeDirection: "ltr",
    enableRowSelection: true,
    onRowSelectionChange,
    getCoreRowModel: getCoreRowModel(),
    defaultColumn: {
      size: defaultSize,
      minSize,
    },
  });
  const [tbodyRef] = useAutoAnimate();
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
                    <div className="">
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </div>
                    {!disableColumnResize && (
                      <div
                        {...{
                          onDoubleClick: () => {},
                          onMouseDown: header.getResizeHandler(),
                          onTouchStart: header.getResizeHandler(),
                          className: "col-resizer",
                        }}
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
                      if (
                        cell.column?.id === "select-row" ||
                        cell.column?.id === "actions"
                      ) {
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
      </PerfectScrollbar>
    </div>
  );
};

export default DataTable;
