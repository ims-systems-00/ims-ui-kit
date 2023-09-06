import classNames from "classnames";
import PropTypes from "prop-types";
import { Col, FormGroup, Input, Label } from "reactstrap";

let ImsInputCheckProps = Object.assign({}, Input.prototype.props);

/**
 *
 * @param {ImsInputCheckProps} props
 * @returns
 */

const ImsInputCheck = ({
  label,
  mandatory = false,
  onChange,
  unselected = false,
  error,
  helperText,
  ...rest
}) => {
  return (
    <>
      <FormGroup
        check
        className={classNames("", {
          "unselected-checkbox": unselected,
        })}
      >
        <Col md="12">
          <Input type="checkbox" {...rest} />{" "}
          <Label
            style={{
              fontSize: "16px",
            }}
            className="text-dark"
            check
          >
            {label} {mandatory ? <span className="text-danger">*</span> : ""}
          </Label>
        </Col>
        <Col sm="12">
          {error && (
            <label className="text-danger">
              <small>{error}</small>
            </label>
          )}
          {helperText && (
            <label>
              {" "}
              <small>{helperText}</small>
            </label>
          )}
        </Col>
      </FormGroup>
    </>
  );
};

ImsInputCheck.propTypes = {
  ...(ImsInputCheckProps || {}),
  /** Label for the input */
  label: PropTypes.string,
  /** Mandatory input */
  mandatory: PropTypes.bool,
  /** Unselected checkbox */
  unselected: PropTypes.bool,
  /** Input Props */
  ...Input.propTypes,
};

export default ImsInputCheck;
