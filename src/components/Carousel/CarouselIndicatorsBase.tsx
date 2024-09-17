import React from "react";
import { CarouselIndicators, CarouselIndicatorsProps } from "reactstrap";

interface CarouselIndicatorsBaseProps extends CarouselIndicatorsProps {}

const CarouselIndicatorsBase: React.FC<CarouselIndicatorsBaseProps> = ({
  children,
  ...rest
}) => {
  return <CarouselIndicators {...rest}>{children}</CarouselIndicators>;
};

export default CarouselIndicatorsBase;
