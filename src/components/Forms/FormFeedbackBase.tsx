import React from "react";
import { FormFeedback, FormFeedbackProps } from "reactstrap";

interface FormFeedbackBaseProps extends FormFeedbackProps {}

const FormFeedbackBase: React.FC<FormFeedbackBaseProps> = ({
  children,
  ...rest
}) => {
  return <FormFeedback {...rest}>{children}</FormFeedback>;
};

export default FormFeedbackBase;
