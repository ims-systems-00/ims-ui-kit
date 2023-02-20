import { CarouselIndicators } from "reactstrap";

let CarouselIndicatorsBaseProps = Object.assign(
  {},
  CarouselIndicators.prototype.props
);

/**
 *
 * @param {CarouselIndicatorsBaseProps} props
 * @returns
 */
const CarouselIndicatorsBase = (props) => {
  return <CarouselIndicators {...props}>{props.children}</CarouselIndicators>;
};

CarouselIndicatorsBase.propTypes = {
  ...(CarouselIndicators.propTypes && CarouselIndicators.propTypes),
};

export default CarouselIndicatorsBase;
