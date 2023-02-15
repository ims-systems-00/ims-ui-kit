import classNames from "classnames";
import PropTypes from "prop-types";
import { Button } from "reactstrap";

let ButtonBaseProps = Object.assign(
  {
    leftIcon: "",
    rightIcon: "",
  },
  Button.prototype.props
);

/**
 *
 * @param {ButtonBaseProps} props
 * @returns
 */
const ButtonBase = (props) => {
  return (
    <Button {...props}>
      {props.leftIcon ? (
        <i className={classNames(props.leftIcon, "me-2")} />
      ) : null}
      {props.children}
      {props.rightIcon ? (
        <i className={classNames(props.rightIcon, "ms-2")} />
      ) : null}
    </Button>
  );
};

ButtonBase.propTypes = {
  leftIcon: PropTypes.string,
  rightIcon: PropTypes.string,
  ...(Button.propTypes && Button.propTypes),
};

export default ButtonBase;
