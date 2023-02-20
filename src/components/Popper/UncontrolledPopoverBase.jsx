import { UncontrolledPopover } from "reactstrap";

let UncontrolledPopoverBaseProps = Object.assign({}, UncontrolledPopover.prototype.props);

/**
 *
 * @param {UncontrolledPopoverBaseProps} props
 * @returns
 */
const UncontrolledPopoverBase = (props) => {
  return <UncontrolledPopover {...props}>{props.children}</UncontrolledPopover>;
};

UncontrolledPopoverBase.propTypes = {
  ...(UncontrolledPopover.propTypes && UncontrolledPopover.propTypes),
};

export default UncontrolledPopoverBase;
