import { FormFeedback } from "reactstrap";



let FormFeedbackBaseProps = Object.assign({}, FormFeedback.prototype.props);

/**
 *
 * @param {FormFeedbackBaseProps} props
 * @returns
 */
const FormFeedbackBase = (props) => {
  return <FormFeedback {...props}>{props.children}</FormFeedback>;
};

FormFeedbackBase.propTypes = {
  ...(FormFeedback.propTypes && FormFeedback.propTypes),
};

export default FormFeedbackBase;
