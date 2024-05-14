import classNames from "classnames";
import PropTypes from "prop-types";
import { Input } from "reactstrap";

let InputBaseProps = Object.assign({}, Input.prototype.props);

/**
 *
 * @param {InputBaseProps} props
 * @returns
 */

const variants = {
  outline: "outline",
  filled: "filled",
};
function InputBase({ variant = variants.outline, ...props }) {
  if (variant !== variants.filled)
    return (
      <Input
        className={classNames(props.className || "", {
          "form-control-filled": true,
        })}
        {...props}
      >
        {props.children}
      </Input>
    );
  return <Input {...props}>{props.children}</Input>;
}

InputBase.propTypes = {
  ...(Input.propTypes && Input.propTypes),
  variant: PropTypes.oneOf(...Object.values(variants)),
};

export default InputBase;
