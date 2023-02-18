import { UncontrolledAlert } from "reactstrap";

let UncontrolledAlertBaseProps = Object.assign(
  {},
  UncontrolledAlert.prototype?.props
);

/**
 * @param {UncontrolledAlertBaseProps} props
 * @returns
 * */

const UncontrolledAlertBase = ({ children, ...rest }) => {
  return <UncontrolledAlert {...rest}>{children}</UncontrolledAlert>;
};

UncontrolledAlertBase.propTypes = {
  ...(UncontrolledAlert.propTypes && UncontrolledAlert.propTypes),
};

export default UncontrolledAlertBase;
