import { PopperContent } from "reactstrap";

let PopperContentBaseProps = Object.assign({}, PopperContent.prototype.props);

/**
 *
 * @param {PopperContentBaseProps} props
 * @returns
 */
const PopperContentBase = (props) => {
  return <PopperContent {...props}>{props.children}</PopperContent>;
};

PopperContentBase.propTypes = {
  ...(PopperContent.propTypes && PopperContent.propTypes),
};

export default PopperContentBase;
