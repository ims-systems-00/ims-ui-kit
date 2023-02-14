import { ListInlineItem } from "reactstrap";

let ListInlineItemBaseProps = Object.assign(
  {},
  ListInlineItemBase.prototype.props
);

/**
 *
 * @param {ListInlineItemBaseProp} props
 * @returns
 */

const ListInlineItemBase = ({ children, ...rest }) => {
  return <ListInlineItem {...rest}>{children}</ListInlineItem>;
};

ListInlineItemBase.propTypes = {
  ...(ListInlineItem.propTypes && ListInlineItem.propTypes),
};

export default ListInlineItemBase;
