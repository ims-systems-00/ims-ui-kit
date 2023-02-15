import { CardFooter } from "reactstrap";

let CardFooterBaseProps = Object.assign({}, CardFooter.prototype.props);

/**
 *
 * @param {CardFooterBaseProps} props
 * @returns
 */
const CardFooterBase = (props) => {
  return <CardFooter {...props}>{props.children}</CardFooter>;
};

CardFooterBase.propTypes = {
  ...(CardFooter.propTypes && CardFooter.propTypes),
};

export default CardFooterBase;
