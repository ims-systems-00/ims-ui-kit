import { ListInlineItem } from "reactstrap";

let ListInlineItemBaseProps = Object.assign(
  {},
  ListInlineItem.prototype?.props
);

/**
 *
 * @param {ListInlineItemBaseProps} props
 * @returns
 */

const ListInlineItemBase = ({ children, ...rest }) => {
  return <ListInlineItem {...rest}>{children}</ListInlineItem>;
};

ListInlineItemBase.propTypes = {
  ...(ListInlineItem.propTypes && ListInlineItem.propTypes),
};

export default ListInlineItemBase;
