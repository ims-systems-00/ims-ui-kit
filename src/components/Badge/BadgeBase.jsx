import { Badge } from "reactstrap";


let BadgeBaseProps = Object.assign({}, Badge.prototype.props);

/**
 *
 * @param {BadgeBaseProps} props
 * @returns
 */
const BadgeBase = (props) => {
  return <Badge {...props}>{props.children}</Badge>;
};

BadgeBase.propTypes = {
  ...(Badge.propTypes && Badge.propTypes),
};

export default BadgeBase;
