import { List } from "reactstrap";

let ListBaseProps = Object.assign({}, List.prototype?.props);

/**
 *
 * @param {ListBaseProps} props
 * @returns
 */

const ListBase = ({ children, ...rest }) => {
  return <List {...rest}>{children}</List>;
};

ListBase.propTypes = {
  ...(List.propTypes && List.propTypes),
};

export default ListBase;
