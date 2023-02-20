import { Table } from "reactstrap";


let TableBaseProps = Object.assign({}, Table.prototype.props);

/**
 *
 * @param {TableBaseProps} props
 * @returns
 */
const TableBase = (props) => {
  return <Table {...props}>{props.children}</Table>;
};

TableBase.propTypes = {
  ...(Table.propTypes && Table.propTypes),
};

export default TableBase;
