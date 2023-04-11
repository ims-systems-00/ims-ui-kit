import classNames from "classnames";
import { Card } from "reactstrap";

let CardBaseProps = Object.assign({}, Card.prototype.props);

/**
 *
 * @param {CardBaseProps} props
 * @returns
 */
const CardBase = (props) => {
  return (
    <Card
      className={classNames(props.className, {
        "card-variant-primary": props.variant === "primary",
        "card-variant-secondary": props.variant === "secondary",
        "card-variant-light": props.variant === "light",
        "card-gradient card-gradient-success":
          props.variant === "gradient" && props.color === "success",
        "card-gradient card-gradient-primary":
          props.variant === "gradient" && props.color === "primary",
        "card-gradient card-gradient-danger":
          props.variant === "gradient" && props.color === "danger",
      })}
      {...props}
    >
      {props.children}
    </Card>
  );
};

CardBase.propTypes = {
  ...(Card.propTypes && Card.propTypes),
};

export default CardBase;
