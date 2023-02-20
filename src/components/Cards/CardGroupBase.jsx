import { CardGroup } from "reactstrap";

let CardGroupBaseProps = Object.assign({}, CardGroup.prototype.props);

/**
 *
 * @param {CardGroupBaseProps} props
 * @returns
 */
const CardGroupBase = (props) => {
  return <CardGroup {...props}>{props.children}</CardGroup>;
};

CardGroupBase.propTypes = {
  ...(CardGroup.propTypes && CardGroup.propTypes),
};

export default CardGroupBase;
