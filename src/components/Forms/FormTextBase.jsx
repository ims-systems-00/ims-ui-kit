import { FormText } from "reactstrap";

let FormTextBaseProps = Object.assign({}, FormText.prototype.props);

/**
 *
 * @param {FormTextBaseProps} props
 * @returns
 */
const FormTextBase = (props) => {
  return <FormText {...props}>{props.children}</FormText>;
};

FormTextBase.propTypes = {
  ...(FormText.propTypes && FormText.propTypes),
};

export default FormTextBase;
