import PropTypes from "prop-types";
import { Col, FormGroup, Label } from "reactstrap";
import Input from "../InputBase";

let ImsInputTextProps = Object.assign({}, Input.prototype.props);

/**
 * @param {ImsInputTextProps} props
 * @returns
 */

const ImsInputText = ({
  label,
  mandatory = false,
  error = "",
  feedbackText = "",
  ...rest
}) => {
  return (
    <>
      <FormGroup row>
        {label && (
          <Col sm="12">
            <Label>
              {label} {mandatory ? <span className="text-danger">*</span> : ""}
            </Label>
          </Col>
        )}
        <Col sm="12">
          <Input invalid={error} {...rest} />
          {error && <label className="text-danger">{error}</label>}
        </Col>
      </FormGroup>
    </>
  );
};

ImsInputText.propTypes = {
  ...(ImsInputTextProps && ImsInputTextProps),
  /** Left Icon */
  leftIcon: PropTypes.string,
  /** Right Icon */
  rightIcon: PropTypes.string,
  /** Left Icon Style */
  leftIconStyle: PropTypes.string,
  /** Right Icon Style */
  rightIconStyle: PropTypes.string,
  /** Label */
  label: PropTypes.string,
  /** Type */
  type: PropTypes.string,
  /** Mandatory */
  mandatory: PropTypes.bool,
  /** Error */
  error: PropTypes.string,
  /** Valid */
  valid: PropTypes.bool,
  /** On Change */
  onChange: PropTypes.func,
  /** Label Column */
  labelCol: PropTypes.string,
  /** Input Column */
  inputCol: PropTypes.string,
  /** Value */
  value: PropTypes.string,
  /** Placeholder */
  placeholder: PropTypes.string,

  /** Input Props */
  ...Input.propTypes,
};

export default ImsInputText;
