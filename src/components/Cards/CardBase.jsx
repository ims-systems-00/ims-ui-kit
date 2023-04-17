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
        "card-variant-list ": props.variant === "list",
        "card-variant-active": props.variant === "active",
        "card-variant-active card-hover-none":
          props.variant === "active" && props.hover === false,
        "card-variant-outline": props.variant === "outline",
        "card-variant-outline card-hover-none":
          props.variant === "outline" && props.hover === false,
        "card-variant-primary": props.variant === "primary",
        "card-variant-primary card-hover-none":
          props.variant === "primary" && props.hover === false,
        "card-variant-secondary": props.variant === "secondary",
        "card-variant-secondary card-hover-none":
          props.variant === "secondary" && props.hover === false,
        "card-variant-light": props.variant === "light",
        "card-variant-light card-hover-none":
          props.variant === "light" && props.hover === false,
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
