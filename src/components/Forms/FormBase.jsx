import { Form } from "reactstrap";



let FormBaseProps = Object.assign({}, Form.prototype.props);

/**
 *
 * @param {FormBaseProps} props
 * @returns
 */
const FormBase = (props) => {
  return <Form {...props}>{props.children}</Form>;
};

FormBase.propTypes = {
  ...(Form.propTypes && Form.propTypes),
};

export default FormBase;
