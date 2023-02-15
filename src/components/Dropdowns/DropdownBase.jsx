import { Dropdown } from "reactstrap";
let DropdownBaseProps = Object.assign({}, Dropdown.prototype.props);

/**
 *
 * @param {DropdownBaseProps} props
 * @returns
 */
const DropdownBase = ({ ...props }) => {
  return <Dropdown {...props}>{props.children}</Dropdown>;
};

DropdownBase.propTypes = {
  ...(Dropdown.propTypes && Dropdown.propTypes),
};
export default DropdownBase;
