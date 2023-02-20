import { CardTitle } from "reactstrap";


let CardTitleBaseProps = Object.assign({}, CardTitle.prototype.props);

/**
 *
 * @param {CardTitleBaseProps} props
 * @returns
 */
const CardTitleBase = (props) => {
  return <CardTitle {...props}>{props.children}</CardTitle>;
};

CardTitleBase.propTypes = {
  ...(CardTitle.propTypes && CardTitle.propTypes),
};

export default CardTitleBase;
