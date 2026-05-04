import React from "react";
import { CarouselItem, CarouselItemProps } from "reactstrap";

interface CarouselItemBaseProps extends CarouselItemProps {}

const CarouselItemBase: React.FC<CarouselItemBaseProps> = ({
  children,
  ...rest
}) => {
  return <CarouselItem {...rest}>{children}</CarouselItem>;
};

export default CarouselItemBase;
