import { CardHeader } from "reactstrap";

let CardHeaderBaseProps = Object.assign({}, CardHeader.prototype.props);

/**
 *
 * @param {CardHeaderBaseProps} props
 * @returns
 */
const CardHeaderBase = (props) => {
  return <CardHeader {...props}>{props.children}</CardHeader>;
};

CardHeaderBase.propTypes = {
  ...(CardHeader.propTypes && CardHeader.propTypes),
};

export default CardHeaderBase;
