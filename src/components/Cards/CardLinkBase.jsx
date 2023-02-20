import { CardLink } from "reactstrap";


let CardLinkBaseProps = Object.assign({}, CardLink.prototype.props);

/**
 *
 * @param {CardLinkBaseProps} props
 * @returns
 */
const CardLinkBase = (props) => {
  return <CardLink {...props}>{props.children}</CardLink>;
};

CardLinkBase.propTypes = {
  ...(CardLink.propTypes && CardLink.propTypes),
};

export default CardLinkBase;
