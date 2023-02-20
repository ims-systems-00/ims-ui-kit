import { PlaceholderButton } from "reactstrap";



let PlaceholderButtonBaseProps = Object.assign({}, PlaceholderButton.prototype.props);

/**
 *
 * @param {PlaceholderButtonBaseProps} props
 * @returns
 */
const PlaceholderButtonBase = (props) => {
  return <PlaceholderButton {...props}>{props.children}</PlaceholderButton>;
};

PlaceholderButtonBase.propTypes = {
  ...(PlaceholderButton.propTypes && PlaceholderButton.propTypes),
};

export default PlaceholderButtonBase;
