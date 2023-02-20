import { InputGroupText } from "reactstrap";

let InputGroupTextBaseProps = Object.assign({}, InputGroupText.prototype.props);

/**
 *
 * @param {InputGroupTextBaseProps} props
 * @returns
 */
const InputGroupTextBase = (props) => {
  return <InputGroupText {...props}>{props.children}</InputGroupText>;
};

InputGroupTextBase.propTypes = {
  ...(InputGroupText.propTypes && InputGroupText.propTypes),
};

export default InputGroupTextBase;
