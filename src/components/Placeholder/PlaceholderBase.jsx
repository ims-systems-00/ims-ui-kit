import { Placeholder } from "reactstrap";


let PlaceholderBaseProps = Object.assign({}, Placeholder.prototype.props);

/**
 *
 * @param {PlaceholderBaseProps} props
 * @returns
 */
const PlaceholderBase = (props) => {
  return <Placeholder {...props}>{props.children}</Placeholder>;
};

PlaceholderBase.propTypes = {
  ...(Placeholder.propTypes && Placeholder.propTypes),
};

export default PlaceholderBase;
