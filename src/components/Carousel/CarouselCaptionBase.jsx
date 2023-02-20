import { CarouselCaption } from "reactstrap";


let CarouselCaptionBaseProps = Object.assign({}, CarouselCaption.prototype.props);

/**
 *
 * @param {CarouselCaptionBaseProps} props
 * @returns
 */
const CarouselCaptionBase = (props) => {
  return <CarouselCaption {...props}>{props.children}</CarouselCaption>;
};

CarouselCaptionBase.propTypes = {
  ...(CarouselCaption.propTypes && CarouselCaption.propTypes),
};

export default CarouselCaptionBase;
