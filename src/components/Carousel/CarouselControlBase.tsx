import React from "react";
import { CarouselControl, CarouselControlProps } from "reactstrap";

interface CarouselControlBaseProps extends CarouselControlProps {}

const CarouselControlBase: React.FC<CarouselControlBaseProps> = ({
  children,
  ...rest
}) => {
  return <CarouselControl {...rest}>{children}</CarouselControl>;
};

export default CarouselControlBase;
