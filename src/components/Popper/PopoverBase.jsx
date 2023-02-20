import { Popover } from "reactstrap";

let PopoverBaseProps = Object.assign({}, Popover.prototype.props);

/**
 *
 * @param {PopoverBaseProps} props
 * @returns
 */
const PopoverBase = (props) => {
  return <Popover {...props}>{props.children}</Popover>;
};

PopoverBase.propTypes = {
  ...(Popover.propTypes && Popover.propTypes),
};

export default PopoverBase;
