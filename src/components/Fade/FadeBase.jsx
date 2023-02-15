import React from "react";
import { Fade } from "reactstrap";

let FadeBaseProps = Object.assign({}, Fade.prototype?.props);

const FadeBase = ({ children, ...rest }) => {
  return <Fade {...rest}>{children}</Fade>;
};

FadeBase.propTypes = {
  ...(FadeBase.propTypes && FadeBase.propTypes),
};

export default FadeBase;
