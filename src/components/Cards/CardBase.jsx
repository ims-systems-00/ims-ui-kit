import { Card } from "reactstrap";

let CardBaseProps = Object.assign({}, Card.prototype.props);

/**
 *
 * @param {CardBaseProps} props
 * @returns
 */
const CardBase = (props) => {
  return <Card {...props}>{props.children}</Card>;
};

CardBase.propTypes = {
  ...(Card.propTypes && Card.propTypes),
};

export default CardBase;
