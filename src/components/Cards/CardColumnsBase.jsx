import { CardColumns } from "reactstrap";

let CardColumnsBaseProps = Object.assign({}, CardColumns.prototype.props);

/**
 *
 * @param {CardColumnsBaseProps} props
 * @returns
 */
const CardColumnsBase = (props) => {
  return <CardColumns {...props}>{props.children}</CardColumns>;
};

CardColumnsBase.propTypes = {
  ...(CardColumns.propTypes && CardColumns.propTypes),
};

export default CardColumnsBase;
