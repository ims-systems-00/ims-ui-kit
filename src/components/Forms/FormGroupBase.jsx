import { FormGroup } from "reactstrap";



let FormGroupBaseProps = Object.assign({}, FormGroup.prototype.props);

/**
 *
 * @param {FormGroupBaseProps} props
 * @returns
 */
const FormGroupBase = (props) => {
  return <FormGroup {...props}>{props.children}</FormGroup>;
};

FormGroupBase.propTypes = {
  ...(FormGroup.propTypes && FormGroup.propTypes),
};

export default FormGroupBase;
