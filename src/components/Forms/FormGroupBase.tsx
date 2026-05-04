import React from "react";
import { FormGroup, FormGroupProps } from "reactstrap";

interface FormGroupBaseProps extends FormGroupProps {}

const FormGroupBase: React.FC<FormGroupBaseProps> = ({ children, ...rest }) => {
  return <FormGroup {...rest}>{children}</FormGroup>;
};

export default FormGroupBase;
