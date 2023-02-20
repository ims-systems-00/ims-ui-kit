import { Media } from "reactstrap";

let MediaBaseProps = Object.assign({}, Media.prototype.props);

/**
 *
 * @param {MediaBaseProps} props
 * @returns
 */
const MediaBase = (props) => {
  return <Media {...props}>{props.children}</Media>;
};

MediaBase.propTypes = {
  ...(Media.propTypes && Media.propTypes),
};

export default MediaBase;
