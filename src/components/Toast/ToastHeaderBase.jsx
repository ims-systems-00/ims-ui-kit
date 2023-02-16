import { ToastHeader } from "reactstrap";

let ToastHeaderBaseProps = Object.assign({}, ToastHeader.prototype?.props);

/**
 * @param {ToastHeaderBaseProps} props
 * @returns
 * */

const ToastHeaderBase = ({ children, ...rest }) => {
  return <ToastHeader {...rest}>ToastHeaderBase</ToastHeader>;
};

ToastHeaderBase.propTypes = {
  ...(ToastHeader.propTypes && ToastHeader.propTypes),
};

export default ToastHeaderBase;
