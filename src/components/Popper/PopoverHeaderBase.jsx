import { PopoverHeader } from "reactstrap";

let PopoverHeaderBaseProps = Object.assign({}, PopoverHeader.prototype.props);
/**
 *
 * @param {PopoverHeaderBaseProps} props
 * @returns
 */
const PopoverHeaderBase = (props) => {
  return <PopoverHeader {...props}>{props.children}</PopoverHeader>;
};
PopoverHeaderBase.propTypes = {
  ...(PopoverHeader.propTypes && PopoverHeader.propTypes),
};
export default PopoverHeaderBase;
