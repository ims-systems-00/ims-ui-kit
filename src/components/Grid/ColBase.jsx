import { Col } from "reactstrap";

let ColProps = Object.assign({}, Col.prototype.props);

/**
 *
 * @param {ColProps} props
 * @returns
 */
const ColBase = (props) => {
  return <Col {...props}>{props.children}</Col>;
};

ColBase.propTypes = {
  ...(Col.propTypes && Col.propTypes),
};

export default ColBase;
