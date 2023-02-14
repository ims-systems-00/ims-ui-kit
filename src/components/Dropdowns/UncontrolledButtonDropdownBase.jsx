import { UncontrolledButtonDropdown } from "reactstrap";

let UncontrolledButtonDropdownBaseProps = Object.assign(
  {},
  UncontrolledButtonDropdown.prototype?.props
);

/**
 *
 * @param {UncontrolledButtonDropdownBaseProps} props
 * @returns
 *
 */
const UncontrolledButtonDropdownBase = ({ children, ...rest }) => {
  return (
    <UncontrolledButtonDropdown {...rest}>
      {children}
    </UncontrolledButtonDropdown>
  );
};

UncontrolledButtonDropdownBase.propTypes = {
  ...(UncontrolledButtonDropdown.propTypes &&
    UncontrolledButtonDropdown.propTypes),
};

export default UncontrolledButtonDropdownBase;
