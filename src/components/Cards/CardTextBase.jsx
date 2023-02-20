import { CardText } from "reactstrap";


let CardTextBaseProps = Object.assign({}, CardText.prototype.props);

/**
 *
 * @param {CardTextBaseProps} props
 * @returns
 */
const CardTextBase = (props) => {
  return <CardText {...props}>{props.children}</CardText>;
};

CardTextBase.propTypes = {
  ...(CardText.propTypes && CardText.propTypes),
};

export default CardTextBase;
