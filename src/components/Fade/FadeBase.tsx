import React from "react";
import { Fade, FadeProps } from "reactstrap";

interface FadeBaseProps extends FadeProps {}

const FadeBase: React.FC<FadeBaseProps> = ({ children, ...rest }) => {
  return <Fade {...rest}>{children}</Fade>;
};

export default FadeBase;
