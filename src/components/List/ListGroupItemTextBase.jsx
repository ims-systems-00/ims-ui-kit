import { ListGroupItemText } from "reactstrap";

let ListGroupItemTextBaseProps = Object.assign(
  {},
  ListGroupItemText.prototype?.props
);

/**
 *
 * @param {ListGroupItemTextBaseProps} props
 * @returns
 */

const ListGroupItemTextBase = ({ children, ...rest }) => {
  return <ListGroupItemText {...rest}>{children}</ListGroupItemText>;
};

ListGroupItemTextBase.propTypes = {
  ...(ListGroupItemText.propTypes && ListGroupItemText.propTypes),
};

export default ListGroupItemTextBase;
