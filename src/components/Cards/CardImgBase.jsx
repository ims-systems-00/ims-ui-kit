import { CardImg } from "reactstrap";


let CardImgBaseProps = Object.assign({}, CardImg.prototype.props);

/**
 *
 * @param {CardImgBaseProps} props
 * @returns
 */
const CardImgBase = (props) => {
  return <CardImg {...props}>{props.children}</CardImg>;
};

CardImgBase.propTypes = {
  ...(CardImg.propTypes && CardImg.propTypes),
};

export default CardImgBase;
