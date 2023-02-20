import { CardSubtitle } from "reactstrap";


let CardSubtitleBaseProps = Object.assign({}, CardSubtitle.prototype.props);

/**
 *
 * @param {CardSubtitleBaseProps} props
 * @returns
 */
const CardSubtitleBase = (props) => {
  return <CardSubtitle {...props}>{props.children}</CardSubtitle>;
};

CardSubtitleBase.propTypes = {
  ...(CardSubtitle.propTypes && CardSubtitle.propTypes),
};

export default CardSubtitleBase;
