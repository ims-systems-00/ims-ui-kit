import { Row } from "reactstrap";


let RowProps = Object.assign({}, Row.prototype.props);

/**
 *
 * @param {RowProps} props
 * @returns
 */
const RowBase = (props) => {
  return <Row {...props}>{props.children}</Row>;
};

RowBase.propTypes = {
  ...(Row.propTypes && Row.propTypes),
};

export default RowBase;
