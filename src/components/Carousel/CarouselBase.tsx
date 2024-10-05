import React from "react";
import { Carousel, CarouselProps } from "reactstrap";

interface CarouselBaseProps extends CarouselProps {}

const CarouselBase: React.FC<CarouselBaseProps> = ({ children, ...rest }) => {
  return <Carousel {...rest}>{children}</Carousel>;
};

export default CarouselBase;
