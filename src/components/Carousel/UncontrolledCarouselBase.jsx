import { UncontrolledCarousel } from "reactstrap";



let UncontrolledCarouselBaseProps = Object.assign({}, UncontrolledCarousel.prototype.props);

/**
 *
 * @param {UncontrolledCarouselBaseProps} props
 * @returns
 */
const UncontrolledCarouselBase = (props) => {
  return <UncontrolledCarousel {...props}>{props.children}</UncontrolledCarousel>;
};

UncontrolledCarouselBase.propTypes = {
  ...(UncontrolledCarousel.propTypes && UncontrolledCarousel.propTypes),
};

export default UncontrolledCarouselBase;
