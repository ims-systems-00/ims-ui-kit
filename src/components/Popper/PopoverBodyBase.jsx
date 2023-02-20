import { PopoverBody } from "reactstrap";

let PopoverBodyBaseProps = Object.assign({}, PopoverBody.prototype.props);

/**
 *
 * @param {PopoverBodyBaseProps} props
 * @returns
 */
const PopoverBodyBase = (props) => {
  return <PopoverBody {...props}>{props.children}</PopoverBody>;
};

PopoverBodyBase.propTypes = {
  ...(PopoverBody.propTypes && PopoverBody.propTypes),
};

export default PopoverBodyBase;
