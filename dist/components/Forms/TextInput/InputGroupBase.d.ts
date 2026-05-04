import React from "react";
import { InputGroup } from "reactstrap";
type InputGroupBaseProps = typeof InputGroup.prototype.props;
/**
 *
 * @param {InputGroupBaseProps} props
 * @returns
 */
declare const InputGroupBase: {
    ({ children, ...rest }: InputGroupBaseProps): React.JSX.Element;
    propTypes: any;
};
export default InputGroupBase;
