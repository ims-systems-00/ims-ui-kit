import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import { Table } from "reactstrap";

const ImsSimpleTable = ({
  onRowClick = () => {},
  active,
  linear,
  ...props
}) => {
  const [selectedRow, setSelectedRow] = React.useState(null);
  const handleActiveRow = (e) => {
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

ImsSimpleTable.propTypes = {
  thead: PropTypes.arrayOf(
    PropTypes.shape({
      className: PropTypes.string,
      text: PropTypes.string.isRequired,
    })
  ).isRequired,
  tbody: PropTypes.arrayOf(
    PropTypes.shape({
      className: PropTypes.string,
      data: PropTypes.arrayOf(
        PropTypes.shape({
          className: PropTypes.string,
          item: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.number,
            PropTypes.node,
          ]).isRequired,
        })
      ).isRequired,
      actions: PropTypes.node,
    })
  ).isRequired,
  active: PropTypes.bool,
};

export default ImsSimpleTable;
