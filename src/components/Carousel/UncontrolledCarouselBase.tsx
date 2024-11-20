import React from "react";
import { UncontrolledCarousel, UncontrolledCarouselProps } from "reactstrap";

interface UncontrolledCarouselBaseProps extends UncontrolledCarouselProps {}

const UncontrolledCarouselBase: React.FC<UncontrolledCarouselBaseProps> = ({
  children,
  ...rest
}) => {
  return <UncontrolledCarousel {...rest}>{children}</UncontrolledCarousel>;
};

export default UncontrolledCarouselBase;
