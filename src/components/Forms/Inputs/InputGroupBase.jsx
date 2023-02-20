import { InputGroup } from "reactstrap";

let InputGroupBaseProps = Object.assign({}, InputGroup.prototype.props);

/**
 *
 * @param {InputGroupBaseProps} props
 * @returns
 */
const InputGroupBase = (props) => {
  return <InputGroup {...props}>{props.children}</InputGroup>;
};

InputGroupBase.propTypes = {
  ...(InputGroup.propTypes && InputGroup.propTypes),
};

export default InputGroupBase;
