import { CarouselItem } from "reactstrap";


let CarouselItemBaseProps = Object.assign({}, CarouselItem.prototype.props);

/**
 *
 * @param {CarouselItemBaseProps} props
 * @returns
 */
const CarouselItemBase = (props) => {
  return <CarouselItem {...props}>{props.children}</CarouselItem>;
};

CarouselItemBase.propTypes = {
  ...(CarouselItem.propTypes && CarouselItem.propTypes),
};

export default CarouselItemBase;
