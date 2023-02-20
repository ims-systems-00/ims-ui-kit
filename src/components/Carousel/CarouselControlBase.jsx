import { CarouselControl } from "reactstrap";


let CarouselControlBaseProps = Object.assign({}, CarouselControl.prototype.props);

/**
 *
 * @param {CarouselControlBaseProps} props
 * @returns
 */
const CarouselControlBase = (props) => {
  return <CarouselControl {...props}>{props.children}</CarouselControl>;
};

CarouselControlBase.propTypes = {
  ...(CarouselControl.propTypes && CarouselControl.propTypes),
};

export default CarouselControlBase;
