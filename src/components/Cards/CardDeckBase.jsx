import { CardDeck } from "reactstrap";

let CardDeckBaseProps = Object.assign({}, CardDeck.prototype.props);

/**
 *
 * @param {CardDeckBaseProps} props
 * @returns
 */
const CardDeckBase = (props) => {
  return <CardDeck {...props}>{props.children}</CardDeck>;
};

CardDeckBase.propTypes = {
  ...(CardDeck.propTypes && CardDeck.propTypes),
};

export default CardDeckBase;
