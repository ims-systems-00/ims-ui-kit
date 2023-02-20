import { Input } from "reactstrap";

let InputBaseProps = Object.assign({}, Input.prototype.props);

/**
 *
 * @param {InputBaseProps} props
 * @returns
 */
const InputBase = (props) => {
  return <Input {...props}>{props.children}</Input>;
};

InputBase.propTypes = {
  ...(Input.propTypes && Input.propTypes),
};

export default InputBase;
