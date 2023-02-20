import { CardImgOverlay } from "reactstrap";


let CardImgOverlayBaseProps = Object.assign({}, CardImgOverlay.prototype.props);

/**
 *
 * @param {CardImgOverlayBaseProps} props
 * @returns
 */
const CardImgOverlayBase = (props) => {
  return <CardImgOverlay {...props}>{props.children}</CardImgOverlay>;
};

CardImgOverlayBase.propTypes = {
  ...(CardImgOverlay.propTypes && CardImgOverlay.propTypes),
};

export default CardImgOverlayBase;
