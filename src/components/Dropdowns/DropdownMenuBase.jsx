import { DropdownMenu } from "reactstrap";

let DropdownMenuBaseProps = Object.assign({}, DropdownMenu.prototype.props);

/**
 *
 * @param {DropdownMenuBaseProps} props
 * @returns
 */
const DropdownMenuBase = ({ ...props }) => {
  return <DropdownMenu {...props}>{props.children}</DropdownMenu>;
};

DropdownMenuBase.propTypes = {
  ...(DropdownMenu.propTypes && DropdownMenu.propTypes),
};
export default DropdownMenuBase;
