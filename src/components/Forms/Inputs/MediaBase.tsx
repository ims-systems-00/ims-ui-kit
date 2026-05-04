import React from "react";
import { Media, MediaProps } from "reactstrap";

interface MediaBaseProps extends MediaProps {}

const MediaBase: React.FC<MediaBaseProps> = ({ children, ...rest }) => {
  return <Media {...rest}>{children}</Media>;
};

export default MediaBase;
