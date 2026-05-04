import React from "react";
import { Form, FormProps } from "reactstrap";

interface FormBaseProps extends FormProps {}

const FormBase: React.FC<FormBaseProps> = ({ children, ...rest }) => {
  return <Form {...rest}>{children}</Form>;
};

export default FormBase;
