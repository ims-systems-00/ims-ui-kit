import { Carousel } from "reactstrap";

let CarouselBaseProps = Object.assign({}, Carousel.prototype.props);

/**
 *
 * @param {CarouselBaseProps} props
 * @returns {JSX.Element}
 */
const CarouselBase = (props) => {
  return <Carousel {...props}>{props.children}</Carousel>;
};

CarouselBase.propTypes = {
  ...(Carousel.propTypes && Carousel.propTypes),
};

export default CarouselBase;
