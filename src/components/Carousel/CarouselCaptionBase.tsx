import React from "react";
import { CarouselCaption, CarouselCaptionProps } from "reactstrap";

interface CarouselCaptionBaseProps extends CarouselCaptionProps {}

const CarouselCaptionBase: React.FC<CarouselCaptionBaseProps> = ({
  children,
  ...rest
}) => {
  return <CarouselCaption {...rest}>{children}</CarouselCaption>;
};

export default CarouselCaptionBase;
