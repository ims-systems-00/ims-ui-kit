import { Toast } from "reactstrap";

let ToastBaseProps = Object.assign({}, Toast.prototype?.props);

/**
 * @param {ToastBaseProps} props
 * @returns
 * */

const ToastBase = ({ children, ...rest }) => {
  return <Toast {...rest}>{children}</Toast>;
};

ToastBase.propTypes = {
  ...(Toast.propTypes && Toast.propTypes),
};

export default ToastBase;
