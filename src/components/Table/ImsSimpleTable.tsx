import React from "react";
import classnames from "classnames";
import Table, { TableBaseProps } from "./TableBase";

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

const ImsSimpleTable: React.FC<ImsSimpleTableProps> = ({
  onRowClick = () => {},
  active,
  linear,
  ...props
}) => {
  const [selectedRow, setSelectedRow] = React.useState<number | null>(null);
  const handleActiveRow = (e: React.MouseEvent<HTMLTableRowElement>) => {
    const index = e.currentTarget.rowIndex - 1;
    setSelectedRow(index);
  };
  return (
    <Table
      hover
      {...props}
      className={classnames(props.className, {
        "table-linear": linear,
      })}
    >
      <thead>
        <tr>
          {props.thead.map((prop, key) => {
            return (
              <th
                className={classnames("", {
                  "text-right": props.thead.length - 1 === key,
                })}
                key={key}
              >
                {prop.text}
              </th>
            );
          })}
        </tr>
      </thead>
      <tbody>
        {props.tbody.map(({ onRowClick = function () {}, ...prop }, key) => {
          return (
            <tr
              onClick={(e) => {
                handleActiveRow(e);
                onRowClick(e);
              }}
              className={classnames({
                /** allow row active feature only if sepcified in the prop */
                "table-active": active && selectedRow === key,
              })}
              key={key}
            >
              {prop.data.map((data, k) => {
                return (
                  <td
                    className={classnames({
                      [data.className]: data.className !== undefined,
                    })}
                    key={k}
                  >
                    {data.item}
                  </td>
                );
              })}
              {prop.actions && <td className="text-right">{prop.actions}</td>}
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
};

export default ImsSimpleTable;
