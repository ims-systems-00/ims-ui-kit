import React from "react";
import { FormText, FormTextProps } from "reactstrap";

interface FormTextBaseProps extends FormTextProps {}

const FormTextBase: React.FC<FormTextBaseProps> = ({ children, ...rest }) => {
  return <FormText {...rest}>{children}</FormText>;
};

export default FormTextBase;
