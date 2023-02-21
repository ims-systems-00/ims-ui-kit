import { InputGroupAddon } from "reactstrap";

let InputGroupAddonBaseProps = Object.assign(
  {},
  InputGroupAddon.prototype.props
);

/**
 *
 * @param {InputGroupAddonBaseProps} props
 * @returns
 */
const InputGroupAddonBase = (props) => {
  return <InputGroupAddon {...props}>{props.children}</InputGroupAddon>;
};

InputGroupAddonBase.propTypes = {
  ...(InputGroupAddon.propTypes && InputGroupAddon.propTypes),
};

export default InputGroupAddonBase;
